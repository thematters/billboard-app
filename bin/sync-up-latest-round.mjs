#!/usr/bin/env -S node --trace-warnings

import { writeFile, mkdir, constants } from 'node:fs/promises'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'

const client = new S3Client() // use credentials from environment

const AssetsDir = './public/static'

export const main = async () => {
  const controller = new AbortController()
  const { signal } = controller

  try {
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    const roundsContent = await (
      await client.send(
        new GetObjectCommand({
          Bucket: 'matters-billboard',
          Key: 'rounds/rounds.json',
        })
      )
    ).Body.transformToString()
    const rounds = JSON.parse(roundsContent)
    console.log(
      new Date(),
      `got ${rounds.length} rounds with latest:`,
      rounds[rounds.length - 1]
    )
    await writeFile(`${AssetsDir}/rounds.json`, roundsContent, { signal })
    console.log(
      new Date(),
      `written rounds.json with ${(roundsContent.length / 1024).toFixed(1)} KBytes.`
    )

    const lastRound = rounds[rounds.length - 1]

    console.log(new Date(), 'latest round:', lastRound.id, lastRound.dirpath)

    const createDir = await mkdir(`${AssetsDir}/${lastRound.dirpath}`, {
      recursive: true,
    })
    console.log(new Date(), 'createdDir:', createDir)

    for (const file of ['distrib.json', 'treedump.json']) {
      const fileContent = await (
        await client.send(
          new GetObjectCommand({
            Bucket: 'matters-billboard',
            Key: `rounds/${lastRound.dirpath}/${file}`,
          })
        )
      ).Body.transformToString()
      await writeFile(
        `${AssetsDir}/${lastRound.dirpath}/${file}`,
        fileContent,
        {
          signal,
        }
      )
      console.log(
        new Date(),
        `written ${file} with ${(fileContent.length / 1024).toFixed(1)} KBytes.`
      )
    }
  } catch (err) {
    console.error(new Date(), `ERROR:`, err)
  }
}

await main()

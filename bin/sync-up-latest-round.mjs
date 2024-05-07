#!/usr/bin/env -S node --trace-warnings

import { writeFile, mkdir, constants } from 'node:fs/promises'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'

const client = new S3Client() // use credentials from environment

const AssetsDir = './public/static'

const outputFile = process.env.GITHUB_OUTPUT || './output-vars'

export const main = async (branch = 'prod') => {
  const controller = new AbortController()
  const { signal } = controller
  const developPrefix = branch !== 'prod' ? 'web-develop/' : ''

  console.log('```console')
  try {
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    let roundsContent = await (
      await client.send(
        new GetObjectCommand({
          Bucket: 'matters-billboard',
          Key: `${developPrefix}rounds/rounds.json`,
        })
      )
    ).Body.transformToString()
    const rounds = JSON.parse(roundsContent)
    const lastRound = rounds[rounds.length - 1]
    const output_vars = {}

    console.log(
      new Date(),
      `got ${rounds.length} rounds with latest:`,
      lastRound
    )
    output_vars.round_id = lastRound.id

    if (lastRound.draft) {
      output_vars.draft = lastRound.draft
      delete lastRound.draft // finalize the last round if still draft
      roundsContent =
        '[ ' + rounds.map((r) => JSON.stringify(r)).join(',\n') + ' ]'
    }

    await writeFile(`${AssetsDir}/rounds.json`, roundsContent, { signal })

    console.log(
      new Date(),
      `written rounds.json with ${(roundsContent.length / 1024).toFixed(1)} KBytes.`
    )

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
            Key: `${developPrefix}rounds/${lastRound.dirpath}/${file}`,
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

    const outputContent = Object.entries(output_vars)
      .map(([key, value]) => `${key}=${value}`)
      .join('\n')
    await writeFile(outputFile, outputContent, { signal })
    console.log(
      new Date(),
      `written output variables ${outputContent.length} Bytes:\n${outputContent}\ninto "${outputFile}"`
    )
  } catch (err) {
    console.error(new Date(), `ERROR:`, err)
  }

  console.log('```')
}

// console.log('run with argv:', process.argv)
await main(process.argv?.[2] || 'prod')

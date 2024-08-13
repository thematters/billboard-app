const abi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'currency_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'registry_',
        type: 'address',
        internalType: 'address payable',
      },
      {
        name: 'admin_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'name_',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'symbol_',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: '_tokenURI',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'uri',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'admin',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'calculateTax',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'amount_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'tax',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'clearAuction',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epoch_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'highestBidder',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'price',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'tax',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'clearAuctions',
    inputs: [
      {
        name: 'tokenIds_',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
      {
        name: 'epochs_',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
    ],
    outputs: [
      {
        name: 'highestBidders',
        type: 'address[]',
        internalType: 'address[]',
      },
      {
        name: 'prices',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
      {
        name: 'taxes',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'closed',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getBid',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epoch_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'bidder_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: 'bid',
        type: 'tuple',
        internalType: 'struct IBillboardRegistry.Bid',
        components: [
          {
            name: 'price',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'tax',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'contentURI',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'redirectURI',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'placedAt',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'updatedAt',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'isWon',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'isWithdrawn',
            type: 'bool',
            internalType: 'bool',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getBidderBids',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'bidder_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'limit_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'offset_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'total',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'limit',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'offset',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'bids',
        type: 'tuple[]',
        internalType: 'struct IBillboardRegistry.Bid[]',
        components: [
          {
            name: 'price',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'tax',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'contentURI',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'redirectURI',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'placedAt',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'updatedAt',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'isWon',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'isWithdrawn',
            type: 'bool',
            internalType: 'bool',
          },
        ],
      },
      {
        name: 'epochs',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getBids',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epoch_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'limit_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'offset_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'total',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'limit',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'offset',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'bids',
        type: 'tuple[]',
        internalType: 'struct IBillboardRegistry.Bid[]',
        components: [
          {
            name: 'price',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'tax',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'contentURI',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'redirectURI',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'placedAt',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'updatedAt',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'isWon',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'isWithdrawn',
            type: 'bool',
            internalType: 'bool',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getBlockFromEpoch',
    inputs: [
      {
        name: 'startedAt_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epoch_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epochInterval_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'blockNumber',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'getBoard',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'board',
        type: 'tuple',
        internalType: 'struct IBillboardRegistry.Board',
        components: [
          {
            name: 'creator',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'taxRate',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'epochInterval',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'startedAt',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'name',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'description',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'imageURI',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'location',
            type: 'string',
            internalType: 'string',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getEpochFromBlock',
    inputs: [
      {
        name: 'startedAt_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'block_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epochInterval_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'epoch',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'getTaxRate',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'taxRate',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'mintBoard',
    inputs: [
      {
        name: 'taxRate_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epochInterval_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'startedAt_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'mintBoard',
    inputs: [
      {
        name: 'taxRate_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epochInterval_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'placeBid',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epoch_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'price_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'placeBid',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epoch_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'price_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'contentURI_',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'redirectURI_',
        type: 'string',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'registry',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'contract BillboardRegistry',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'setBidURIs',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epoch_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'contentURI_',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'redirectURI_',
        type: 'string',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setBoard',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'name_',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'description_',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'imageURI_',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'location_',
        type: 'string',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setClosed',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'closed_',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setRegistryOperator',
    inputs: [
      {
        name: 'operator_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setWhitelist',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'account_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'whitelisted',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'whitelist',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'withdrawBid',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'epoch_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'bidder_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'withdrawTax',
    inputs: [
      {
        name: 'creator_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: 'tax',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const

export default abi

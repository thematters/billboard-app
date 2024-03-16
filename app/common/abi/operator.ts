const abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token_',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: 'registry_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'admin_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'taxRate_',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: 'leaseTerm_',
        type: 'uint64',
      },
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'value_',
        type: 'address',
      },
    ],
    name: 'addToWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256',
      },
    ],
    name: 'calculateTax',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tax',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
    ],
    name: 'clearAuction',
    outputs: [
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tax',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'tokenIds_',
        type: 'uint256[]',
      },
    ],
    name: 'clearAuctions',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'prices',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'taxes',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'auctionId_',
        type: 'uint256',
      },
    ],
    name: 'getAuction',
    outputs: [
      {
        components: [
          {
            internalType: 'uint64',
            name: 'startAt',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'endAt',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'leaseStartAt',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'leaseEndAt',
            type: 'uint64',
          },
          {
            internalType: 'address',
            name: 'highestBidder',
            type: 'address',
          },
        ],
        internalType: 'struct IBillboardRegistry.Auction',
        name: 'auction',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'auctionId_',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'bidder_',
        type: 'address',
      },
    ],
    name: 'getBid',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tax',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'placedAt',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isWon',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isWithdrawn',
            type: 'bool',
          },
        ],
        internalType: 'struct IBillboardRegistry.Bid',
        name: 'bid',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'auctionId_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'limit_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'offset_',
        type: 'uint256',
      },
    ],
    name: 'getBids',
    outputs: [
      {
        internalType: 'uint256',
        name: 'total',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'limit',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'offset',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tax',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'placedAt',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isWon',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isWithdrawn',
            type: 'bool',
          },
        ],
        internalType: 'struct IBillboardRegistry.Bid[]',
        name: 'bids',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
    ],
    name: 'getBoard',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'creator',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'location',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'contentURI',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'redirectURI',
            type: 'string',
          },
        ],
        internalType: 'struct IBillboardRegistry.Board',
        name: 'board',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTaxRate',
    outputs: [
      {
        internalType: 'uint256',
        name: 'taxRate',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isOpened',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to_',
        type: 'address',
      },
    ],
    name: 'mintBoard',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount_',
        type: 'uint256',
      },
    ],
    name: 'placeBid',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'registry',
    outputs: [
      {
        internalType: 'contract BillboardRegistry',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'value_',
        type: 'address',
      },
    ],
    name: 'removeFromWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'contentURI_',
        type: 'string',
      },
    ],
    name: 'setBoardContentURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'description_',
        type: 'string',
      },
    ],
    name: 'setBoardDescription',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'location_',
        type: 'string',
      },
    ],
    name: 'setBoardLocation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
    ],
    name: 'setBoardName',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'redirectURI_',
        type: 'string',
      },
    ],
    name: 'setBoardRedirectURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'value_',
        type: 'bool',
      },
    ],
    name: 'setIsOpened',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator_',
        type: 'address',
      },
    ],
    name: 'setRegistryOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'taxRate_',
        type: 'uint256',
      },
    ],
    name: 'setTaxRate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'whitelist',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'auctionId_',
        type: 'uint256',
      },
    ],
    name: 'withdrawBid',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawTax',
    outputs: [
      {
        internalType: 'uint256',
        name: 'tax',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

export default abi

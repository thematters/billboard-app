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
        name: 'operator_',
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
    type: 'receive',
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'approve',
    inputs: [
      {
        name: 'to',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'balanceOf',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'bidderBids',
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
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'bidders',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
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
    name: 'bids',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
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
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'boards',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
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
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'currency',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'contract IERC20',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'emitAuctionCleared',
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
        name: 'highestBidder_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'emitTaxWithdrawn',
    inputs: [
      {
        name: 'owner_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'exists',
    inputs: [
      {
        name: 'tokenId_',
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
    name: 'getApproved',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
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
    name: 'getBid',
    inputs: [
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'auctionId_',
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
    name: 'getBidCount',
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
        name: 'count',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getBidderBidCount',
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
    ],
    outputs: [
      {
        name: 'count',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
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
    name: 'highestBidder',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
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
    name: 'isApprovedForAll',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'operator',
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
    name: 'lastTokenId',
    inputs: [],
    outputs: [
      {
        name: '_value',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'name',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'newBid',
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
      {
        name: 'price_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'tax_',
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
    name: 'newBoard',
    inputs: [
      {
        name: 'to_',
        type: 'address',
        internalType: 'address',
      },
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
    name: 'operator',
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
    name: 'ownerOf',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
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
    name: 'safeTransferByOperator',
    inputs: [
      {
        name: 'from_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'to_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'safeTransferFrom',
    inputs: [
      {
        name: 'from',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'to',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'safeTransferFrom',
    inputs: [
      {
        name: 'from',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'to',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'data',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setApprovalForAll',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'approved',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setBid',
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
      {
        name: 'price_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'tax_',
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
      {
        name: 'hasURIs',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
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
        name: 'bidder_',
        type: 'address',
        internalType: 'address',
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
    name: 'setBidWithdrawn',
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
      {
        name: 'isWithdrawn_',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setBidWon',
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
      {
        name: 'isWon_',
        type: 'bool',
        internalType: 'bool',
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
    name: 'setOperator',
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
    name: 'setTaxTreasury',
    inputs: [
      {
        name: 'owner_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'accumulated_',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'withdrawn_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'supportsInterface',
    inputs: [
      {
        name: 'interfaceId',
        type: 'bytes4',
        internalType: 'bytes4',
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
    name: 'symbol',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'taxTreasury',
    inputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: 'accumulated',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'withdrawn',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'tokenURI',
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
    name: 'transferCurrencyByOperator',
    inputs: [
      {
        name: 'to_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'transferFrom',
    inputs: [
      {
        name: 'from_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'to_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'tokenId_',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'approved',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ApprovalForAll',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'operator',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'approved',
        type: 'bool',
        indexed: false,
        internalType: 'bool',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'AuctionCleared',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'epoch',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'highestBidder',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'BidUpdated',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'epoch',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'bidder',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'price',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'tax',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'contentURI',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'redirectURI',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'BidWithdrawn',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'epoch',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'bidder',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'BidWon',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'epoch',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'bidder',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'BoardCreated',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'to',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'taxRate',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'epochInterval',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'BoardUpdated',
    inputs: [
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'name',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'description',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'imageURI',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'location',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OperatorUpdated',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TaxWithdrawn',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      {
        name: 'from',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'to',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
] as const

export default abi

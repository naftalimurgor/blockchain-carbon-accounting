export type FieldOp = '=' | '>' | '>=' | '<' | '<=' | '!=' | 'contains'
export type FieldOpValue = 'eq' | 'gt' | 'gte' | 'ls' | 'lte' | 'neq' | 'like'
export type FieldType = 'string' | 'number' | 'balance' | 'enum'

export type Field = {
  ops?: string[]
  op?: FieldOp 
  alias?: string
  value?: string | number
  name?: string
  type?: FieldType 
}

export type Wallet = {
  name?: string
  address?: string
  organization?: string
  roles?: string
  public_key?: string
  public_key_name?: string
}

export type Token = {
  tokenId: number
  tokenTypeId: number
  tokenType?: string
  issuedBy: string
  issuedFrom: string
  issuedTo: string
  fromDate: number|string
  thruDate: number|string
  dateCreated: number|string
  // eslint-disable-next-line
  metadata: Object
  manifest: string
  description: string
  totalIssued: number|string
  totalRetired: number|string
  scope: number
  type: string
  isMyIssuedToken?: boolean
}

export type Tracker = {
  trackerId: number
  trackee: string
  fromDate: string
  thruDate: string
  metadata: string
  description: string
  totalEmissions: string
  totalAudited:string 
  totalOut: string
  ciAec: string
  ciVct: string
  sourceTrackers: {
    trackerIds: number[]
    trackerAmounts: any[]
    tokenIds: number[]
    totalOut: string[]
    totalTracked: string[]
  }
}

export type Balance = {
  issuedTo: string
  tokenId: number
  available: number
  retired: number
  transferred: number
  token: Token
  tokenType?: string
  availableBalance?: string
  retiredBalance?: string
  transferredBalance?: string
}

export type Proposal = {
  id: number
  realId: number
  details: {
    proposer: string
    forVotes: number
    againstVotes: number
    rawForVotes: number
    rawAgainstVotes: number
    startBlock: number
    endBlock: number
  }
  state: string
  actions: any
  receipt: {
    hasVoted: boolean
    hasVotesRefunded: boolean
    support: boolean
    votes: number
    rawVotes: number
    rawRefund: number
    endVotesCancelPeriodBlock: number
  }
  description: string
  isEligibleToVote: boolean
}

export type RolesInfo = {
  isAdmin?: boolean
  isConsumer?: boolean
  isRecDealer?: boolean
  isCeoDealer?: boolean
  isAeDealer?: boolean
  isIndustry?: boolean
  isIndustryDealer?: boolean
  hasAnyRole?: boolean
  hasIndustryRole?: boolean
  hasDealerRole?: boolean
}

export type EmissionsRequest = {
  uuid: string
  input_data: string
  public_key: string
  public_key_name: string
  issued_from: string
  issued_to: string
  status: string
  token_from_date?: Date
  token_thru_date?: Date
  token_total_emissions: number
  token_metadata?: string
  token_manifest?: string
  token_description?: string
  emission_auditor?: string
  input_data_ipfs_hash?: string
  created_at: Date
  updated_at: Date
}

export type Role = 'None' | 'Owner' | 'Consumer' | 'REC Dealer' | 'Offset Dealer' | 'Emissions Auditor' | 'Industry' | 'Industry Dealer'

export const RoleEnum = {
  /** Empty role */
  None: 'None',
  /** Owner role, aka: Admin */
  Owner: 'Owner',
  /** Consumer role */
  Consumer: 'Consumer',
  /** REC Dealer role, aka: REC */
  RecDealer: 'REC Dealer',
  /** Offset Dealer role, aka: CEO */
  OffsetDealer: 'Offset Dealer',
  /** Emissions Auditor role. aka: AE */
  EmissionsAuditor: 'Emissions Auditor',
  /** Industry role, aka: REGISTERED_INDUSTRY */
  Industry: 'Industry',
  /** Industry Dealer role, aka: CarbonTracker / REGISTERED_INDUSTRY_DEALER */
  IndustryDealer: 'Industry Dealer'
} as const

export const rolesInfoToArray = (roles: RolesInfo|null): Role[] => {
  const res: Role[] = [];
  if (!roles) return res;
  if (roles.isAdmin) res.push(RoleEnum.Owner);
  if (roles.isConsumer) res.push(RoleEnum.Consumer);
  if (roles.isRecDealer) res.push(RoleEnum.RecDealer);
  if (roles.isCeoDealer) res.push(RoleEnum.OffsetDealer);
  if (roles.isAeDealer) res.push(RoleEnum.EmissionsAuditor);
  if (roles.isIndustry) res.push(RoleEnum.Industry);
  if (roles.isIndustryDealer) res.push(RoleEnum.IndustryDealer);
  return res;
}

export const OPERATORS: Record<FieldType, FieldOp[]> = {
    'string': ["=", "contains"],
    'number': [">", "<", "="],
    'balance': [">", "<", "="],
    'enum': ["="]
}

export const FIELD_OPS: {label: FieldOp, value: FieldOpValue}[] = [
    { label: "=", value: "eq" },
    { label: ">", value: "gt" },
    { label: ">=", value: "gte" },
    { label: "<", value: "ls" },
    { label: "<=", value: "lte" },
    { label: "!=", value: "neq" },
    { label: "contains", value: "like" },
];

export const TOKEN_TYPES = [
    "Renewable Energy Certificate",
    "Carbon Emissions Offset",
    "Audited Emissions",
    "Carbon Tracker"
  ];

export const BALANCE_FIELDS: Field[] = [
{
    alias: 'Token Type',
    name: 'tokenTypeId',
    type: 'enum'
},
{
    alias: 'Balance',
    name: 'available',
    type: 'balance'
},
{
    alias: 'Retired',
    name: 'retired',
    type: 'balance'
},
{
    alias: 'Transferred',
    name: 'transferred',
    type: 'balance'
},
{
    alias: 'Scope',
    name: 'scope',
    type: 'number'
},
{
    alias: 'Type',
    name: 'type',
    type: 'string'
},
]

export const TOKEN_FIELDS: Field[] = [
{
    alias: 'Token Type',
    name: 'tokenTypeId',
    type: 'enum'
},
{
    alias: 'Total Issued',
    name: 'totalIssued',
    type: 'balance'
},
{
    alias: 'Total Retired',
    name: 'totalRetired',
    type: 'balance'
},
{
    alias: 'Transferred',
    name: 'transferred',
    type: 'balance'
},
{
    alias: 'Scope',
    name: 'scope',
    type: 'number'
},
{
    alias: 'Type',
    name: 'type',
    type: 'string'
},
]

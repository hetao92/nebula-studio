export const ENUM_OF_COMPARE = {
  int64: [
    {
      label: '==',
      value: '==',
    },
    {
      label: '!=',
      value: '!=',
    },
    {
      label: '>',
      value: '>',
    },
    {
      label: '>=',
      value: '>=',
    },
    {
      label: '<',
      value: '<',
    },
    {
      label: '<=',
      value: '<=',
    },
  ],
  string: [
    {
      label: '==',
      value: '==',
    },
    {
      label: 'CONTAINS',
      value: 'CONTAINS',
    },
    {
      label: 'STARTS WITH',
      value: 'STARTS WITH',
    },
    {
      label: 'ENDS WITH',
      value: 'ENDS WITH',
    },
  ],
  bool: [
    {
      label: '==',
      value: '==',
    },
  ],
  double: [
    {
      label: '==',
      value: '==',
    },
    {
      label: '!=',
      value: '!=',
    },
    {
      label: '>',
      value: '>',
    },
    {
      label: '>=',
      value: '>=',
    },
    {
      label: '<',
      value: '<',
    },
    {
      label: '<=',
      value: '<=',
    },
  ],
  timestamp: [
    {
      label: '==',
      value: '==',
    },
    {
      label: '!=',
      value: '!=',
    },
    {
      label: '>',
      value: '>',
    },
    {
      label: '>=',
      value: '>=',
    },
    {
      label: '<',
      value: '<',
    },
    {
      label: '<=',
      value: '<=',
    },
  ],
};

export const DataTypeTransformMap = {
  int8: ['int16', 'int32', 'int'],
  int16: ['int32', 'int'],
  int32: ['int'],
  fixed_string: ['string'],
  float: ['double'],
} as const;

export const DATA_TYPE = [
  {
    value: 'int',
    label: 'int64',
  },
  {
    value: 'bool',
    label: 'bool',
  },
  {
    value: 'string',
    label: 'string',
  },
  {
    value: 'fixed_string',
    label: 'fixed_string',
  },
  {
    value: 'double',
    label: 'double',
  },
  {
    value: 'int32',
    label: 'int32',
  },
  {
    value: 'int16',
    label: 'int16',
  },
  {
    value: 'int8',
    label: 'int8',
  },
  {
    value: 'float',
    label: 'float',
  },
  {
    value: 'date',
    label: 'date',
  },
  {
    value: 'time',
    label: 'time',
  },
  {
    value: 'datetime',
    label: 'datetime',
  },
  {
    value: 'timestamp',
    label: 'timestamp',
  },
  {
    value: 'geography',
    label: 'geography',
  },
  {
    value: 'geography(point)',
    label: 'geography(point)',
  },
  {
    value: 'geography(linestring)',
    label: 'geography(linestring)',
  },
  {
    value: 'geography(polygon)',
    label: 'geography(polygon)',
  },
  {
    value: 'duration',
    label: 'duration',
  },
];

export const RELATION_OPERATORS = [
  {
    label: 'NOT',
    value: 'NOT',
  },
  {
    label: 'AND',
    value: 'AND',
  },
  {
    label: 'OR',
    value: 'OR',
  },
  {
    label: 'XOR',
    value: 'XOR',
  },
];

export const EXPLAIN_DATA_TYPE = [
  'date',
  'time',
  'datetime',
  'timestamp',
  'geography',
  'geography(point)',
  'geography(linestring)',
  'geography(polygon)',
  'duration',
];

export const MAX_COMMENT_BYTES = 256;

export const POSITIVE_INTEGER_REGEX = /^[1-9]\d*$/g;

export const DEFAULT_PARTITION_NUM = 10;

export const DEFAULT_IMPORT_CONFIG = {
  retry: 3,
  concurrency: 10,
  batchSize: 128,
  readerConcurrency: 50,
  importerConcurrency: 512,
};
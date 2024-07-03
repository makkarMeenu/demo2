export interface Plan {
  name: string;
  price: string;
  interval: string;
  features: {
    featureName: string;
    values: string[];
  }[];
}
export const headers = [
  {
    name: 'Basic',
    price: '₹9999',
    interval: ' per month',
    accessor: 'basic',
  },
  {
    name: 'Standard',
    price: '₹14999',
    interval: ' per month',
    accessor: 'standard',
    isHighlighted: true,
  },
  {
    name: 'Enterprise',
    price: '₹24999',
    interval: ' per month',
    accessor: 'enterprise',
  },
];

export const rows = [
  {
    name: 'Website number',
    basic: '05',
    standard: '10',
    enterprise: '50',
  },
  {
    name: 'Server Storage',
    basic: '150GB',
    standard: '500GB',
    enterprise: '1TB',
  },
  {
    name: 'Database',
    basic: '15',
    standard: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    name: 'Unmetered Bandwidth',
    basic: '-',
    standard: '-',
    enterprise: '✓',
  },
  {
    name: 'SSD Disk',
    basic: '-',
    standard: '✓',
    enterprise: '✓',
  },
  {
    name: 'UCPUS Fontworld',
    basic: '-',
    standard: '✓',
    enterprise: '✓',
  },
  {
    name: 'Wordpress installed',
    basic: '-',
    standard: '✓',
    enterprise: '✓',
  },
  {
    name: 'Server Speed',
    basic: '-',
    standard: '-',
    enterprise: '✓',
  },
];

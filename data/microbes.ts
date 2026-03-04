import { Microbe } from '@/types';

export const microbes: Microbe[] = [
  { id: '1', name: 'Cutibacterium acnes',         type: 'bacteria', abundance: 32, role: 'beneficial' },
  { id: '2', name: 'Staphylococcus epidermidis',   type: 'bacteria', abundance: 24, role: 'beneficial' },
  { id: '3', name: 'Malassezia globosa',            type: 'fungi',    abundance: 18, role: 'neutral'    },
  { id: '4', name: 'Corynebacterium minutissimum',  type: 'bacteria', abundance: 10, role: 'neutral'    },
  { id: '5', name: 'Candida albicans',              type: 'fungi',    abundance: 6,  role: 'pathogenic' },
  { id: '6', name: 'Staphylococcus aureus',         type: 'bacteria', abundance: 5,  role: 'pathogenic' },
  { id: '7', name: 'Malassezia restricta',          type: 'fungi',    abundance: 4,  role: 'neutral'    },
  { id: '8', name: 'Micrococcus luteus',            type: 'bacteria', abundance: 1,  role: 'beneficial' },
];

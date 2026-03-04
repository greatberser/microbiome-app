export type MicrobeType   = 'bacteria' | 'fungi';
export type MicrobeRole   = 'beneficial' | 'neutral' | 'pathogenic';
export type FilterType    = 'all' | MicrobeType;
export type SortDirection = 'asc' | 'desc';

export interface Microbe {
  id:        string;
  name:      string;
  type:      MicrobeType;
  abundance: number;
  role:      MicrobeRole;
}

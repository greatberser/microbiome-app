'use client';

import { useState, useMemo } from 'react';
import { FilterType, SortDirection } from '@/types';
import { microbes } from '@/data/microbes';
import FilterBar from '@/components/FilterBar';
import MicrobeTable from '@/components/MicrobeTable';

export default function Page() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort,   setSort]   = useState<SortDirection>('desc');

  const rows = useMemo(() => {
    const filtered = filter === 'all' ? microbes : microbes.filter(m => m.type === filter);
    return [...filtered].sort((a, b) =>
      sort === 'desc' ? b.abundance - a.abundance : a.abundance - b.abundance
    );
  }, [filter, sort]);

  return (
    <main style={{ maxWidth: '640px', margin: '48px auto', padding: '0 20px', fontFamily: 'system-ui, sans-serif', color: '#1e293b' }}>
      <h1 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 24px' }}>Microbiome Explorer</h1>
      <FilterBar
        filter={filter}
        sortDir={sort}
        onFilterChange={setFilter}
        onSortChange={setSort}
      />
      <MicrobeTable microbes={rows} />
    </main>
  );
}

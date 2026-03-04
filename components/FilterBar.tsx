import { FilterType, SortDirection } from '@/types';

interface Props {
  filter:         FilterType;
  sortDir:        SortDirection;
  onFilterChange: (f: FilterType) => void;
  onSortChange:   (s: SortDirection) => void;
}

export default function FilterBar({ filter, sortDir, onFilterChange, onSortChange }: Props) {
  const btn = (active: boolean): React.CSSProperties => ({
    padding: '5px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem',
    border: '1px solid ' + (active ? '#334155' : '#cbd5e1'),
    background: active ? '#334155' : '#fff',
    color: active ? '#fff' : '#475569',
    fontWeight: active ? 600 : 400,
  });

  const sBtn = (active: boolean): React.CSSProperties => ({
    padding: '5px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem',
    border: '1px solid ' + (active ? '#334155' : '#cbd5e1'),
    background: active ? '#f1f5f9' : '#fff',
    color: active ? '#334155' : '#94a3b8',
    fontWeight: active ? 600 : 400,
  });

  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', gap: '6px' }}>
        {(['all', 'bacteria', 'fungi'] as FilterType[]).map(f => (
          <button key={f} onClick={() => onFilterChange(f)} style={btn(filter === f)}>
            {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Sort by abundance:</span>
        <button onClick={() => onSortChange('desc')} style={sBtn(sortDir === 'desc')}>High first</button>
        <button onClick={() => onSortChange('asc')}  style={sBtn(sortDir === 'asc')}>Low first</button>
      </div>
    </div>
  );
}

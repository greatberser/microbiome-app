import { Microbe } from '@/types';

interface Props {
  microbes: Microbe[];
}

const th: React.CSSProperties = {
  padding: '8px 10px', color: '#94a3b8', fontWeight: 600,
  fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left',
};

export default function MicrobeTable({ microbes }: Props) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
          <th style={th}>Name</th>
          <th style={th}>Type</th>
          <th style={th}>Role</th>
          <th style={{ ...th, textAlign: 'right' }}>Abundance</th>
        </tr>
      </thead>
      <tbody>
        {microbes.map(m => (
          <tr key={m.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
            <td style={{ padding: '11px 10px', fontStyle: 'italic', fontWeight: 500 }}>{m.name}</td>
            <td style={{ padding: '11px 10px', color: '#64748b' }}>{m.type}</td>
            <td style={{ padding: '11px 10px', color: '#64748b' }}>{m.role}</td>
            <td style={{ padding: '11px 10px', textAlign: 'right', fontWeight: 600 }}>{m.abundance}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

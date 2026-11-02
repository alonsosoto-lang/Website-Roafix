const cols = [1.15, 0.7, 1, 0.62, 0.95];
const rows = [1, 0.62, 1.15, 0.55, 0.9];
const blocks = new Set([0, 2, 4, 10, 12, 14, 20, 22, 24]);

const colSum = cols.reduce((a, b) => a + b, 0);
const rowSum = rows.reduce((a, b) => a + b, 0);

function cell(index: number) {
  const col = index % 5;
  const row = Math.floor(index / 5);
  const x = cols.slice(0, col).reduce((a, b) => a + b, 0) / colSum * 100;
  const y = rows.slice(0, row).reduce((a, b) => a + b, 0) / rowSum * 100;
  return {
    x,
    y,
    w: (cols[col] / colSum) * 100,
    h: (rows[row] / rowSum) * 100,
  };
}

export function Street({ marked = true }: { marked?: boolean }) {
  return (
    <div className="street" data-ui>
      <svg className="field" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <rect width="100" height="100" fill="#ffffff" />
        {Array.from(blocks, (index) => {
          const box = cell(index);
          return <rect key={index} x={box.x} y={box.y} width={box.w} height={box.h} fill="#0d0d0d" />;
        })}
        {marked ? (
          <line x1="50" y1="6" x2="50" y2="94" stroke="#ffb201" strokeWidth="2.4" strokeDasharray="4 3" />
        ) : null}
      </svg>
    </div>
  );
}

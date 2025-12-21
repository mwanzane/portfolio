interface StatBlockProps {
  title: string;
  value: string;
}

export default function StatBlock({ title, value }: StatBlockProps) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-text-muted">{title}</div>
    </div>
  );
}
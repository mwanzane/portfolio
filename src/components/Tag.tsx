interface TagProps {
  children: string;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-block bg-border text-text-muted rounded-full px-3 py-1 text-sm font-medium mr-2">
      {children}
    </span>
  );
}
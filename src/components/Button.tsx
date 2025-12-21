import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', href, target, rel, children, className = '', ...props }: ButtonProps) {
  const baseClasses = 'inline-block px-8 py-3 font-medium rounded transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center';
  const variantClasses = variant === 'primary'
    ? 'bg-primary text-surface hover:bg-primary-hover active:bg-primary-active'
    : 'border border-border text-text hover:border-primary hover:text-primary active:bg-primary active:text-surface';

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={`${baseClasses} ${variantClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
import React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: string; size?: string; children?: React.ReactNode };
export function Button({ asChild, className = '', children, ...props }: Props) {
  if (asChild && React.isValidElement(children)) return React.cloneElement(children as React.ReactElement, { className: ['inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity', (children as any).props?.className, className].filter(Boolean).join(' ') });
  return <button className={['inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50', className].filter(Boolean).join(' ')} {...props}>{children}</button>;
}

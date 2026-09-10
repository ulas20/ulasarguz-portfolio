import { forwardRef } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-150 ease-out will-change-transform focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:active:scale-100';

const sizes = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]',
};

const variants = {
  primary:
    'bg-accent text-white shadow-[0_10px_30px_-10px_rgb(var(--accent)/0.7)] hover:brightness-110',
  secondary:
    'border border-line/15 text-ink hover:border-line/30 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0',
  ghost: 'text-ink-muted hover:text-ink',
};

const Button = forwardRef(function Button(
  { as: Tag = 'button', variant = 'primary', size = 'md', className = '', children, ...props },
  ref,
) {
  return (
    <Tag ref={ref} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
});

export default Button;

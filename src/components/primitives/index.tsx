import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const base = 'inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer min-h-[44px] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-brand-primary text-white hover:opacity-90 shadow-md',
    secondary: 'bg-brand-secondary text-white hover:bg-opacity-90',
    outline: 'border border-brand-primary text-brand-primary hover:bg-brand-primary/10',
    ghost: 'text-gray-700 hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Stars: React.FC<{ rating: number; count?: number }> = ({ rating, count }) => {
  return (
    <div className="flex items-center gap-1.5" aria-label={`Rating ${rating} out of 5 stars`}>
      <div className="flex text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= Math.round(rating) ? 'fill-current' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="font-bold text-sm text-gray-800">{rating.toFixed(1)}</span>
      {count && <span className="text-xs text-gray-500">({count} reviews)</span>}
    </div>
  );
};

export const PriceTag: React.FC<{ price: number; prefix?: string }> = ({ price, prefix = 'KES' }) => {
  const formatted = new Intl.NumberFormat('en-KE').format(price);
  return (
    <span className="font-extrabold text-brand-primary tracking-tight">
      {prefix} {formatted}
    </span>
  );
};

export const PlaceholderBadge: React.FC<{ label?: string }> = ({ label = 'Sample Verified Review' }) => {
  return (
    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 border border-amber-500/20">
      {label}
    </span>
  );
};

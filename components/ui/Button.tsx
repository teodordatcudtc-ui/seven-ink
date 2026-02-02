import Link from 'next/link';
import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-gold text-brand-black hover:bg-brand-goldLight border-brand-gold',
  secondary:
    'bg-transparent border-brand-white text-brand-white hover:border-brand-gold hover:text-brand-gold',
  ghost:
    'bg-transparent text-brand-white hover:text-brand-gold border-transparent',
};

interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button';
  onClick?: () => void;
  type?: 'button' | 'submit';
}

interface ButtonAsLink extends ButtonBaseProps {
  as: 'link';
  href: string;
}

export type ButtonProps = (ButtonAsButton | ButtonAsLink) & {
  'aria-label'?: string;
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = 'primary', children, className = '', 'aria-label': ariaLabel, ...props },
    ref
  ) {
    const base =
      'inline-flex items-center justify-center px-6 py-3 text-sm font-medium uppercase tracking-widest border-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black disabled:opacity-50';
    const styles = `${base} ${variantStyles[variant]} ${className}`;

    if (props.as === 'link' && 'href' in props) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={props.href}
          className={styles}
          aria-label={ariaLabel}
        >
          {children}
        </Link>
      );
    }

    const { onClick, type = 'button' } = props as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        className={styles}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
);

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  withArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  withArrow = false,
  type = 'button',
  disabled = false,
}) => {
  // Determine base styles based on variant
  const baseStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  };

  // Determine size styles
  const sizeStyles = {
    sm: 'text-xs py-2 px-3',
    md: 'text-sm py-2.5 px-5',
    lg: 'text-base py-3 px-6',
  };

  // Combine all styles
  const styles = `
    inline-flex items-center justify-center
    font-medium rounded-md transition-colors duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
    ${baseStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  // Create button content with icon
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      {withArrow && <ArrowRight size={16} className="ml-2" />}
    </>
  );

  // Return the appropriate element based on props
  if (to) {
    return (
      <Link to={to} className={styles}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
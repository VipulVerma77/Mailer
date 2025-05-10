// src/components/CustomButton.js
import { Link } from 'react-router-dom';

const CustomButton = ({ 
  to, 
  label, 
  size = 'medium', 
  onClick, 
  type = 'button',
  variant = 'outline',
  fullWidth = false,
  className = ''
}) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const variantClasses = {
    outline: `
      border border-pink-600 text-pink-600
      hover:bg-pink-600 hover:text-white
      transition-all duration-300
    `,
    solid: `
      bg-pink-600 text-white
      hover:bg-transparent hover:text-pink-600 hover:border hover:border-pink-600
      transition-all duration-300
    `,
    ghost: `
      text-pink-600
      hover:bg-pink-50
      transition-colors duration-300
    `
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const baseClasses = `
    rounded-full font-medium
    ${sizeClasses[size]}
    ${variant === 'solid' ? 'border border-transparent' : ''}
    ${variantClasses[variant]}
    ${widthClass}
    ${className}
  `;

  if (to) {
    return (
      <Link 
        to={to} 
        className={`${baseClasses} inline-block text-center`}
        onClick={onClick}
      >
        {label}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={baseClasses}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
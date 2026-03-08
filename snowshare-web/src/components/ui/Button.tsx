import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', children, ...props }) => {
    const baseStyles = 'rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300';
    const variantStyles = {
        primary: 'bg-sky-600 text-white hover:bg-sky-700',
        secondary: 'bg-white border border-slate-200 text-slate-800 hover:bg-slate-50',
        tertiary: 'bg-transparent text-sky-600 hover:bg-slate-50',
    };
    const sizeStyles = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
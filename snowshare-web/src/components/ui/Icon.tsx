import React from 'react';

interface IconProps {
    name: string;
    size?: number;
    color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor' }) => {
    return (
        <svg
            className={`icon-${name}`}
            width={size}
            height={size}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`#icon-${name}`} />
        </svg>
    );
};

export default Icon;
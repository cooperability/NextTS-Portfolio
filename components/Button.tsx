interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'dark' | 'light';
    children: React.ReactNode;
  }
  
  export const Button: React.FC<ButtonProps> = ({ 
    variant, 
    children, 
    className,
    ...props 
  }) => {
    return (
      <button
        className={`${className} ${variant === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} 
          px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed`}
        {...props}
      >
        {children}
      </button>
    );
  };
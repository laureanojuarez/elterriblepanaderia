import type React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`mt-2 px-4 py-2 rounded-md transition duration-300 gap-2 ${className}`}
    >
      {children}
    </button>
  );
}

import React from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'neutral'
  disabled?: boolean
}

export const Button = ({
  children,
  variant = 'primary',
  disabled = false
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-5 py-3 rounded-md',
        variant === 'primary' && 'bg-primary-500 text-white',
        variant === 'neutral' &&
          'bg-white text-black border border-neutral-200',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      disabled={disabled}>
      {children}
    </button>
  )
}

type ButtonSize = 'small' | 'medium' | 'large'
type ButtonScheme = 'filled' | 'outline' | 'subtle'
type ButtonColor = 'primary' | 'error' | 'success' | 'neutral'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: ButtonSize
  scheme?: ButtonScheme
  color?: ButtonColor
  fullWidth?: boolean
}

const sizeClasses = {
  small: 'px-md py-sm text-sm rounded-md',
  medium: 'px-lg py-md text-base rounded-lg',
  large: 'px-md py-lg text-lg rounded-xl'
}

const getColorSchemeClasses = (color: ButtonColor, scheme: ButtonScheme) => {
  const colorMap = {
    primary: {
      filled:
        'bg-primary-500 text-white border-primary-500 hover:bg-primary-600',
      outline:
        'border-2 border-primary-500 text-primary-500 bg-transparent hover:bg-primary-50',
      subtle:
        'text-primary-500 bg-primary-50 hover:bg-primary-100 border-transparent'
    },
    error: {
      filled: 'bg-error-500 text-white border-error-500 hover:bg-error-600',
      outline:
        'border-2 border-error-500 text-error-500 bg-transparent hover:bg-error-50',
      subtle: 'text-error-500 bg-error-50 hover:bg-error-100 border-transparent'
    },
    success: {
      filled:
        'bg-success-500 text-white border-success-500 hover:bg-success-600',
      outline:
        'border-2 border-success-500 text-success-500 bg-transparent hover:bg-success-50',
      subtle:
        'text-success-500 bg-success-50 hover:bg-success-100 border-transparent'
    },
    neutral: {
      filled:
        'bg-neutral-500 text-white border-neutral-500 hover:bg-neutral-600',
      outline:
        'border-2 border-neutral-500 text-neutral-500 bg-transparent hover:bg-neutral-50',
      subtle:
        'text-neutral-500 bg-neutral-50 hover:bg-neutral-100 border-transparent'
    }
  }

  return colorMap[color][scheme]
}

export const Button = ({
  children,
  size = 'medium',
  scheme = 'filled',
  color = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const sizeClass = sizeClasses[size]
  const colorSchemeClass = getColorSchemeClasses(color, scheme)

  return (
    <button
      className={`
        ${sizeClass}
        ${colorSchemeClass}
        ${fullWidth ? 'w-full' : ''}
        ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      {...props}>
      {children}
    </button>
  )
}

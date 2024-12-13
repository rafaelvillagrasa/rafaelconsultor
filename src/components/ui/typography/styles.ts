export const headingStyles = {
  base: 'font-bold tracking-tight',
  sizes: {
    1: 'text-4xl sm:text-6xl',
    2: 'text-3xl sm:text-4xl',
    3: 'text-2xl sm:text-3xl',
    4: 'text-xl sm:text-2xl',
    5: 'text-lg sm:text-xl',
    6: 'text-base sm:text-lg',
  },
  variants: {
    gradient: 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent',
    light: 'text-white',
    muted: 'text-gray-200',
  }
} as const;

export const textStyles = {
  base: 'leading-relaxed',
  sizes: {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  },
  variants: {
    primary: 'text-white font-medium',
    secondary: 'text-gray-100 font-normal',
    muted: 'text-gray-300 font-normal',
  }
} as const;
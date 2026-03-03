import * as React from 'react'
import { cn } from '@/lib/utils'

const badgeVariants = {
  default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
  secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
  outline: 'text-foreground',
  hot: 'border-transparent bg-gradient-to-r from-orange-500 to-red-500 text-white',
  new: 'border-transparent bg-blue-500 text-white',
 爆: 'border-transparent bg-gradient-to-r from-red-600 to-red-400 text-white',
  热: 'border-transparent bg-gradient-to-r from-orange-500 to-yellow-500 text-white',
  新: 'border-transparent bg-blue-500 text-white',
}

const Badge = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const variantClass = badgeVariants[variant] || badgeVariants.default

  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variantClass,
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = 'Badge'

export { Badge }

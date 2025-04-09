import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  variant?: 'primary' | 'secondary' | 'ghost'
  rounded?: boolean
}

export function Button({
  children,
  variant = 'primary',
  rounded = false,
  ...props
}: PropsWithChildren<Props> & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'border px-4 py-2 font-medium text-white cursor-pointer duration-200',
        variant === 'primary' &&
          'bg-primary border-primary hover:border-blue-500 hover:bg-blue-500',
        variant === 'secondary' && 'border-primary bg-black-400',
        variant === 'ghost' && 'border-transparent bg-transparent',
        rounded ? 'rounded-full' : 'rounded-md',
        props.className
      )}
    >
      {children}
    </button>
  )
}

import { cn } from "@/lib/utils";


interface Props {
  children: React.ReactNode, 
  className?: string,
  size?: 'sm' | 'md' | 'lg',
  variant?: 'default' | 'outline'
}

const variants = {
  default: 'bg-[#f0fdf2] text-primary',
  outline: 'bg-white text-foreground border border-gray-300'
}

export default function Badge({ children, className, size = 'md', variant = 'default' }: Props) {
  
  return (
    <div className={cn(" font-medium py-1 px-4 rounded-4xl w-max flex items-center gap-4",
      variants[variant],
      {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-base': size === 'lg',
      },
      className)}>{children}</div>
  )
}

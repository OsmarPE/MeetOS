import { cn } from "@/lib/utils";


interface Props {
  children: React.ReactNode, 
  className?: string,
}

export default function Badge({ children, className }: Props) {
  return (
    <div className={cn("bg-[#EBF2EE] text-sm font-medium text-primary py-1 px-4 rounded-4xl w-max flex items-center gap-4",className)}>{children}</div>
  )
}

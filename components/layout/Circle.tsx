import { cn } from "@/lib/utils"

interface Props {
  className?: string,
}

export default function Circle({ className }: Props) {
  return (
    <div 
        className={cn("w-[260px] h-[260px] hidden md:block absolute rounded-full", className)} 
        style={{backgroundColor: 'rgba(21, 127, 48, 0.40)', filter: 'blur(125px)'}}>

    </div>
  )
}

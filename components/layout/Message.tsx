import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export default function Message({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
      <p className={cn('flex items-center gap-2 text-sm text-gray-500',className)}> 
          <AlertCircle width={16} height={16} />
          {children}
      </p>
  )
}

import { AlertCircle } from "lucide-react";

export default function Message({ children }: { children: React.ReactNode }) {
  return (
      <p className='flex items-center gap-2 text-sm text-gray-500'>
          <AlertCircle width={16} height={16} />
          {children}
      </p>
  )
}

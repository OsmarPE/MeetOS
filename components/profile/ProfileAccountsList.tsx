
export default function ProfileAccountsList({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className={`grid gap-5 ${className}`}>
        {children}
    </div>
  )
}

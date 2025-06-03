
interface Props {
  children: React.ReactNode, 
  className?: string,
}

export default function Container({ children, className }: Props) {
  return (
    <div className={`container w-[90%] mx-auto ${className}`}>
      {children}
    </div>
  )
}

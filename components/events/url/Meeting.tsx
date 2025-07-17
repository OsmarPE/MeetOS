
export default function Meeting({children}: {children: React.ReactNode}) {
  return (
     <article className=' border border-gray-200 rounded-lg p-6 sm:p-8 grid gap-4 lg:grid-cols-[2fr_5fr] '>
        {children}
     </article>
  )
}

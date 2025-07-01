
export default function loading() {
  return (
    <div>
        <div className="flex justify-between gap-4">
            <div className="space-y-2">
                <div className="h-8 bg-gray-200 rounded-md w-48 mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-100 rounded-md w-80 animate-pulse"></div>
            </div>
                <div className="h-10 bg-gray-200 rounded-md w-40 animate-pulse"></div>
        </div>
        <div className="grid gap-4 grid-cols-2 mt-6 ">
            <div className="h-24 bg-gray-200 rounded-md w-full animate-pulse"></div>
            <div className="h-24 bg-gray-200 rounded-md w-full animate-pulse"></div>
            <div className="h-24 bg-gray-200 rounded-md w-full animate-pulse"></div>
            <div className="h-24 bg-gray-200 rounded-md w-full animate-pulse"></div>
        </div>
    </div>
  )
}

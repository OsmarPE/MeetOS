
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
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6 ">
            <article className="h-36 bg-gray-100 rounded-md w-full animate-pulse p-5 flex flex-col gap-4 justify-between">
              <div className="flex items-center gap-4">
                <div className="size-12 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="flex flex-col justify-center gap-2 w-full">
                  <div className="h-3 bg-gray-200 rounded-md w-[18%] animate-pulse"></div>
                  <div className="h-2 bg-gray-200 rounded-md w-[36%] animate-pulse"></div>
                </div>
              </div>
                <div className="h-4 bg-gray-200 rounded-md w-10 animate-pulse ml-auto"></div>
            </article>
            <article className="h-36 bg-gray-100 rounded-md w-full animate-pulse p-5 flex flex-col gap-4 justify-between">
              <div className="flex items-center gap-4">
                <div className="size-12 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="flex flex-col justify-center gap-2 w-full">
                  <div className="h-3 bg-gray-200 rounded-md w-[18%] animate-pulse"></div>
                  <div className="h-2 bg-gray-200 rounded-md w-[36%] animate-pulse"></div>
                </div>
              </div>
                <div className="h-4 bg-gray-200 rounded-md w-10 animate-pulse ml-auto"></div>
            </article>
            <article className="h-36 bg-gray-100 rounded-md w-full animate-pulse p-5 flex flex-col gap-4 justify-between">
              <div className="flex items-center gap-4">
                <div className="size-12 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="flex flex-col justify-center gap-2 w-full">
                  <div className="h-3 bg-gray-200 rounded-md w-[18%] animate-pulse"></div>
                  <div className="h-2 bg-gray-200 rounded-md w-[36%] animate-pulse"></div>
                </div>
              </div>
                <div className="h-4 bg-gray-200 rounded-md w-10 animate-pulse ml-auto"></div>
            </article>
        </div>
    </div>
  )
}

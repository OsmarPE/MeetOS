
import CreateEventPage from '@/pages/events/CreateEventPage'
export default async function page({params, searchParams}:{params: any, searchParams: Promise<{status: string}>}) {

    return <CreateEventPage params={params} searchParams={searchParams} />
}

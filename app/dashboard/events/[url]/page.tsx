import SchedulerEventPage from '@/pages/events/SchedulerEventPage';


export default async function page({ params, searchParams }: { params: Promise<{ url: string }>, searchParams: Promise<{ date: string | undefined }> }) {

  return <SchedulerEventPage params={params} searchParams={searchParams} />
}

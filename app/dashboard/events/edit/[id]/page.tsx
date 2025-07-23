import EventEventPage from "@/pages/events/EventEventPage"

export default  async function page({params, searchParams}: { params: Promise<{ id: string }>, searchParams: Promise<{data:string | string[]}> }) {
  
    const id = (await params).id

    return  <EventEventPage id={id} />
}

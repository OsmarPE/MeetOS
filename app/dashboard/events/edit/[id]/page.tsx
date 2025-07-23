import EditEventPage from "@/pages/events/EditEventPage"

export default  async function page({params, searchParams}: { params: Promise<{ id: string }>, searchParams: Promise<{data:string | string[]}> }) {
  
    const id = (await params).id

    return  <EditEventPage id={id} />
}

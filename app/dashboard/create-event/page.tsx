import FormCreateEvent from '@/components/events/FormCreateEvent'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import CreatedEventSuccess from '@/components/events/createEvent/CreatedEventSuccess'
export default async function page({params, searchParams}:{params: any, searchParams: Promise<{status: string}>}) {

    const status = (await searchParams)?.status
    

    return (
        <div className='max-w-xl mx-auto'>
            {status === 'success' && <div className='h-[calc(100vh-100px)] flex justify-center items-center'>
                <CreatedEventSuccess />   
            </div>}

           {status === undefined && <Card>
                <CardHeader>
                    <h2 className='text-xl font-semibold'>Crear nuevo evento</h2>
                    <p className='text-sm text-gray-400'>Crea un nuevo evento para que puedas organizar tus reuniones y eventos.</p>
                </CardHeader>
                <CardContent>
                    <FormCreateEvent />
                </CardContent>
            </Card> }
        </div>
    )
}

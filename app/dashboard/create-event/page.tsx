import FormCreateEvent from '@/components/events/FormCreateEvent'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
export default function page() {


    return (
        <div className='max-w-xl mx-auto'>
            <Card>
                <CardHeader>
                    <h2 className='text-xl font-semibold'>Crear nuevo evento</h2>
                    <p className='text-sm text-gray-400'>Crea un nuevo evento para que puedas organizar tus reuniones y eventos.</p>
                </CardHeader>
                <CardContent>
                    <FormCreateEvent />
                </CardContent>
            </Card>
        </div>
    )
}

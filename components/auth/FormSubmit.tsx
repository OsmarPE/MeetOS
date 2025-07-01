import React from 'react'
import { Button } from '../ui/button'
import { LoaderCircle } from 'lucide-react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    loading: boolean,
    children?: React.ReactNode,
    className?: string
}

export default function FormSubmit({ loading, children, className = '', ...props }: Props) {
    return (
        <Button size={'lg'} className={className} disabled={loading} {...props} >{loading ? (
            <>
                <LoaderCircle className='animate-spin' />
                Cargando...
            
            </>
        ) : children}</Button>

    )
}

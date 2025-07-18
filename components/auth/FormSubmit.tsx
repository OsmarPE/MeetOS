import React from 'react'
import { Button } from '../ui/button'
import { LoaderCircle } from 'lucide-react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    loading: boolean,
    children?: React.ReactNode,
    className?: string,
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'
}

export default function FormSubmit({ loading, children, className = '', variant = 'default', ...props }: Props) {
    return (
        <Button variant={variant} size={'lg'} className={className} disabled={loading} {...props} >{loading ? (
            <>
                <LoaderCircle className='animate-spin' />
                Cargando...
            
            </>
        ) : children}</Button>

    )
}

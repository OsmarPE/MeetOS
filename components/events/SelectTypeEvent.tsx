'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { meetTypes } from "@/lib/utils";

interface Props {
    defaultValue?: string,
    message?: string,
    onChange?: (value: string) => void
}

export default function SelectTypeEvent({ defaultValue = 'Google Meet', message, onChange }: Props) {

    const [type, setType] = useState(defaultValue)

    const handleChange = (value: string) => {
        setType(value)
        onChange?.(value)
    }
    
    
    return (
        <div className='space-y-2'>
            <Label htmlFor='type'> Tipo de evento </Label>
            <div className='grid grid-cols-3 shadow rounded'>
                {
                    meetTypes.map((item, index) => (
                        <Button type='button' onClick={() => handleChange(item.value)} key={index} variant={item.value == type  ? 'defaultSecondary' : 'ghost'}>
                            {item.label}
                        </Button>
                    ))
                }
            </div>
            <Input type='hidden' name="type" id='type' value={type} />
            {message && <p className="text-destructive font-medium text-xs mt-2">{message}</p>}
        </div>
    )
}

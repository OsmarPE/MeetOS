'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { meetTypes } from "@/lib/utils";


export default function SelectTypeEvent({ defaultValue = 'google-meet', message }: { defaultValue?: string, message?: string }) {

    const [type, setType] = useState(defaultValue)
    
    return (
        <div className='space-y-2'>
            <Label htmlFor='type'> Tipo de evento </Label>
            <div className='grid grid-cols-3 shadow rounded'>
                {
                    meetTypes.map((item, index) => (
                        <Button type='button' onClick={() => setType(item.value)} key={index} variant={item.value == type  ? 'defaultSecondary' : 'ghost'}>
                            {item.name}
                        </Button>
                    ))
                }
            </div>
            <Input type='hidden' name="type" id='type' value={type} />
            {message && <p className="text-destructive font-medium text-xs mt-2">{message}</p>}
        </div>
    )
}

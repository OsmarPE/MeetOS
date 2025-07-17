import { cn } from "@/lib/utils";
import AvailabilityItem from "./AvailabilityItem";

interface Props {
    data: any[]
    className?: string
    handleChangeStatus?: (value: boolean, id: number) => void
    handleTimeChange?: (id: number, time_start: string, time_end: string) => void
}

export default function AvailabilityList({ data = [], className = '', handleChangeStatus, handleTimeChange }: Props ) {

    return (
        <div className={cn('space-y-1 transition-opacity', className)}>
            {
                data.map((availibility, i) => (
                    <AvailabilityItem 
                        key={i} 
                        availibility={availibility} 
                        handleChangeStatus={( value: boolean, id: number) => handleChangeStatus ? handleChangeStatus(value, id) : undefined}
                        handleTimeChange={(id: number, time_start: string = '', time_end: string = '') => handleTimeChange ? handleTimeChange(id, time_start, time_end) : undefined}
                    />
                ))
            }
        </div>
    )
}

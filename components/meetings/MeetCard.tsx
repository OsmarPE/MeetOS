import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Trash, Video } from "lucide-react";

export default function MeetCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex gap-4 justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">Meet John</h3>
            <p className="text-sm text-gray-400">10 de mayo del 2025</p>
            <p className="text-sm text-gray-400">10:00AM - 11:00AM</p>
          </div>
          <Button variant={'outline'} size={'icon'}>
            <Trash width={20} height={20} />
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <button className="flex items-center gap-2 text-sm font-medium cursor-pointer text-primary border-b-1 border-b-transparent hover:border-b-primary">
          <Video width={16} height={16} />
          <span>Unirse a la reunión</span>
        </button>
      </CardFooter>
    </Card>
  )
}

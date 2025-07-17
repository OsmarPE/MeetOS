import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function MeetHeader() {
  return (
    <header className="flex gap-4 justify-between">
      <div>
        <h2 className="text-2xl font-semibold">Reuniones</h2>
        <p className="text-sm text-gray-400">
          Gestiona las reuniones ya programadas
        </p>
      </div>
      <Button size={"lg"} asChild>
        <Link href={`/dashboard/events/create-event`}>
          <Plus width={20} height={20} />
          <span>Añadir reunión</span>
        </Link>
      </Button>
    </header>
  );
}

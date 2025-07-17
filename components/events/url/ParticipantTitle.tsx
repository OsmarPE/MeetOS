import { Users } from "lucide-react";
import React from "react";

export default function ParticipantTitle() {
  return (
    <h3 className="font-medium text-base flex gap-2 items-center">
      <Users width={16} height={16} className="text-primary" />
      <span>Participantes</span>
    </h3>
  );
}

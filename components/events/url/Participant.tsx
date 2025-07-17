import Badge from "@/components/layout/Badge";
import { ParticipantSchema } from "@/validations/Participant";
import { X } from "lucide-react";

type Props = Omit<ParticipantSchema, "email"> & {
    onClick?: () => void;
}

export default function Participant({ name, onClick }: Props) {
  return (
    <Badge variant="outline" size="sm" className="relative">
      {name}
      <button
        onClick={() => onClick?.()}
        className="text-gray-400 cursor-pointer hover:text-primary rounded-full w-4 h-4 grid place-content-center shadow bg-white absolute top-0 right-0 -translate-y-1/2 translate-x-1/3"
      >
        <X width={10} height={10} />
      </button>
    </Badge>
  );
}

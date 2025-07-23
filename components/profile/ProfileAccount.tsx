import { LucideIcon, Video } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
    conf_grant_id?: string,
    href: string,
    title: string,
    icon: LucideIcon

}

export default function ProfileAccount({ conf_grant_id, href, title , icon: Icon }: Props) {
  return (
    <li className="flex items-center justify-between gap-4">
      <div className="flex gap-4 items-center">
        <div className="size-16 flex items-center justify-center rounded-md border border-gray-200">
          <Icon className="text-primary" width={24} height={24} />
        </div>
        <div className="">
          <p className="font-medium">{title}</p>
          <span className="text-sm text-gray-500">
            {conf_grant_id ? conf_grant_id : "Sin cuenta asociada"}
          </span>
        </div>
      </div>

      {!conf_grant_id && (
        <Button
          variant={"outline"}
          size={"sm"}
          className="flex items-center gap-2"
          asChild
        >
          <Link href={href}>Añadir cuenta</Link>
        </Button>
      )}
    </li>
  );
}

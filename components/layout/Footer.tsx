import { Calendar } from "lucide-react";
import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border ">
        <Container className="flex items-center justify-between h-20">
            <Link href="/" className="text-primary font-medium flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                MeetOS
            </Link>
            <span className="text-gray-500">© 2023 MeetOS</span>
        </Container>
    </footer>
  )
}

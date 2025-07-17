import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { actionSignIn } from "@/actions/auth";
import  Form  from "next/form";
import FormLogin from "@/components/auth/login/FormLogin";
import FormLoginHeader from "@/components/auth/login/FormLoginHeader";
export default function page() {
  return (
    <Container className="max-w-xs">
      <FormLoginHeader />
      <FormLogin />
    </Container>
  )
}

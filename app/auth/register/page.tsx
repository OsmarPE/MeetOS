'use client'
import { actionSignIn, actionSignUp } from "@/actions/auth";
import FormRegister from "@/components/auth/register/FormRegister";
import FormSubmit from "@/components/auth/FormSubmit";
import Container from "@/components/layout/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
}

export default function page() {

 
  return (
      <FormRegister />
  )
}

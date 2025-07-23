import FormLogin from "@/components/auth/login/FormLogin";
import FormLoginHeader from "@/components/auth/login/FormLoginHeader";
import Container from "@/components/layout/Container";
import React from "react";

export default function LoginPage() {
  return (
    <Container className="max-w-xs">
      <FormLoginHeader />
      <FormLogin />
    </Container>
  );
}

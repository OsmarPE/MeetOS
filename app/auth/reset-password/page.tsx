import ResetPasswordPage from "@/pages/auth/ResetPasswordPage";
export default async function page({ params, searchParams }: { params: { id: string }; searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

    const search = await searchParams
    const code = Array.isArray(search.code) ? search.code[0] : search.code

    return (
        <ResetPasswordPage code={code ?? ''} />
    )
}

import { Sections } from "@/components/landing/sections";

export default async function Main() {

    
    return (
        <main>
            <Sections.Hero />
            <Sections.HeroImage />
            <Sections.Phrase />
            <Sections.Services />
            <Sections.Tools />
            <Sections.FAQ />
        </main>
    )
}

import { Blocks, Calendar, Timer, TrendingUp, Video, Zap } from "lucide-react";
import Badge from "./Badge";
import { Button } from "../ui/button";
import Container from "./Container";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Zoom from "@/assets/img/zoom.webp";
import Meet from "@/assets/img/meet.webp";
import Teams from "@/assets/img/teams.webp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Circle from "../landing/Circle";
import AnimationContainer from "../landing/AnimacionContainer";
import Link from "next/link";
import Hero from "@/assets/img/hero.webp";
import { createClient } from "@/utils/supabase/server";
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

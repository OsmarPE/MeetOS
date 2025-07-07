import { TrendingUp, Video } from "lucide-react";
import Badge from "./Badge";
import { Button } from "../ui/button";
import Container from "./Container";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Zoom from "@/assets/img/zoom.png";
import Meet from "@/assets/img/meet.png";
import Teams from "@/assets/img/teams.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Circle from "./Circle";
import AnimationContainer from "./AnimacionContainer";

export default function Main() {
    return (
        <main className=" ">
            <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center text-center relative">
                <Container>
                    <AnimationContainer animation="fadeDown" delay={.5} >
                        <Badge className="mx-auto mb-4 gap-2 ">
                            <TrendingUp width={16} height={16} />
                            Unifica tus reuniones, simplifica tu vida
                        </Badge>
                    </AnimationContainer>
                    <AnimationContainer animation="fadeDown" delay={.75} >
                        <h1 className="mt-4 mb-4 font-medium text-3xl md:text-4xl lg:text-5xl mx-auto max-w-[900px] leading-[1.2]">Gestiona tus <span className="text-primary">reuniones</span> pendientes,
                            Unete con un clic, todo en una <span className="text-primary">app intuitiva.</span></h1>
                    </AnimationContainer>
                    <AnimationContainer animation="fadeDown" delay={1}>
                        <p className="md:text-lg text-black/60 max-w-[900px] mx-auto">Conecta Meet, Zoom, Teams y más en una sola app. Ve tus reuniones pendientes y únete con un clic. Simple, rápido y sin complicaciones. ¡Organiza tu tiempo como nunca!</p>
                    </AnimationContainer>
                    <AnimationContainer animation="fadeDown" delay={1.25}>
                        <Button size={'lg'} className="mt-8 shadow-[0_30px_30px_-12px__rgba(21,127,48,0.6)]">Empezar ahora</Button>
                    </AnimationContainer>
                </Container>
                <Circle className="top-20 left-0 " />
                <Circle className="bottom-0 right-0 " />
            </section>
            <AnimationContainer animation="fadeRight" delay={1.5}>
            <section>
                <Container>
                    <p className="max-w-[900px] mx-auto text-xl md:text-3xl text-center font-secundary italic"><span className="text-primary">"¡Transforma el caos de las reuniones</span> en pura magia! Con una app vibrante y poderosa, une todas tus videollamadas, organiza cada detalle y conecta”</p>
                </Container>
            </section>
            </AnimationContainer>
            <section className="py-40 relative">
                <AnimationContainer animation="fadeUp" delay={2}>
                    <Container>
                        <div className="text-center  max-w-[600px] mx-auto">
                            <Badge className="mx-auto">Servicios</Badge>
                            <h2 className="font-medium text-2xl md:text-3xl mt-4 mb-4  ">Todo lo que necesitas para reuniones sin complicaciones</h2>
                            <p className="text-black/60  text-balance  ">Lorem ipsum dolor sit amet consectetur. Vulputate risus nunc egestas sagittis cursus. Mi sit ultrices tellus morbi posuere nisi. Sed nec est mi neque at.</p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 mt-8 max-w-4xl mx-auto">
                            <Card>
                                <CardContent className="text-left">
                                    <h3 className="font-medium ">Integración Total</h3>
                                    <p className="text-black/60 text-balance mt-3">
                                        Usa Meet, Zoom, Teams y otras plataformas desde una sola app, sin cambiar de herramienta.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="text-left">
                                    <h3 className="font-medium ">Calendario Unificado</h3>
                                    <p className="text-black/60 text-balance mt-3">
                                        Visualiza todas tus reuniones pendientes en un solo lugar, claras y organizadas.
                                    </p>

                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="text-left">
                                    <h3 className="font-medium ">Acceso Instantáneo</h3>
                                    <p className="text-black/60 text-balance mt-3">
                                        Únete a cualquier reunión con un clic, sin buscar enlaces ni contraseñas.
                                    </p>

                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="text-left">
                                    <h3 className="font-medium ">Ahorro de tiempo</h3>
                                    <p className="text-black/60 text-balance mt-3">
                                        Simplifica la gestión de tus videollamadas, para que te enfoques en lo importante.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </Container>
                </AnimationContainer>
                <Circle className="top-0 left-0 " />
                    <Circle className="bottom-0 right-0 -z-10" />
            </section>
                <section className="py-20 relative">
                    <Container>
                        <AnimationContainer animation="scaleUp" delay={2}>
                            <div className="text-center  max-w-[600px] mx-auto">
                                <Badge className="mx-auto">Herramientas</Badge>
                                <h2 className="font-medium text-2xl md:text-3xl mt-4 mb-4  ">Sincroniza todas tus reuniones con las herramientas mas importantes</h2>
                                <p className="text-black/60  text-balance  ">Lorem ipsum dolor sit amet consectetur. Vulputate risus nunc egestas sagittis cursus. Mi sit ultrices tellus morbi posuere nisi. Sed nec est mi neque at.</p>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer animation="scaleUp" delay={1.75}>
                            <div className="flex items-center gap-4 justify-center mt-8">
                                <div className="size-20 md:size-24 rounded-xl border border-border flex items-center justify-center">
                                    <Image src={Meet.src} alt="Zoom" width={48} height={48} className="size-10 md:size-12" />
                                </div>
                                <div className="size-20 md:size-24 rounded-xl border border-border flex items-center justify-center">
                                    <Image src={Teams.src} alt="Zoom" width={48} height={48} className="size-10 md:size-12" />
                                </div>
                                <div className="size-20 md:size-24 rounded-xl border border-border flex items-center justify-center">
                                    <Image src={Zoom.src} alt="Zoom" width={48} height={48} className="size-10 md:size-12" />
                                </div>
                            </div>
                        </AnimationContainer>
                    </Container>
                    
                </section>
            <section className="py-20 relative">
                <Container>
                    <AnimationContainer animation="fadeUp" delay={1.5}>
                        <div className="text-center  max-w-[600px] mx-auto">
                            <Badge className="mx-auto">FAQ</Badge>
                            <h2 className="font-medium text-2xl md:text-3xl mt-4 mb-4  ">Preguntas frecuentes</h2>
                            <p className="text-black/60  text-balance  ">Lorem ipsum dolor sit amet consectetur. Vulputate risus nunc egestas sagittis cursus. Mi sit ultrices tellus morbi posuere nisi. Sed nec est mi neque at.</p>
                        </div>
                    </AnimationContainer>
                    <AnimationContainer animation="fadeUp" delay={1.25}>
                        <div className="mt-8 max-w-[600px] mx-auto">
                            <Accordion  type="single" collapsible className="w-full space-y-2">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Como iniciar dentro de la plataforma?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It comes with default styles that matches the other
                                        components&apos; aesthetic.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It&apos;s animated by default, but you can disable it if you
                                        prefer.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </AnimationContainer>
                </Container>
                <Circle className="top-0 left-0 " />
                <Circle className="top-1/3 right-0 " />
            </section>
        </main>
    )
}

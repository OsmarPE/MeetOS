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
import Circle from "./Circle";
import AnimationContainer from "./AnimacionContainer";
import Link from "next/link";
import Hero from "@/assets/img/hero.webp";

export default function Main() {
    return (
        <main className=" ">
            <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center text-center relative">
                <Container>
                    <AnimationContainer animation="fadeDown" delay={.5} >
                        <Badge variant="outline" className="mx-auto mb-4 gap-2 text-xs md:text-sm">
                            <div className="circle">
                                <div className="circle-center"></div>
                            </div>
                            Unifica tus reuniones, simplifica tu vida
                        </Badge>
                    </AnimationContainer>
                    <AnimationContainer animation="fadeDown" delay={.75} >
                        <h1 className="mt-4 mb-4 font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl  mx-auto max-w-[1000px] leading-[1.1]">Organiza todas tus reuniones
                            en un <span className="text-primary font-instrument-serif italic lg:text-[3.25rem] xl:text-[3.875rem]">solo lugar.</span></h1> 
                    </AnimationContainer>
                    <AnimationContainer animation="fadeDown" delay={1}>
                        <p className="md:text-lg lg:text-xl text-black/60 max-w-[900px] mx-auto">Conecta Meet, Zoom, Teams y más en una sola app. Ve tus reuniones pendientes y únete con un clic. Simple, rápido y sin complicaciones. ¡Organiza tu tiempo como nunca!</p>
                    </AnimationContainer>
                    <AnimationContainer animation="fadeDown" delay={1.25}>
                            <Button size={'lg'} className="mt-8 shadow-[0_30px_30px_-12px__rgba(21,127,48,0.6)]" asChild>
                                <Link href="/auth/login">
                                    Empezar ahora
                                </Link>
                            </Button>
                    </AnimationContainer>
                </Container>
            </section>
            <section className="relative pb-4">
                <div
                    className="inset-0 -top-20 absolute"
                    style={{
                        background: "linear-gradient(to bottom, #fff 0%, #fff 16.09%, #98c7a4 46.86%, #145325 78.62%, #052e11 100%)"
                    }}
                >

                </div>
                <AnimationContainer animation="fadeUp" delay={1.5}>
                <Container>
                    <div className="max-w-5xl relative isolate z-10 mx-auto mb-28 p-4 rounded-xl bg-white border border-gray-200 " style={{ boxShadow: '0px -26px 78px 0 rgba(21,127,48,0.07)' }}>
                        <Image src={Hero.src} alt="hero" className="w-full block" width={1200} height={630} />
                        
                    </div>
                </Container>
                </AnimationContainer>
            </section>
            <AnimationContainer animation="fadeRight" delay={1.5}>
            <section className="mt-32">
                <Container>
                    <p className="max-w-[900px] mx-auto text-xl md:text-3xl lg:text-4xl font-medium text-center font-instrument-serif italic"><span className="text-primary">"¡Transforma el caos de las reuniones</span> en pura magia! Con una app vibrante y poderosa, une todas tus videollamadas, organiza cada detalle y conecta”</p>
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
                                <CardHeader>
                                    <Blocks width={38} height={38} className=" text-primary" />
                                </CardHeader>
                                <CardContent className="text-left">
                                    <h3 className="font-medium text-xl ">Integración Total</h3>
                                    <p className="text-black/60 text-balance mt-3">
                                        Usa Meet, Zoom, Teams y otras plataformas desde una sola app, sin cambiar de herramienta.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Calendar width={32} height={32} className="text-primary  md:size-8" />
                                </CardHeader>
                                <CardContent className="text-left">
                                    <h3 className="font-medium lg:text-xl">Calendario Unificado</h3>
                                    <p className="text-black/60 text-balance mt-3">
                                        Visualiza todas tus reuniones pendientes en un solo lugar, claras y organizadas.
                                    </p>

                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Zap width={32} height={32} className="text-primary" />
                                </CardHeader>
                                <CardContent className="text-left">
                                    <h3 className="font-medium lg:text-xl">Acceso Instantáneo</h3>
                                    <p className="text-black/60 text-balance mt-3">
                                        Únete a cualquier reunión con un clic, sin buscar enlaces ni contraseñas.
                                    </p>

                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Timer width={32} height={32} className="text-primary" />
                                </CardHeader>
                                <CardContent className="text-left">
                                    <h3 className="font-medium lg:text-xl">Ahorro de tiempo</h3>
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
                                    <Image src={Meet.src} alt="Zoom" width={48} height={48} className="size-10 md:size-12" placeholder="blur" blurDataURL="data:image/webp;base64,UklGRqQAAABXRUJQVlA4IJgAAAAQBgCdASogACAAPpE6mkelo6KhN/VYALASCWwAnTKEeZ+zcZy4by+F07BrgeDC2s5huRBZMDL11ngA/sP98l8qVHOEJyXneBB1qmE1KZrLi78drhFT5KSQx8qVB47BteudeHkWpD1C+6x1DudqV+vEVIpdtAnC7S/VPr3bBqa+zEnJ7NnRN7y3hiUxAdo95E+S7r9/Y/AAAA==" />
                                </div>
                                <div className="size-20 md:size-24 rounded-xl border border-border flex items-center justify-center">
                                    <Image src={Teams.src} alt="Teams" width={48} height={48} className="size-10 md:size-12" placeholder="blur" blurDataURL="data:image/webp;base64,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" />
                                </div>
                                <div className="size-20 md:size-24 rounded-xl border border-border flex items-center justify-center">
                                    <Image src={Zoom.src} alt="Zoom" width={48} height={48} className="size-10 md:size-12"  placeholder="blur" blurDataURL="data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAABQBQCdASogACAAPoE2k0elIyGhN/qoAKAQCWoAnTKEePe6UywCZ7ClbhDR+no7LU0jjAAA/tNSnCoSCCyVy0T18d51XuzShzuuwxvo9vXqP1ENuNG9dy9MBBNsrJxogeVA2q4qr1TKLDb/tDW8sHq7aoQoRod4jyUkPWhxN8VdT/wUOV1EONhPI+AAAA=="/>
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
                                    <AccordionTrigger>¿Como iniciar dentro de la plataforma?</AccordionTrigger>
                                    <AccordionContent>
                                        Inicia sesion para con tu cuenta de google o crea una cuenta con nosotros. 
                                        Una vez iniciado sesión conecta tu cuenta con nylas para poder sincronizarlo con tu calendario de Google 
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>¿Que tipo de reuniones puedo crear?</AccordionTrigger>
                                    <AccordionContent>
                                        Puedes crear reuniones de Zoom, Teams y Google Meet. En un futuro se añadirán más opciones.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>¿Se pueden realizar reuniones de más de 2 personas?</AccordionTrigger>
                                    <AccordionContent>
                                        Sí, puedes realizar reuniones de más de 2 personas. el limite depende del tipo de reunion.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Se puede realizar juntas en Zoom?</AccordionTrigger>
                                    <AccordionContent>
                                        Si puedes, solo toma en cuenta que debes enlazar tu cuenta de zoom desde el apartado de "Mi perfil" de la app.
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

import React from 'react'
import AnimationContainer from '../AnimacionContainer'
import Container from '../../layout/Container'
import Badge from '../../layout/Badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Blocks, Calendar, Timer, Zap } from 'lucide-react'
import Circle from '../Circle'

export default function Services() {
  return (
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
  )
}

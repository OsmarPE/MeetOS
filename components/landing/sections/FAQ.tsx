import React from 'react'
import Container from '../../layout/Container'
import AnimationContainer from '../AnimacionContainer'
import Badge from '../../layout/Badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Circle from '../Circle'

export default function FAQ() {
  return (
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
  )
}

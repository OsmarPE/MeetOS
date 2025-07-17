import React from 'react'
import Container from '../../layout/Container'
import AnimationContainer from '../AnimacionContainer'
import Badge from '../../layout/Badge'
import HeroButton from '../HeroButton'

export default async function Hero() {

    
  return (
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
                            <HeroButton />
                    </AnimationContainer>
                </Container>
            </section>
  )
}

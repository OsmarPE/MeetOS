import React from 'react'
import AnimationContainer from '../AnimacionContainer'
import Container from '../../layout/Container'
import Image from 'next/image'
import Hero from '@/assets/img/hero.webp'

export default function HeroImage() {
  return (
     <section className="relative pb-4">
            
                <AnimationContainer animation="fadeUp" delay={1.5}>
                <Container>
                    <div className="max-w-5xl relative isolate z-10 mx-auto mb-28 p-4 rounded-xl bg-white border border-gray-200 " style={{ boxShadow: '0px -26px 78px 0 rgba(21,127,48,0.07)' }}>
                        <Image src={Hero.src} alt="hero" className="w-full block" width={1200} height={630} />
                    </div>
                </Container>
                </AnimationContainer>
            </section>
  )
}

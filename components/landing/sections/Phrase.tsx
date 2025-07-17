import React from 'react'
import AnimationContainer from '../AnimacionContainer'
import Container from '../../layout/Container'

export default function Phrase() {
    return (
        <section className="mt-32">
            <AnimationContainer animation="fadeRight" delay={1.5}>
                <Container>
                    <p className="max-w-[900px] mx-auto text-xl md:text-3xl lg:text-4xl font-medium text-center font-instrument-serif italic"><span className="text-primary">"¡Transforma el caos de las reuniones</span> en pura magia! Con una app vibrante y poderosa, une todas tus videollamadas, organiza cada detalle y conecta”</p>
                </Container>
            </AnimationContainer>
        </section>
    )
}

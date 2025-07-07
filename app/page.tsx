import AnimationContainer from "@/components/layout/AnimacionContainer";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <>
      <AnimationContainer animation="fadeDown" delay={1}>
        <Header />
      </AnimationContainer>
      <Main/>
      <Footer />
    </>
  );
}

import Features from "@/components/features";
import GridShow from "@/components/grid-show";
import HeroSection from "@/components/hero-section";
import MissionSection from "@/components/mission";
import ServicesSection from "@/components/services";
import Steps from "@/components/steps";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <MissionSection/>
      <ServicesSection/>
      <Features/>
      <Steps/>
      <GridShow/>
    </div>
  )
}
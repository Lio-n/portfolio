import AboutSection from "@/components/Sections/About";
import ContactSection from "@/components/Sections/Contact";
import InitSection from "@/components/Sections/Init";
import TechnologiesSection from "@/components/Sections/Technologies";
import WorkSection from "@/components/Sections/Works";

export default function Home() {
  return (
    <>
      <InitSection />
      <AboutSection />
      <WorkSection />
      <TechnologiesSection />
      <ContactSection />
    </>
  );
}

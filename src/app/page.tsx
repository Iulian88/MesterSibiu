import {
  Header,
  StickyContactBar,
} from "@/components/layout";
import { RevealObserver } from "@/components/motion/RevealObserver";
import {
  Contact,
  Hero,
  HowWeWork,
  ServiceArea,
  Services,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <RevealObserver />
      <Header />
      <main className="pb-sticky-safe md:pb-8">
        <Hero />
        <Services />
        <HowWeWork />
        <ServiceArea />
        <Contact />
      </main>
      <StickyContactBar />
    </>
  );
}

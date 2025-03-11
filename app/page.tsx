import { Hadajcom, Hero, Offer, Projects, Services } from "@/section/";
import Testimonial from "@/section/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Hadajcom />
      <Services />
      <Offer />
      <Projects />
      <Testimonial />
    </>
  );
}

import {
  Contact,
  Hadajcom,
  Hero,
  Offer,
  Projects,
  Services,
  Testimonial,
} from "@/section";

export default function Home() {
  return (
    <>
      <Hero />
      <Hadajcom />
      <Services />
      <Offer />
      <Projects />
      <Testimonial />
      <Contact />
    </>
  );
}

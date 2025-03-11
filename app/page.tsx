import {
  Hadajcom,
  Hero,
  Offer,
  Projects,
  Services,
  // Testimonial,
} from "@/section/";
import Testimonial from "@/section/testimonial";
import Image from "next/image";

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

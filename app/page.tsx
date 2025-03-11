import { Hadajcom, Hero, Offer, Services } from "@/section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Hadajcom />
      <Services />
      <Offer />
    </>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import FormProvider from "@/constants/Formprovider";
import RHFInput from "@/constants/RHFInput";
import RHFTextarea from "@/constants/RHFTextarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

export interface contactType {
  id: number;
  Icon: any;
  title: string;
  content: string;
}

const formSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name too long"),
  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name too long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9]+$/, "Phone number can only contain numbers"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message too long (max 500 characters)"),
});
type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (data: FormData) => {
    // Handle form submission here
    console.log("Form submitted:", data);
    // Add your API call or form handling logic
  };
  return (
    <section className="container-custom py-[50px] flex flex-wrap">
      <div className="flex-[0_0_100%] lg:flex-[0_0_50%] max-w-full lg:max-w-1/2 flex flex-col gap-4 mb-[60px]  p-[15px]">
        <h1 className="text-[28px] font-medium leading-[120%] xl:text-[38px]">
          Feel free to contact with us <br /> for any kind of query.
        </h1>
        <p className="text-base text-gray-600 leading-[120%] ">
          Thank you for your interest in hiring Get It Done Cleaning LTD. <br />{" "}
          We consider communication with the customer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {contacts.map((contact) => (
            <Card key={contact.id} data={contact} />
          ))}
        </div>
      </div>
      <div className="flex-[0_0_100%] lg:flex-[0_0_50%] max-w-full lg:max-w-1/2 flex flex-col gap-4 p-[15px]">
        <h1 className="text-[28px] font-medium leading-[120%] xl:text-[38px]">
          Send us a message
        </h1>

        <FormProvider methods={form} onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RHFInput name="first_name" label="First Name" />
            <RHFInput name="last_name" label="Last Name" />
            <RHFInput name="email" label="Email" />
            <RHFInput name="phone" label="Phone Number" />
            <div className="col-span-2">
              <RHFTextarea name="message" label="Message" />
            </div>
            <div className="col-span-2">
              <Button className="w-full h-[40px] text-xl font-semibold cursor-pointer ">
                Send Message
              </Button>
            </div>
          </div>
        </FormProvider>
      </div>
    </section>
  );
};

export default Contact;

const Card: React.FC<{ data: contactType }> = ({
  data: { Icon, content, title },
}) => {
  return (
    <div className="w-[260px]">
      <div className="flex gap-[10px] items-center">
        <Icon />
        <h1 className="text-black font-medium text-2xl ">{title}</h1>
      </div>
      <p className="text-base text-gray-600 font-normal">{content}</p>
    </div>
  );
};

export const contacts: contactType[] = [
  {
    id: 1,
    title: "Office Address",
    content: "Main address: 123 amebo street, Lagos, Nigeria",
    Icon: MapPin,
  },
  {
    id: 2,
    title: "Mail Address",
    content: "test@test.com",
    Icon: Mail,
  },
  {
    id: 3,
    title: "Phone No:",
    content: "Head office: 09073563543",
    Icon: Phone,
  },
];

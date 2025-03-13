import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export interface contactType {
  id: number;
  Icon: any;
  title: string;
  content: string;
}
const Contact = () => {
  return (
    <section className="container-custom py-[50px] flex ">
      <div className="flex-[0_0_100%] lg:flex-[0_0_50%] max-w-full lg:max-w-1/2 flex flex-col gap-4">
        <h1 className="text-[28px] font-medium leading-[120%] lg:text-[38px]">
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
      <div className="flex-[0_0_100%] lg:flex-[0_0_50%] max-w-full lg:max-w-1/2 flex flex-col gap-4"></div>
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

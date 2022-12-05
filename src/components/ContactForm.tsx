import React, { FC, useState } from "react";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import axios from "axios";

const ContactForm: FC<{ className?: string }> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const formDataHandler =
    (prop: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [prop]: event.target.value });
    };

  // sendEmail
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const rest = await axios.post("/api/send-email", formData);
    console.log(rest);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`max-w-[585px] w-full mx-auto my-8 px-4 md:px-0 ${className}`}
    >
      <h1 className="text-[36px] font-semibold text-center">Get In Touch</h1>
      <p className="text-lg text-gray-100 md:text-gray-400 font-normal text-center mt-2 mb-12">
        Have any project? I’d love to hear from you{" "}
        <span className="text-red-500 text-xl">♥</span>
      </p>
      <TextInput
        id="name"
        name="name"
        type="text"
        label="Name"
        placeHolder="Type Your Name"
        onChange={formDataHandler("name")}
        value={formData.name}
        required
      />
      <TextInput
        id="email"
        name="email"
        type="email"
        label="Email"
        placeHolder="Type Your Email"
        onChange={formDataHandler("email")}
        value={formData.email}
        required
      />
      <TextArea
        id="description"
        name="description"
        label="Description"
        onChange={formDataHandler("description")}
        value={formData.description}
        required
      />

      <button
        type="submit"
        className="px-6 py-3 rounded-md font-medium text-base flex items-center justify-center bg-primary-light md:bg-primary text-gray-900 md:text-white hover:bg-primary md:hover:bg-primary-dark transition-colors duration-200 mx-auto"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

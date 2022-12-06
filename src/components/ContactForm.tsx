import axios from "axios";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import ButtonSpinner from "./ButtonSpinner";
import React, { FC, useEffect, useState } from "react";

const ContactForm: FC<{ className?: string }> = ({ className }) => {
  const [message, setMessage] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    try {
      await axios.post("/api/send-email", formData);
      setLoading(false);
      setMessage({ success: "Email successfully sent" });
    } catch (error) {
      setLoading(false);
      setMessage({ error: "Something was wrong!. Please try again" });
    }
  };
  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(null), 2000);
    }
  }, [message]);

  return (
    <form
      onSubmit={onSubmit}
      className={`relative max-w-[585px] w-full mx-auto my-8 px-4 md:px-0 ${className}`}
    >
      {message && (
        <div
          className={`w-full transition-all duration-500 absolute -top-7 left-0 right-0 mx-auto ${
            message ? "visible" : "invisible"
          }`}
        >
          <p
            className={`text-center ${
              message.success ? "text-primary" : "text-red-500"
            }`}
          >
            {message.success ? message.success : message.error}
          </p>
        </div>
      )}

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
        disabled={loading}
        className={`px-6 py-3 relative rounded-md font-medium text-base flex items-center justify-center text-gray-900 md:text-white hover:bg-primary md:hover:bg-primary-dark transition-colors duration-200 mx-auto ${
          loading ? "bg-primary-dark" : "bg-primary"
        }`}
      >
        Send Message
        {loading && <ButtonSpinner className="absolute m-auto" />}
      </button>
    </form>
  );
};

export default ContactForm;

import React, { useState } from "react";
import { sendContactForm } from "../../services";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendContactForm(formData);
    setMessage(
      response ? "Form submitted successfully!" : "Failed to submit the form."
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col ">
      <div className="w-[740px]">{`<small>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</small>`}</div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded w-[700px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <input
              id="fname"
              name="fname"
              type="text"
              placeholder="First Name"
              className="border-b border-gray-400 focus:border-orange-500 outline-none py-2"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              id="lname"
              name="lname"
              type="text"
              placeholder="Last Name"
              className="border-b border-gray-400 focus:border-orange-500 outline-none py-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="border-b border-gray-400 focus:border-orange-500 outline-none py-2"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              className="border-b border-gray-400 focus:border-orange-500 outline-none py-2"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              id="budget"
              name="budget"
              type="number"
              placeholder="Budget"
              className="border-b border-gray-400 focus:border-orange-500 outline-none py-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col ">
            <input
              id="description"
              name="description"
              placeholder="Description"
              className="border-b border-gray-400 focus:border-orange-500 outline-none py-2 "
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-[248px] mt-6 py-2 bg-[#FF6400] text-white font-semibold rounded-3xl shadow-md hover:bg-orange-600 ml-[200px]"
        >
          Submit
        </button>
        {message && (
          <p className="text-center text-green-600 mt-4">{message}</p>
        )}
      </form>
    </div>
  );
};

export default ContactSection;

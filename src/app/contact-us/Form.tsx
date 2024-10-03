"use client";

import React from "react";
import { useState} from "react";

const Form = () => {
  // const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  // const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    quoteName: "",
    quoteEmail: "",
    quoteMobile: "",
    quoteTechnology: "",
    quoteDescription: "",
  });

  const [errors, setErrors] = useState({
    quoteName: "",
    quoteEmail: "",
    quoteMobile: "",
    quoteTechnology: "",
    quoteDescription: "",
  });

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Reset error for the field
  };

  // Validate form inputs
  const validate = () => {
    let formValid = true;
    const newErrors = { ...errors };

    // Name validation (required)
    if (!formData.quoteName.trim()) {
      newErrors.quoteName = "Full Name is required";
      formValid = false;
    }

    // Email validation (required and format)
    if (!formData.quoteEmail.trim()) {
      newErrors.quoteEmail = "Email is required";
      formValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.quoteEmail)) {
      newErrors.quoteEmail = "Email format is invalid";
      formValid = false;
    }

    // Phone number validation (required, number, and length)
    if (!formData.quoteMobile.trim()) {
      newErrors.quoteMobile = "Phone number is required";
      formValid = false;
    } else if (!/^\d{11}$/.test(formData.quoteMobile)) {
      newErrors.quoteMobile = "Phone number must be exactly 11 digits";
      formValid = false;
    }

    // Technology field validation (required)
    if (!formData.quoteTechnology.trim()) {
      newErrors.quoteTechnology = "This field is required";
      formValid = false;
    }

    // Description field validation (required)
    if (!formData.quoteDescription.trim()) {
      newErrors.quoteDescription = "Description is required";
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate the form
    if (!validate()) {
      return;
    }

    // Send the form data to the backend
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/quote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // const result = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        // Optionally, reset the form fields after successful submission
        setFormData({
          quoteName: "",
          quoteEmail: "",
          quoteMobile: "",
          quoteTechnology: "",
          quoteDescription: "",
        });
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return(
    <div>

         {/* Form */}
         <div className="flex flex-1 flex-col gap-4 p-4 px-16 py-8">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 lg:gap-8 xl:grid-cols-2">
              {/* Input fields */}
              <div>
                <input
                  type="text"
                  name="quoteName"
                  placeholder="Full Name"
                  value={formData.quoteName}
                  onChange={handleInputChange}
                  className="border-2 p-2"
                />
                {errors.quoteName && (
                  <p className="text-red-500">{errors.quoteName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="quoteEmail"
                  placeholder="Email"
                  value={formData.quoteEmail}
                  onChange={handleInputChange}
                  className="border-2 p-2"
                />
                {errors.quoteEmail && (
                  <p className="text-red-500">{errors.quoteEmail}</p>
                )}
              </div>
              <div className="xl:col-span-2 ">
                <input
                  type="number"
                  name="quoteMobile"
                  placeholder="Phone Number"
                  value={formData.quoteMobile}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2"
                />
                {errors.quoteMobile && (
                  <p className="text-red-500">{errors.quoteMobile}</p>
                )}
              </div>
              <div className="xl:col-span-2">
                <input
                  type="text"
                  name="quoteTechnology"
                  placeholder="Interested In"
                  value={formData.quoteTechnology}
                  onChange={handleInputChange}
                  className=" w-full border-2 p-2"
                />
                {errors.quoteTechnology && (
                  <p className="text-red-500">{errors.quoteTechnology}</p>
                )}
              </div>
              <div className="xl:col-span-2">
                <textarea
                  name="quoteDescription"
                  placeholder="Write your Message"
                  value={formData.quoteDescription}
                  onChange={handleInputChange}
                  rows={6}
                  className="border-2 p-2 w-full"
                ></textarea>
                {errors.quoteDescription && (
                  <p className="text-red-500">{errors.quoteDescription}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="self-center rounded-lg bg-primary px-6 py-2 text-base text-white"
            >
              Get Quote
            </button>
          </form>
        </div>

    </div>
  )
};

export default Form;

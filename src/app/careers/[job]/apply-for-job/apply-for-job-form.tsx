'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Check, XCircle } from "lucide-react";
import { Job } from "../../../../../types";
import TextInputFormControlled from "../../../components/form-controlled/text-input-controlled";
import SelectMenuFromControlled from "@/app/components/form-controlled/select-menu-controlled";
import TextAreaFormControlled from "../../../components/form-controlled/text-area-controlled";
import DropZone from "../../../components/generic/dropzone/index";
import { uploadImage } from "../../../../../lib/firebase";
import { Form } from "../../../components/ui/form";

interface ApplyForJobFormProps {
  job: Job;
}

export default function ApplyForJobForm({ job }: ApplyForJobFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const formSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z.string().email({ message: "Invalid Email" }),
    gender: z.string().nonempty({ message: "Gender is required" }),
    city: z.string().nonempty({ message: "City is required" }),
    cellNumber: z.string().nonempty({ message: "Cell Number is required" }),
    whatsappNumber: z.string().nonempty({
      message: "Whatsapp Number is required",
    }), 
    experience: z.string().nonempty({ message: "Experience is required" }),
    comments: z.string().optional(),
    resume: z.any().refine(
      (file) => {
        if (!file) return false;
        if (file.type !== "application/pdf") return false;
        return true;
      },
      { message:"Invalid Resume. Only PDF files are allowed" }
    ),
    applyingFor: z.string(),
    // errors: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      gender: "Male",
      city: "",
      cellNumber: "",
      whatsappNumber: "",
      experience: "0-1",
      resume: null,
      comments: "",
      applyingFor: job.title,
      // errors:""
    },
  });

  console.log("Form Data : " , form.getValues());


  console.log("Form errors", form.formState.errors)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      const resume = values.resume;
      const url = await uploadImage(resume, "resume"); // Ensure this function exists and handles uploads

      const submissionData = {
        fullName: values.name,
        email: values.email,
        gender: values.gender,
        address: values.city,
        contactNumber: values.cellNumber,
        whatsappNumber: values.whatsappNumber,
        yearsOfExperience: values.experience,
        job: job._id,
        resume: url,
        applicantComments: values.comments,
      };

      // console.log(submissionData);

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobApplications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return (
      <div className="my-16 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <XCircle className=" h-full w-6 text-primary md:w-8 lg:w-12" />
          <p className="text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Error Occurred
          </p>
        </div>
        <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl">
          Please try again later. Sorry for the inconvenience caused.
        </p>

        <Link
          href={`/careers/${job._id}/apply-for-job`}
          className="rounded-full bg-primary px-4 py-2 text-sm text-white md:px-8 md:py-3 md:text-base lg:px-16 lg:py-4 lg:text-lg xl:text-xl"
        >
          Retry Now
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="my-16 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <Check className=" h-full w-6 text-primary md:w-8 lg:w-12" />
          <p className="text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Application Submitted
          </p>
        </div>
        <Link
          href="/"
          className="rounded-full bg-primary px-4 py-2 text-sm text-white md:px-8 md:py-3 md:text-base lg:px-16 lg:py-4 lg:text-lg xl:text-xl"
        >
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="landing-page-heading">
        Apply Online for {job.title} at {job.location}
      </h2>
      <p className="landing-page-paragraph">Please Fill the form to apply.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
          {!loading ? (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <TextInputFormControlled
                placeholder={"Full Name"}
                control={form.control}
                name={"name"}
                className={"lg:col-span-2"}
              />

              <TextInputFormControlled
                placeholder={"Email"}
                control={form.control}
                name={"email"}
                // error={form.formState.errors}

              />

              <SelectMenuFromControlled
                placeholder={"Gender"}
                control={form.control}
                name={"gender"}
                values={["Male", "Female", "Other"]}
              />

              <TextInputFormControlled
                placeholder={"City"}
                control={form.control}
                name={"city"}
                // error={form.formState.errors}

              />

              <TextInputFormControlled
                placeholder={"Cell Number"}
                control={form.control}
                name={"cellNumber"}
                mask="+\92 999 9999999"
                // error={form.formState.errors}

              />

              <TextInputFormControlled
                placeholder={"WhatsApp Number"}
                control={form.control}
                name={"whatsappNumber"}
                mask="+\92 999 9999999"
                // error={form.formState.errors}
              />

              <SelectMenuFromControlled
                placeholder={"Experience"}
                control={form.control}
                name={"experience"}
                values={[
                  {
                    value: "0-1",
                    label: "Less than 1 year of experience",
                  },
                  {
                    value: "1-3",
                    label: "1-3 years of experience",
                  },
                  {
                    value: "3-5",
                    label: "3-5 years of experience",
                  },
                  {
                    value: "5-8",
                    label: "5-8 years of experience",
                  },
                ]}
              />

              <TextAreaFormControlled
                placeholder={"Comments"}
                control={form.control}
                name={"comments"}
                className={"h-48 lg:col-span-2"}
              />

              <DropZone
                getValues={form.getValues}
                name={"resume"}
                setValue={form.setValue}
                onChange={(file: File) => {
                  form.setValue("resume", file);
                }}
                className={"h-[300px] lg:col-span-2"}
                error={form.formState.errors}
              />

              <div className="lg:col-span-2">
                <button
                  type="submit"
                  className="self-center rounded-full bg-primary px-4 py-2 text-sm text-white md:px-8 md:py-3 md:text-base lg:self-end lg:px-16 lg:py-4 lg:text-lg xl:text-xl"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ) : (
            <div
              role="status"
              className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            >
              <svg
                aria-hidden="true"
                className="mr-2 h-20 w-20 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="41"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                Submitting Application
              </p>
            </div>
          )}
        </form>
      </Form>
    </>
  );
}

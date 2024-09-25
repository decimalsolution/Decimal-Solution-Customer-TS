"use client";

import JobListing from "../components/generic/job-listing";
import SelectMenu from "../components/generic/select-menu";
import { cn } from "../../../lib/utils";
import { useMemo, useState } from "react";
import { Job } from "../../../types";

interface AvailableJobsProps {
    jobs : Job[]
}

export default function AvailableJobs({ jobs } : AvailableJobsProps) {
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      return (
        job.category.title.includes(category) &&
        job.type.includes(type) &&
        job.location.includes(location)
      );
    });
  }, [category, type, location, jobs]);

  return (
    <>
      <div className="bg-primary px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8">
        <p className={cn("landing-page-subheading", "!text-white")}>
          Job Filter
        </p>
        <h2 className={cn("landing-page-heading", "!text-white")}>
          Find your desired job & get recruited
        </h2>

        <div className="flex gap-8 mt-12 flex-wrap">
          <SelectMenu
            items={[
              { value: "", label: "Category" },
              { value: "Development", label: "Development" },
              { value: "Designing", label: "Designing",},
              { value: "Marketing", label: "Marketing" },
              { value: "Finance", label: "Finance" },
              { value: "Management", label: "Management" },
            ]}
            placeholder={"Category"}
            state={category}
            setState={setCategory}
          />
          <SelectMenu
            items={[
              { value: "", label: "Type" },
              { value: "Full Time", label: "Full Time" },
              { value: "Part Time", label: "Part Time" },
              { value: "Internship", label: "Internship" },
              { value: "Hourly", label: "Hourly" },
              { value: "Contract", label: "Contract" },
              { value: "Work From Home", label: "Work From Home" },
            ]}
            placeholder={"Type"}
            state={type}
            setState={setType}
          />
          <SelectMenu
            items={[
              { value: "", label: "Location" },
              { value: "Islamabad", label: "Islamabad" },
              { value: "Rawalpindi", label: "Rawalpindi" },
              { value: "Lahore", label: "Lahore" },
              { value: "Peshawar", label: "Peshawar" },
              { value: "Karachi", label: "Karachi" },
            ]}
            placeholder={"Location"}
            state={location}
            setState={setLocation}
          />

          <button
            className="flex-1 lg:flex-0 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl bg-white text-primary px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 rounded-lg hover:brightness-90 transition-all"
            onClick={() => {
              setCategory("");
              setType("");
              setLocation("");
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8 gap-8">
        {filteredJobs.length ? (
          filteredJobs.map((position, index) => (
            <JobListing {...position} key={"job-listing-" + index} />
          ))
        ) : (
          <p className="col-span-full text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            No jobs found
          </p>
        )}
      </div>
    </>
  );
}

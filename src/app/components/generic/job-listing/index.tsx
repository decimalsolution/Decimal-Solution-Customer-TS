import Link from "next/link";

interface JobListingProps {
    title : string;
    type : string;
    vacancies : number;
    _id : string
}

export default function JobListing({ title, type, vacancies, _id } : JobListingProps) {
  return (
    <div className="flex flex-col items-center justify-between border-2 border-gray-500/50 rounded-2xl lg:rounded-3xl xl:rounded-[20px] p-8 lg:p-10 xl:p-12 gap-8 w-full">
    <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-black text-center">
      {title}
    </h3>
    <p className="text-sm md:text-base lg:text-xl 2xl:text-2xl text-center">
      Type: {type}
    </p>
    <p className="text-sm md:text-base lg:text-xl 2xl:text-2xl text-center">
      Seats: {vacancies < 10 ? "0" + vacancies : vacancies}
    </p>
    <Link href={`/careers/${_id}`}>
      <button className="text-sm md:text-base lg:text-lg xl:text-xl rounded-3xl border border-primary text-primary px-4 md:px-6 lg:px-8 xl:px-10 py-2 hover:bg-primary hover:text-white transition-all duration-300">
        Read More
      </button>
    </Link>
  </div>
  
  );
}

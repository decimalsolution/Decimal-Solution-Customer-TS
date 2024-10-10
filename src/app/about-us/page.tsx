import CircularProgress from "../components/generic/circular-progress";
import PageIntroduction from "../components/generic/page-introduction";
import Image from "next/image";
import EmployeeCard from "./employe-card";
import { Metadata, TeamMember } from "../../../types";
import Head from "next/head";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the essence of Decimal Solutions on our About Us page. We're more than a software house; we're a passionate team driving excellence in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. Learn about our journey, values, and commitment to shaping a digital future.",
};

interface Stats {
  title: string;
  progress: number;
}

const stats: Stats[] = [
  { title: "Mobile App Development", progress: 100 },
  { title: "Website Development", progress: 95 },
  { title: "AR/VR Game", progress: 90 },
  { title: "UI/UX Design", progress: 75 },
  { title: "Digital Marketing", progress: 65 },
];

export default async function AboutUs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/teamMembers`, {
    next: { revalidate: 300 },
  });

  const data = await res.json();
  const team: TeamMember[] = data.data;

  return (
    <div className="flex flex-col items-center">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Decimal Solutions",
              url: "https://decimalsolution.com",
              logo: "https://decimalsolution.com/logo.png",
              description:
                "A passionate software house excelling in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing.",
              sameAs: [
                "https://www.facebook.com/decimalsolution",
                "https://www.linkedin.com/company/decimalsolution",
                "https://www.twitter.com/decimalsolution",
              ],
              employee: team.map((member) => ({
                "@type": "Person",
                name: member.teamMemberName,
                jobTitle: member.teamMemberTitle,
                image: member.teamMemberImage,
                worksFor: {
                  "@type": "Organization",
                  name: "Decimal Solutions",
                },
              })),
              foundingDate: "2010",
              founder: {
                "@type": "Person",
                name: "Dr. Tehseen Riaz Abbasi",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Park, Suite 100",
                addressLocality: "CityName",
                postalCode: "12345",
                addressCountry: "CountryName",
              },
            }),
          }}
        />
      </Head>

      <PageIntroduction title={"About Us"} image={"/about-us.png"} />

      <div className="flex flex-col items-center px-24 py-36">
        <h2 className="mb-2 text-center text-xl font-semibold uppercase lg:mb-8 lg:text-2xl xl:text-3xl 2xl:text-[40px]">
          Our Mission
        </h2>

        <div className="flex max-w-7xl flex-col items-center justify-center gap-8 text-center text-base lg:text-lg xl:text-2xl">
          <div className="relative">
            <Image
              src="/icons/quote.png"
              alt="commas"
              width={100}
              height={100}
              className="absolute -left-16 -top-20"
            />
            <p>
              Our mission is to provide all sorts of IT solutions and services
              to clients under one umbrella. We aim to provide quality products
              and perform strict testing so clients can have a product that is
              ready to use without further updates.
            </p>
            <Image
              src="/icons/quote.png"
              alt="commas"
              className="absolute -bottom-12 -right-12 rotate-180"
              height={100}
              width={100}
            />
          </div>
          <p>
            <span className="text-primary">CEO</span>
          </p>
        </div>

        <div className="mt-24 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center">
            <div className="relative grid h-24 w-24 place-items-center rounded-full lg:h-[150px] lg:w-[150px] ">
              <Image
                src="/icons/account-search.png"
                alt="Who-we-are"
                quality={100}
                fill
                className="h-full w-full"
              />
            </div>
            <h3 className="mt-8 text-center text-xl font-semibold uppercase lg:text-2xl xl:text-3xl 2xl:text-[40px]">
              Who We Are
            </h3>
            <p className="mt-2 text-center text-base !leading-loose lg:mt-8 lg:text-lg xl:text-2xl">
              We are a team of software development and testing enthusiasts,
              working tirelessly on software quality assurance.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative grid h-24 w-24 place-items-center rounded-full lg:h-[150px] lg:w-[150px]">
              <Image
                src="/icons/diamond.png"
                alt="What-we-do"
                quality={100}
                fill
                className="h-full w-full"
              />
            </div>
            <h3 className="mt-8 text-center text-xl font-semibold uppercase lg:text-2xl xl:text-3xl 2xl:text-[40px]">
              What We Do
            </h3>
            <p className="mt-2 text-center text-base !leading-loose lg:mt-8 lg:text-lg xl:text-2xl">
              We help set up and maintain a digital presence of your brand or
              product. Our creative team ensures you have the latest technology
              to grow your business.
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 bg-gray-100 px-36 py-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-between gap-4">
            <CircularProgress progress={stat.progress} />
            <p className="text-center text-lg font-medium xl:text-2xl">
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-16 px-8 py-36 xs:px-12 md:px-24">
        <div>
          <p className="landing-page-subheading text-center">Our Team</p>
          <h2 className="landing-page-heading">We are a Team of Experts</h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <EmployeeCard member={member} key={"employee-card-" + index} />
          ))}
        </div>
      </div>
    </div>
  );
}

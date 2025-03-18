import Image from "next/image";
import Link from "next/link";

const headings = [
  "Web and Mobile Application Development",
  "Customized CRM Solutions",
  "Creative Design for \n Interactive User Experiences",
  "Your One-Stop Shop for Software Solutions   ",
];
export default function Slider() {
  return (
    <div className="xl-aspect-[1920/700] relative aspect-video h-full max-h-[650px] w-full overflow-hidden  2xl:aspect-[1920/700] ">
      <div className="flex h-full w-[calc(5*100vw)] animate-home-carousel">
        {new Array(5).fill(0).map((_, i) => (
          <div className="relative  aspect-video w-screen" key={"slider-" + i + "-key"}>
            <Image
              src={`/Slider Images/Slider-${(i % 4) + 1}.png`}
              alt={`Slider images ${(i % 4) + 1}`}
              fill
              loading="eager"
              className="absolute inset-0 object-cover object-center"
            />
            <Image src="/slider-overlay.png" alt="Slider Overlay" fill loading="eager" className="absolute inset-0" />

            <div className="absolute inset-0 mx-4 flex flex-col items-start justify-center md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20">
              <h1 className="text-md max-w-[150px] font-bold leading-none text-white sm:text-2xl md:max-w-xs md:text-3xl lg:max-w-md lg:text-4xl xl:max-w-xl">
                {headings[i]}
              </h1>
              <div className="flex gap-2">
                <Link href="/schedule-call">
                  <button className="bg-white px-2 sm:px-6 py-2 sm:py-3 lg:py-4  rounded-sm sm:rounded-md lg:rounded-xl mt-2 sm:mt-4 lg:mt-8 text-xs sm:text-lg text-primary font-semibold flex gap-2 md:gap-4 items-center border-2 border-white ">
                    <span>Schedule a Call</span>
                  </button>
                </Link>
                <Link href="/portfolio">
                  <button className="px-2 sm:px-6 py-2 sm:py-3 lg:py-4  rounded-sm sm:rounded-md lg:rounded-xl mt-2 sm:mt-4 lg:mt-8 text-xs sm:text-lg border-2 border-white text-white bg-transparent font-semibold flex gap-2 md:gap-4 items-center ">
                    <span>Our Portfolio</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

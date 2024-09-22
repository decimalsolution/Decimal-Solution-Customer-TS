import PageIntroduction from "../../components/generic/page-introduction/index";
import ServiceCard from "../../components/generic/service-card/index";
import { getData } from "./get-data";
import { notFound } from "next/navigation";

export interface Params {
    params: {
      type: string;  
    };
}

const SpecificService:React.FC<Params> = ({ params }) => {
  const { type } = params;
  const data = getData(type);

  if (!data) return notFound();
  return (
    <div>
      <PageIntroduction title={data?.title} image={data?.image} />

      <div className=" flex flex-col gap-8">
        {data?.sections.map((item, index) => (
          <>
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              reverse={index % 2 !== 0}
            />

            {index !== data.sections.length - 1 && <hr />}
          </>
        ))}
      </div>
    </div>
  );
}

export default SpecificService;

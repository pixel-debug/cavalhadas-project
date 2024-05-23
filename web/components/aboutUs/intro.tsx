import { aboutUsData } from "@/utils/texts";

export const AboutUsIntroText = () => {
  return (
    <div className="flex flex-col font-montserrat text-neutral-900 xl:text-base text-md pb-10">
      <p>{aboutUsData.aboutUs}</p>
      <p className="py-5">{aboutUsData.aboutUsLocation}</p>
      <p>{aboutUsData.aboutUsReasons}</p>
      <ul className="list-disc pl-10">
        {aboutUsData.aboutUsPoints.map((point: string, index: number) => (
          <li key={"points-" + index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

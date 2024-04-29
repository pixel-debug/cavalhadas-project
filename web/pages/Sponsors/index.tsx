import { Donations } from "@/components/sponsorsPage/donations";
import { Sponsors } from "@/components/sponsorsPage/sponsors";
import { PageTitles } from "@/types/enums";

const SponsorsPage = () => {
  return (
    <>
      <p className="py-10 justify-center flex text-blue-900 font-itim text-3xl">
        {PageTitles.SPONSORS}
      </p>
      <Sponsors />
      <Donations />
    </>
  );
};

export default SponsorsPage;

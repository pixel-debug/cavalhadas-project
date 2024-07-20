import { PaginationComponent } from "@/types/types";
import Image from "next/image";
import arrow from "../../assets/images/arrow.png";

export const PaginationButtons = ({
  pageNumber,
  setPageNumber,
  hasMore,
}: PaginationComponent) => {
  const isFirstPage = pageNumber === 1;

  return (
    <div className="flex xl:w-[30%] w-full xl:justify-between justify-around mt-4 mb-10">
      <div className="xl:w-[20vh] w-[10vh] flex justify-center">
        {!isFirstPage && (
          <button onClick={() => setPageNumber(pageNumber - 1)}>
            <Image src={arrow} alt="Back arrow" />
          </button>
        )}
      </div>
      <div className="xl:w-[20vh] w-[10vh] flex justify-center">
        {hasMore && (
          <button onClick={() => setPageNumber(pageNumber + 1)}>
            <Image src={arrow} alt="Next arrow" className="rotate-180" />
          </button>
        )}
      </div>
    </div>
  );
};

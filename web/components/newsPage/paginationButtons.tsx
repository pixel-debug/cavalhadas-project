import { PaginationComponent } from "@/types/types";
import Image from "next/image";
import arrow from "../../assets/images/arrow.png";
import { IoMdArrowDropright } from "react-icons/io";

export const PaginationButtons = ({
  pageNumber,
  setPageNumber,
  hasMore,
}: PaginationComponent) => {
  return (
    <div className="flex xl:w-[30%] w-full xl:justify-between justify-around mt-4">
      <button
        onClick={() => setPageNumber(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        <div className="xl:w-[20vh] w-[10vh]">
          <Image src={arrow} alt="Follow us on Twitter" />
        </div>
      </button>
      <button onClick={() => setPageNumber(pageNumber + 1)} disabled={!hasMore}>
        <div className="xl:w-[20vh] w-[10vh]">
          <Image
            src={arrow}
            alt="Follow us on Twitter"
            className="rotate-180"
          />
        </div>
      </button>
    </div>
  );
};

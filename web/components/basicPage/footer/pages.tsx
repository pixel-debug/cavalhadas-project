import { PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";
import Link from "next/link";

export const Pages = () => {
  return (
    <div className="mb-4 font-montserrat xl:text-md text-xs text-neutral-900 mb-2">
      <ul className="list-none">
        <li className="mb-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href={usedRouters(PagesRouters.NEWS_PAGE)}
            className="hover:underline"
          >
            Notícias
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href={usedRouters(PagesRouters.ABOUT_US_PAGE)}
            className="hover:underline"
          >
            Quem Somos
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href={usedRouters(PagesRouters.SPONSORS_PAGE)}
            className="hover:underline"
          >
            Patrocinadores
          </Link>
        </li>
      </ul>
    </div>
  );
};

import { PagesRouters } from "./enums";

export const usedRouters = (path?: string, target?: number): string => {
  switch (path) {
    case PagesRouters.NEWS_PAGE_DETAILS:
      return `/Noticias/Details/${target}`;
    case PagesRouters.NEWS_PAGE:
      return "/Noticias";
    case PagesRouters.ABOUT_US_PAGE:
      return "/AboutUs";
    case PagesRouters.SPONSORS_PAGE:
      return "/Sponsors";
    case PagesRouters.ADMIN_NEWS_PAGE:
      return "/Noticias/Admin/";
    case PagesRouters.ADMIN_SPONSOR_PAGE:
      return "/Sponsors/Admin/";
    case PagesRouters.ADMIN_MEMBER_PAGE:
      return "/AboutUs/Admin/";
    default:
      return "/";
  }
};

export const usedRouters = (path?: string, target?: number): string => {
  switch (path) {
    case "noticias-details":
      return `/Noticias/Details/${target}`;
    case "noticias":
      return "/Noticias";
    case "quem-somos":
      return "/AboutUs";
    case "patrocinadores":
      return "/Sponsors";
    default:
      return "/";
  }
};

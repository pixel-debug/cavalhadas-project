import { Pages } from "@/types/enums";

const navigators = () => [
  {
    title: Pages.NEWS_PAGE,
    path: "",
    navigation: "noticias",
  },
  {
    title: Pages.ABOUT_US_PAGE,
    path: "",
    navigation: "quem-somos",
  },
  {
    title: Pages.DONATIONS_PAGE,
    path: "",
    navigation: "patrocinadores",
  },
];

export const getNativigations = () => {
  const navigatorsList = navigators();
  return navigatorsList;
};

const navigators = () => [
  {
    title: "NOTÍCIAS",
    path: "",
    navigation: "noticias",
  },
  {
    title: "QUEM SOMOS",
    path: "",
    navigation: "quem-somos",
  },
  {
    title: "DOAÇÕES",
    path: "",
    navigation: "patrocinadores",
  },
];

export const getNativigations = () => {
  const navigatorsList = navigators();
  return navigatorsList;
};

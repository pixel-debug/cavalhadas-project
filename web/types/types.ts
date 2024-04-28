import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type NavigatorsType = {
  title: string;
  path: string;
  navigation: string;
};

export type ImageProps = {
  src: string | StaticImport;
  alt: string;
  objectFit?: string;
  rounded?: boolean;
};

export type HeaderProps = {
  navigators: NavigatorsType[];
  navigate: (path: string) => void;
};

export type BannerTextProps = {
  title: string;
  isMainPage?: boolean;
  text: string;
};

export type BannerImageProps = {
  src: StaticImageData;
  alt: string;
};

export type BannerProps = {
  image?: string | StaticImageData;
  title: string;
  subtitle: string;
  isMainPage?: boolean;
  hasButton?: boolean;
};

export type ButtonProps = {
  text: string;
  action: (() => void) | any;
};

export type BodyProps = {
  children: ReactNode;
};

export type BoxProps = {
  children: ReactNode;
  title?: string;
};

export type CardType = {
  id: number;
  image: string;
  title: string;
  date: string;
  text: string;
};

export type CardProps = {
  news: CardType;
  navigation: (path: number) => void;
};

export type DeckCardProps = {
  news: CardType[];
};

export type ModalProps = {
  children: ReactNode;
  closeModal: () => void;
};

export type NewsContentProps = {
  selectedNews: CardType;
  openImage: (openImage: boolean) => void;
};

export type SliderType = {
  id: number;
  name: string;
  image: string;
  role: string;
};

export type SliderProps = {
  subjects: SliderType[];
};

export type SliderItemProps = {
  item: SliderType;
};

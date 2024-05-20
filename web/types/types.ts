import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

export type Post = {
  title: string;
  content: string;
  authorId: number;
  image: File | string;
};

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
  action?: (() => void) | any;
  type?: "button" | "submit" | "reset";
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

export type InputProps = {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FormProps<T> = {
  onSubmitForm: (data: T) => void;
  type: string;
};

export type PostFormProps = {
  register: UseFormRegister<Post>;
};

export type ImagePreviewProps = {
  imagePreview: string;
};

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import {
  Control,
  FieldError,
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";

export type Sponsor = {
  id: number;
  name: string;
  image: File | string;
  sponsorship: number;
  deleted?: boolean;
};

export type PostType = {
  id: number;
  title: string;
  content: string;
  image: File | string;
  pdf?: File[];
};

export type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  image: File | string;
  createdAt: Date;
  pdfs?: PDF[];
  deleted?: boolean;
};

export type PDF = {
  fileName: string;
  downloadPath: string;
};

export type Member = {
  id: number;
  name: string;
  role: string;
  image: string;
  memberSince: Date;
  isAdm: boolean;
  isMale: boolean;
  deleted?: boolean;
};

export type Admin = {
  id: number;
  name: string;
  email: string;
  trinco: string;
};

export type LoginResponse = {
  admin: Admin;
  token: string;
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

export type UploadProps = {
  setValue: UseFormSetValue<any>;
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
  title: string;
  subtitle: string;
  isMainPage?: boolean;
  hasButton?: boolean;
};

export type ButtonProps = {
  text: string;
  action?: (() => void) | any;
  type?: "button" | "submit" | "reset";
  disable?: boolean;
  loading?: boolean;
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
  news: Post;
  navigation: (path: number) => void;
  deletePost: (post: Post) => void;
  showDeleteIcon: boolean;
};

export type DeckCardProps = {
  news: Post[];
  showDeleteIcon: boolean;
};

export type ModalProps = {
  children: ReactNode;
  closeModal: () => void;
};

export type NewsContentProps = {
  selectedNews: Post;
  openImage: (openImage: boolean) => void;
  isAdmin: boolean;
};

export type SliderType = {
  id: number;
  name: string;
  image: string;
  role: string;
};

export type SliderProps = {
  subjects: Member[];
};

export type SliderListProps = {
  subjects: Member[];
  itemAction: (item: Member) => void;
};

export type SliderItemProps = {
  item: Member;
  itemAction: (item: Member) => void;
};

export type InputProps = {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: FieldError;
  multiple?: boolean;
};

export type CheckboxProps = {
  label: string;
  register: UseFormRegisterReturn;
  id: string;
};

export type FormProps<T> = {
  onSubmitForm: (data: T) => void;
};

export type FormType<T extends FieldValues> = {
  register: UseFormRegister<T>;
};

export type ImagePreviewProps = {
  imagePreview: string;
};

export type FormField = {
  type: string;
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

export type DynamicFormProps<T extends FieldValues> = {
  fields: FormField[];
  onSubmit: (data: T) => void;
};

export type SponsorListProps = {
  sponsors: Sponsor[];
};

export type ComponentMap = {
  [key: string]: () => JSX.Element;
};

export type PaginationComponent = {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  hasMore: boolean;
};

export type Error = {
  status: number;
  message: string;
};

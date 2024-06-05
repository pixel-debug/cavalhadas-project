import { format } from "date-fns";

export const convertFileToString = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const base64Data = base64String.split(",")[1];
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const formatDate = (date: Date): string => {
  return format(date, "dd/MM/yyyy HH:mm");
};

export const dateToString = (date: string | Date): Date => {
  if (date instanceof Date) return date;
  const parts = date.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;

  const year = parseInt(parts[2], 10);
  return new Date(year, month, day);
};
export function imageSrc(source: string | File): string {
  return typeof source === "string" ? source : URL.createObjectURL(source);
}

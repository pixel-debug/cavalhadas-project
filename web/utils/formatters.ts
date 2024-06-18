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

export const formatDate = (date: string | Date, withHour?: boolean): string => {
  return format(date, withHour ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy");
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

export function getFilename(imageURL: string): string {
  const start = imageURL.lastIndexOf("%2F") + 3;
  const end = imageURL.indexOf("?");

  if (start !== -1 && end !== -1) {
    const filename = imageURL.substring(start, end);
    return filename;
  }
  return "";
}

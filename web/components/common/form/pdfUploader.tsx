import { useState } from "react";
import { Input } from "../input";
import { UploadProps } from "@/types/types";

export const PdfUploader = ({ register }: UploadProps) => {
  const [pdfs, setPdfs] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedPdfs: File[] = Array.from(e.target.files);
      setPdfs((prevPdfs) => [...prevPdfs, ...selectedPdfs]);
    }
  };

  const displaySelectedPDFs = () => {
    return (
      <ul>
        {pdfs.map((pdf, index) => (
          <li key={index}>{pdf.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Input
        key="pdf"
        label="PDF Upload"
        id="pdf"
        placeholder="Upload your PDF"
        register={register}
        multiple
        type="file"
        onChange={handleChange}
      />
      {displaySelectedPDFs()}
    </div>
  );
};

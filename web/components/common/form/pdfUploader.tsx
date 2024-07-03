import { useState } from "react";
import { UploadProps } from "@/types/types";

export const PdfUploader = ({ setValue }: UploadProps) => {
  const [pdfs, setPdfs] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedPdfs: File[] = Array.from(e.target.files);
      setPdfs((prevPdfs) => [...prevPdfs, ...selectedPdfs]);
      setValue("pdf", [...pdfs, ...selectedPdfs]);
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
      <input
        key="pdf"
        id="pdf"
        placeholder="Upload your PDF"
        multiple
        type="file"
        onChange={handleChange}
      />
      {displaySelectedPDFs()}
    </div>
  );
};

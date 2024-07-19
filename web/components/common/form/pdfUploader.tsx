import { useRef, useState } from "react";
import { UploadProps } from "@/types/types";

export const PdfUploader = ({ setValue }: UploadProps) => {
  const [pdfs, setPdfs] = useState<File[]>([]);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

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
          <li
            className={"text-xs lg:text-sm text-neutral-800 font-montserrat"}
            key={index}
          >
            {`${index + 1} - ${pdf.name}`}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="h-full w-full">
      <input
        key="pdf"
        id="pdf"
        multiple
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
      <button
        className="bg-blue-900 rounded
         p-2 w-full mb-5text-sm lg:text-base
          text-neutral-50 font-montserrat flex justify-center mb-5"
        type="button"
        onClick={handleClick}
      >
        Documentos
      </button>
      {displaySelectedPDFs()}
    </div>
  );
};

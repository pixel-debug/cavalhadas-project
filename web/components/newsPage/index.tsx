import { NewsContentProps, PDF, Post } from "@/types/types";
import { CustomImage } from "../common/image";
import { useForm } from "react-hook-form";
import { formatDate, imageSrc, truncateFileName } from "@/utils/formatters";
import { useMutation } from "react-query";
import { updatePost } from "@/external/api/postApi";
import { Button } from "../common/button";

export const NewsContent = ({
  selectedNews,
  openImage,
  isAdmin,
}: NewsContentProps) => {
  const { id, title, content, image, createdAt, pdfs } = selectedNews;

  const { handleSubmit, setValue } = useForm<Post>({
    defaultValues: {
      title,
      content,
    },
  });

  const { mutate } = useMutation((postData: Post) => updatePost(id, postData));

  const onSubmit = (data: Post) => {
    mutate(data);
  };

  const downloadDocument = (pdf: PDF) => {
    const link = document.createElement("a");
    link.href = pdf.downloadPath;
    link.download = pdf.downloadPath.split("/").pop() || "downloaded_file";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (
    event: React.FocusEvent<HTMLParagraphElement>,
    field: keyof Post
  ) => {
    if (isAdmin) {
      const newValue = event.target.textContent || "";
      setValue(field, newValue);
    }
  };
  const formatContent = (text: string) => {
    return text.replace(/(.{50})/g, "$1-\n");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-[60vh] w-full" onClick={() => openImage(true)}>
        <CustomImage src={imageSrc(image)} alt="" objectFit="cover" />
      </div>
      <p className="font-montserrat text-xs xl:text-xm text-neutral-600">
        {formatDate(createdAt, true)}
      </p>
      <p
        className="my-5 font-montserrat text-lg xl:text-2xl text-neutral-900"
        contentEditable={isAdmin ? "true" : "false"}
        onBlur={(e) => handleChange(e, "title")}
        suppressContentEditableWarning={true}
      >
        {title}
      </p>
      <p
        className="font-montserrat text-sm xl:text-md text-neutral-900 break-words space-y-4"
        contentEditable={isAdmin ? "true" : "false"}
        onBlur={(e) => handleChange(e, "content")}
        suppressContentEditableWarning={true}
      >
        {content.split("\n").map((paragraph, index) => (
          <span key={index}>
            {paragraph}
            <br />
          </span>
        ))}
      </p>
      {isAdmin && (
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
        >
          Salvar edição
        </button>
      )}
      <div className="flex flex-row justify-center mt-10">
        {pdfs && pdfs.length > 0
          ? pdfs.map((pdf, index) => (
              <div className="xl:w-[40%] w-[40%] mr-5" key={index}>
                <Button
                  text={truncateFileName(pdf.fileName)}
                  action={() => downloadDocument(pdf)}
                />
              </div>
            ))
          : null}
      </div>
    </form>
  );
};

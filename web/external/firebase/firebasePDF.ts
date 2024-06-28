import { deleteObject, getDownloadURL, getStorage } from "firebase/storage";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebaseConfig";
import { getFilename } from "@/utils/formatters";

const createPDFsOnFirebase = async (files: File[]): Promise<string[]> => {
  try {
    const downloadURLs: string[] = [];

    for (const file of files) {
      const filename = `files/${file.name}_file.pdf`;
      const storageReference = ref(storage, filename);

      await uploadBytes(storageReference, file);

      const downloadURL = await getDownloadURL(storageReference);
      downloadURLs.push(downloadURL);
      console.log(downloadURLs);
    }

    return downloadURLs;
  } catch (error) {
    console.error("Error uploading files:", error);
    throw error;
  }
};

const deletePDFFromFirebase = async (url: string): Promise<boolean> => {
  const storage = getStorage();
  const filename = getFilename(url);

  const desertRef = ref(storage, `files/${filename}`);

  try {
    await deleteObject(desertRef);
    return true;
  } catch (error) {
    console.error("Error deleting file from Firebase:", error);
    return false;
  }
};

export { createPDFsOnFirebase, deletePDFFromFirebase };

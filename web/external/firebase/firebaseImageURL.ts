import { deleteObject, getDownloadURL, getStorage } from "firebase/storage";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebaseConfig";
import { getFilename } from "@/utils/formatters";

const createImageOnFirebase = async (image: File): Promise<string> => {
  try {
    const timestamp = new Date().getTime().toString();
    const filename = `images/${timestamp}_image.jpg`;

    const storageReference = ref(storage, filename);
    await uploadBytes(storageReference, image);

    const downloadURL = await getDownloadURL(storageReference);
    console.log("download url", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

const deleteImageFromFirebase = async (url: string): Promise<boolean> => {
  const storage = getStorage();
  const filename = getFilename(url);

  const desertRef = ref(storage, `images/${filename}`);

  try {
    await deleteObject(desertRef);
    return true;
  } catch (error) {
    console.error("Error deleting image from Firebase:", error);
    return false;
  }
};

// const uploadImageFromFirebase = async (
//   fileName: string,
//   image: File
// ): Promise<string> => {
//   const storage = getStorage();
//   const desertRef = ref(storage, `images/${fileName}`);

//   uploadBytes(desertRef, image)
//     .then(async () => {
//       const downloadURL = await getDownloadURL(desertRef);
//       return downloadURL;
//     })
//     .catch((error) => {
//       return false;
//     });
// };

export { createImageOnFirebase, deleteImageFromFirebase };

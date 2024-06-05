import { getDownloadURL } from "firebase/storage";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebaseConfig";

const FirebaseImage = async (image: File): Promise<string> => {
  try {
    const timestamp = new Date().getTime().toString();
    const filename = `images/${timestamp}_image.jpg`;

    const storageReference = ref(storage, filename);
    await uploadBytes(storageReference, image);

    const downloadURL = await getDownloadURL(storageReference);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default FirebaseImage;

import * as admin from "firebase-admin";
import { getDownloadURL } from "firebase-admin/storage";
const FirebaseImage = async (imageBase64: string): Promise<string> => {
  const bucket = admin.storage().bucket();
  console.log(bucket.name);

  const timestamp = new Date().getTime().toString();
  const filename = `images/${timestamp}_image.jpg`;

  const imageBuffer = Buffer.from(imageBase64, "base64");
  await bucket.file(filename).save(imageBuffer, {
    metadata: {
      contentType: "image/jpeg",
    },
  });

  const file = bucket.file(filename);
  const downloadURL = await getDownloadURL(file);

  console.log("Signed URL:", downloadURL);

  return downloadURL;
};

export default FirebaseImage;

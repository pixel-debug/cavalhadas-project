import * as admin from "firebase-admin";

const FirebaseImage = async (imageBase64: string): Promise<string> => {
  const bucket = admin.storage().bucket();

  console.log("BUCKET ", bucket.name);
  const timestamp = new Date().getTime().toString();
  const filename = `images/${timestamp}_image.jpg`;

  const imageBuffer = Buffer.from(imageBase64, "base64");

  await bucket.file(filename).save(imageBuffer, {
    metadata: {
      contentType: "image/jpeg",
    },
  });

  const imageUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

  return imageUrl;
};

export default FirebaseImage;

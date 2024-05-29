import * as dotenv from "dotenv";
import * as admin from "firebase-admin";
import { ServiceAccount } from "firebase-admin";

dotenv.config();

const serviceAccount: ServiceAccount = {
  projectId: process.env.PROJECT_ID!,
  privateKey: process.env.PRIVATE_KEY!.replace(/\\n/g, "\n"),
  clientEmail: process.env.CLIENT_EMAIL!,
};

console.log("service account: ", serviceAccount);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.STORAGE_BUCKET,
});

export default admin;

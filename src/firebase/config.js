require("dotenv").config();
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadImage = (type) => {
  return async (req, res, next) => {
    if (!req.file) return next();

    const image = req.file;
    const nameFile =
      type + Date.now() + "." + image.originalname.split(".").pop();
    const storageRef = ref(storage, nameFile);
    const metadata = {
      contentType: image.mimetype,
    };
    uploadBytesResumable(storageRef, req.file.buffer, metadata)
      .then(() => {
        req.fileName = nameFile;
        getDownloadURL(storageRef)
          .then((url) => {
            req.urlUploaded = url;
            next();
          })
          .catch((error) => {
            console.error(error + "get url download");
            res
              .status(200)
              .json({ errCode: 1, errMessage: "Upload to storage fail" });
          });
      })
      .catch((error) => {
        console.error(error);
        res
          .status(200)
          .json({ errCode: 1, errMessage: "Upload to storage fail" });
      });
  };
};

require("dotenv").config();
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { getUserInfoService } from "../services/userService";

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

export const deleteImage = (isUpdate) => {
  return async (req, res, next) => {
    let id = 0;
    if (isUpdate) {
      if (!req.fileName || !req.body || !req.body.id) return next();
      id = req.body.id;
    } else {
      if (!req.params || !req.params.id) return next();
      id = req.params.id;
    }
    const userInfo = await getUserInfoService(id);
    if (!userInfo.image || !userInfo || userInfo.image.length === 0)
      return next();
    const fileName = userInfo.image ? userInfo.image : null;
    console.log(userInfo);
    if (!fileName) next();
    const desertRef = ref(storage, fileName);
    deleteObject(desertRef)
      .then(() => {
        next();
      })
      .catch((error) => {
        console.log(error);
        res
          .status(200)
          .json({ errCode: 1, errMessage: "Upload to storage fail" });
      });
  };
};

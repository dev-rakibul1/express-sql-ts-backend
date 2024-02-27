import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import path from "path";
import { ICloudinaryResponse, IUploadFile } from "../types/common";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "upload_images/");
  },

  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

cloudinary.config({
  cloud_name: "dd7uhuhan",
  api_key: "688115652124986",
  api_secret: "Pn9_CBqtLArTh1EXDFwe1Rb7j38",
});

const upload = multer({ storage: storage });

const uploadToCloudinary = async (
  file: IUploadFile
): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file?.path,
      (error: Error, result: ICloudinaryResponse) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

export const imageSetup = {
  upload,
  uploadToCloudinary,
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageSetup = void 0;
const cloudinary_1 = require("cloudinary");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "upload_images/");
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + path_1.default.extname(file.originalname));
    },
});
cloudinary_1.v2.config({
    cloud_name: "dd7uhuhan",
    api_key: "688115652124986",
    api_secret: "Pn9_CBqtLArTh1EXDFwe1Rb7j38",
});
const upload = (0, multer_1.default)({ storage: storage });
const uploadToCloudinary = (file) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        cloudinary_1.v2.uploader.upload(file === null || file === void 0 ? void 0 : file.path, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
});
exports.imageSetup = {
    upload,
    uploadToCloudinary,
};

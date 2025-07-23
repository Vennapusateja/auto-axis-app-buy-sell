import dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary';

dotenv.config()

console.log("Cloudinary config:");
console.log("CLOUD_NAME:", process.env.CLOUD_NAME);
console.log("API_KEY:", process.env.CLOUD_API_KEY);
console.log("SECRET_KEY:", process.env.CLOUD_API_SECRET);
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
export default cloudinary 
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'ddzuj6trp',
  api_key: '359648743918412',
  api_secret: '8vjnPyUHd4WglBxAr0ea0wg_pWU'
});

const uploadToCloudinary = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};

export const FileUploadHelper = {
  uploadToCloudinary
};

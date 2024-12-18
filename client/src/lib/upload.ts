import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
//getDownloadURL: is used to provide file download URL
//ref: is used to create location reference in Firebase storage
//uploadBytesResumable: is used to track progress when uploading file
import { storage } from "./firebase";

//this function upload file to Firebase storage
const upload = async (file: any) => {
  const date = new Date();
  const storageRef = ref(storage, `images/${date + file.name}`); //creating new location reference
  const uploadTask = uploadBytesResumable(storageRef, file); //uploadBytesResumable: this will start to upload and track the status

  //We are returning Promise to handle the end result (sucess or error)
  //resolve: is used if work successfully completed
  //reject: is used when we got any error
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed", //state_changed: It calls every time when upload has new status like progress, pause etc
      (snapshot) => {
        //snapshot: It provides new upload status
        const progress =
          //bytesTransferred: How much bytes have been uploaded
          //totalBytes: Total size of file
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + " % done.");
      },
      (error) => {
        reject("Something went wrong! " + error?.code); //we return error message by using reject
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((getDownloadURL) => {
          resolve(getDownloadURL);
        });
      }
    );
  });
};

export default upload;

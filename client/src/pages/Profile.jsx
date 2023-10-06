import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { app } from "../firebase.js";
const Profile = () => {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [formData, setFormData] = useState({});
  const [fileUploadError, setFileUploadError] = useState(false);

  console.log(file);
  console.log(filePerc);
  console.log(fileUploadError);
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        console.log(error);
        setFileUploadError(true);
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };

  //firebase storage
  /*
      allow read;
      allow write: if 
      request.resource.size < 2 * 1024 * 1024 &&
      request.resource.contentType.matches('image/.*')
*/

  return (
    <div className="p-3 max-w-lg mx-auto bg-slate-200 mt-20 rounded-sm">
      <h1 className="text-center text-3xl font-semibold ">Profile</h1>
      <form className="flex flex-col gap-3">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
          type="file"
          ref={fileRef}
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="profile"
          className="rounded-full self-center my-3 h-16 w-16 object-cover cursor-pointer"
        />
        <p className="text-center font-semibold">
          {fileUploadError ? (
            <span className="text-red-600 ">
              Error Image upload (Image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">Uploading {filePerc}%</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image Successfully Uploaded</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded focus:outline-none"
          id="username"
          // onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded focus:outline-none"
          id="email"
          // onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded focus:outline-none"
          id="password"
          // onChange={handleChange}
        />

        <div className="flex justify-around gap-3">
          <button
            // disabled={loading}
            className="bg-orange-600 w-1/2 text-white p-3 rounded-sm uppercase hover:bg-orange-500 disabled:opacity-80"
          >
            Update
            {/* {loading ? "Loading..." : "Sign Up"} */}
          </button>

          <button
            // disabled={loading}
            className="bg-green-600 w-1/2 text-white p-3 rounded-sm uppercase hover:bg-green-500 disabled:opacity-80"
          >
            Create Listing
            {/* {loading ? "Loading..." : "Sign Up"} */}
          </button>
        </div>
      </form>

      <div className="flex justify-between mt-5">
        <span className="text-red-600 cursor-pointer hover:text-red-700">
          Delete account
        </span>
        <span className="text-red-600 cursor-pointer hover:text-red-700">
          Sign out
        </span>
      </div>
    </div>
  );
};

export default Profile;

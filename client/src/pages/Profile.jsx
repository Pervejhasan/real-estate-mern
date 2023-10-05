import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto bg-slate-300 mt-20 rounded-sm">
      <h1 className="text-center text-3xl font-semibold ">Profile</h1>
      <form className="flex flex-col gap-3">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full self-center my-3 h-16 w-16 object-cover cursor-pointer"
        />

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

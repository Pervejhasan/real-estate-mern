import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-4 max-w-lg mx-auto my-14  bg-slate-200  rounded">
      <h1 className="text-3xl text-center font-semibold  py-4">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded focus:outline-none"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded focus:outline-none"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded focus:outline-none"
          id="password"
        />

        <button className="bg-slate-700 text-white p-3 rounded-sm uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

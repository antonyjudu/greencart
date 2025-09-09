import React from "react";
import { useAppContext } from "../context/AppContext.jsx";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";

function Login() {
  const { setShowUserLogin, setUser, axios, navigate, fetchUser } = useAppContext();

  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

    const onSubmitHandler = async (e) => {
      try{
        e.preventDefault();
        const { data } = await axios.post(`/api/user/${state}`,  {name, email, password});
        if(data.success){
          navigate('/');
          await fetchUser();
          setShowUserLogin(false);
        }
        else{
          toast.error(data.message);
        }
      }
      catch(error){
        toast.error(error.message);
      }
    }

  return (
    <div onClick={() => setShowUserLogin(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50" >
      <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white" >
        <p className="text-2xl font-medium m-auto">
          <span className="text-primary">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>
        {state === "register" && (
          <div className="w-full">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-dull" />
              <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Name"
                className="border border-gray-200 rounded w-full pl-10 pr-3 py-2 mt-1 outline-primary focus:ring-2 focus:ring-primary"
                type="text" required />
            </div>
          </div>
        )}
        <div className="w-full">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-dull" />
            <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Email"
              className="border border-gray-200 rounded w-full pl-10 pr-3 py-2 mt-1 outline-primary focus:ring-2 focus:ring-primary"
              type="email" required />
          </div>
        </div>
        <div className="w-full">
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-dull" />
            <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password"
              className="border border-gray-200 rounded w-full pl-10 pr-3 py-2 mt-1 outline-primary focus:ring-2 focus:ring-primary"
              type="password" required />
          </div>
        </div>
        {state === "register" ? (
          <p> Already have account?{" "}
            <span onClick={() => setState("login")} className="text-primary-dull cursor-pointer">
              click here </span>
          </p>
        ) : (
          <p> Create an account?{" "}
            <span onClick={() => setState("register")} className="text-primary-dull cursor-pointer">
              click here </span>
          </p>
        )}
        <button className="bg-primary hover:bg-primary-dull transition-all text-white font-bold w-full py-2 rounded-md cursor-pointer">
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;

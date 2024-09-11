"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function User_Create(){
// //add user function starts
const router = useRouter();
const [err , setErr] = useState('');
const [success , setSuccess] = useState('');
const [addUser, setAddUser] = useState({
  username: "",
  email: "",
});
const handleSaveChanges = ({ target: { name, value } }) => {
  setAddUser({ ...addUser, [name]: value });
};
const handleAddSubmit = async (e) => {
  e.preventDefault();
 
  try {
    const reqOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addUser),
  };
  const response = await fetch(
    "http://localhost:3000/api/user",
    reqOption
  );
  const newUser = await response.json();
  if (!newUser || newUser == ""){
    alert("Error Occur During Creating User")
  }
  else{
    alert("User Created Successfully")
    router.push('/pages/Welcome')
    }
  } catch (error) {
    setErr("Error Occurs");
    window.setTimeout(closeError, 2000);
      function closeError(){
      document.getElementById("err").style.display="none";
      }
  }
};
// //add user function ends
localStorage.setItem('username' , addUser.username);
localStorage.setItem('email' , addUser.email);
    return(
        <div className="px-4 flex justify-center w-full ">
      {/* main Div Starts */}
      <div className="max-w-lg w-full bg-gradient-to-r from-[#6bc85c] to-[#ffee00] rounded-xl shadow-2xl overflow-hidden p-8 space-y-8">
        {/* error success Starts */}
        {success && (
              <div id="success" className="flex justify-center bg-green-500 text-white text-lg py-1 px-3 rounded-md mt-2">
                {success}
              </div>
            )}
        {err && (
              <div id="err" className="flex justify-center bg-red-500 text-white text-lg py-1 px-3 rounded-md mt-2">
                {err}
              </div>
            )}
            {/* error success ends */}

            {/* heading starts */}
            <h2 className="text-center text-4xl font-extrabold text-black">
              Welcome
            </h2>
            <p className="text-center font-semibold text-gray-900">
              Create an user
            </p>
            {/* heading ends */}

            {/* form starts */}
            <form onSubmit={handleAddSubmit} className="space-y-6">
              {/* input Starts */}
              <div className="relative">
                <input
                  placeholder="Enter your name"
                  className="peer h-10 w-full border-b-2 border-gray-950 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-900"
                  required
                  id="name"
                  name="username"
                  type="text"
                  onChange={handleSaveChanges}
                  value={addUser.username}
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-900 peer-focus:text-sm"
                  htmlFor="Username"
                >
                  Username
                </label>
              </div>
              <div className="relative">
                <input
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-gray-900 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-900"
                  required
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleSaveChanges} value={addUser.email}
                />
                <label
                  className="absolute left-0 -top-3.5 text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-900 peer-focus:text-sm"
                  htmlFor="email"
                >
                  Email address
                </label>
              </div>
             
              {/* input ends */}
              {/* button starts */}
              <button
                className="w-full py-2 px-4 bg-gradient-to-l from-[#6bc85c] to-[#ffee00] hover:bg-gradient-to-r rounded-md shadow-lg text-black font-semibold transition duration-200"
                type="submit"
              >
              Create
              </button>
              {/* button ends */}
            </form>
            {/* form ends */}

      </div>
      {/* main div ends */}
    </div>
    );
}
"use client"
import Link from "next/link";
export default function Welcome(){
    
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    (function () {
    if(!username||!email){
        window.location.href = '/'
    }
      })();
    return(
        <div className="w-full md:w-[600px] bg-gradient-to-r from-[#6bc85c] to-[#ffee00] rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 hover:shadow-3xl mx-4 text-black">
            <div className="leading-10 flex flex-col justify-center items-center py-4">
                <h1 className="font-bold py-4 uppercase text-4xl">
                  welcome
                </h1>
                <h1 className="text-xl font-semibold capitalize">
                  User With below  Credentials is Succesfully created.
                </h1>
                <p className="text-sm">
                  This is an Welcome Page , created using NEXTJS 
                </p>
                <p className="font-semibold mt-4">Username : {username}</p>
                <p className="font-semibold mt-4">Email : {email}</p>
            </div>
            <Link href={'/'} className=" rounded-2xl font-bold bg-gradient-to-l from-[#6bc85c] to-[#ffee00] hover:bg-gradient-to-r text-black uppercase px-3 py-2 flex justify-center hover:shadow-2xl" >Back</Link>
        </div>
    )
}
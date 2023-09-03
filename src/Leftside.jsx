import React from "react";
import {HiMailOpen} from 'react-icons/hi'
import {TbLogout} from "react-icons/tb"

const Leftside = () => {
  return (
    <>
      <div className=" w-56">
        <p className="text-4xl font-bold mt-7 pl-9  ">Travigo</p>
        <div className="mt-8 text-black font-medium text-xl pl-8 flex-col ">
          <button className=" px-5  py-3 rounded-lg bg-green-400 text-white border mt-2 flex gap-2 align-baseline ">
          <HiMailOpen/>  Dashboard
          </button>
          <button className=" px-5  py-3 rounded-lg hover:bg-green-400 hover:text-white mt-1">
            My Tickets
          </button>
          <button className=" px-5  py-3 rounded-lg hover:bg-green-400 hover:text-white  mt-1">
            Favorite
          </button>
          <button className=" px-5  py-3 rounded-lg hover:bg-green-400 hover:text-white  mt-1">
            Message
          </button>
          <button className=" px-5  py-3 rounded-lg hover:bg-green-400 hover:text-white  mt-1">
            Transaction
          </button>
          <button className=" px-5  py-3 rounded-lg hover:bg-green-400 hover:text-white  mt-1">
            settings
          </button>
          <button className=" px-5  py-3 rounded-lg hover:bg-green-400 hover:text-white  mt-28 flex gap-2">
           <TbLogout/> Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Leftside;

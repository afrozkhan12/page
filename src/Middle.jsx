import React from "react";

const middel = () => {
  return (
    <>
      <div className="border rounded-2xl  bg-slate-100 m-4 w-[50rem] p-5">
        <div className="flex">
          <div>
            <h1 className="text-2xl font-bold">Hello, Jeremy!</h1>
            <p>Welcome back and explore the world.</p>
          </div>
          <div>
            <p className="border py-2 px-4 rounded-3xl bg-white ml-60 ">
              search Destination...
            </p>
          </div>
        </div>
        <div className="mt-6 mb-6 p-2 flex justify-around border-2 h-64" >
          <div className="card w-52 h-28 image-full">
            <figure>
              <img
                src=""
                alt=""
              />
            </figure>
            <div className="card-body mt-32">
              <h2 className="card-title">Moutain Forel!</h2>
              <p>Green land</p>          
            </div>
          </div>
          <div className="card w-52 h-36 image-full">
            <figure>
              <img
                src=""
                alt=""
              />
            </figure>
            <div className="card-body mt-32">
              <h2 className="card-title">Moutain Forel!</h2>
              <p>Green land</p>          
            </div>
          </div>
          <div className="card w-52 h-36 image-full">
            <figure>
              <img
                src=""
                alt=""
              />
            </figure>
            <div className="card-body mt-32">
              <h2 className="card-title">Moutain Forel!</h2>
              <p>Green land</p>          
            </div>
          </div>
        </div>
        <div className="mt-2 flex gap-7">
          <div className="border-2 w-[28rem] h-56"> </div>
          <div className="border-2 w-[15rem] h-56"> </div>
        </div>
      </div>
    </>
  );
};

export default middel;

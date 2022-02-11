import React from 'react';

const Profile = () => {
  return (
    <section className="w-screen h-screen">
      <div className="bg-gray-200 flex flex-wrap justify-center mr-2 ml-1">
        <div className=" w-full bg-zinc-900 shadow-lg transform duration-200 easy-in-out">
          {/* Background */}
          <div className="h-32 overflow-hidden">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          {/* Profile Photo */}
          <div className="flex justify-start px-5  -mt-10 sm:ml-12">
            <img
              className="h-32 w-32 bg-white p-1 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt=""
            />
            <h2 className="flex text-3xl font-bold items-center ml-4 sm:ml-8 mt-10">Mohit Dhiman</h2>
          </div>
          {/* Texts */}
          <div className="pb-10">
            <div className="text-center px-14">
              <p className="mt-4 text-gray-300">Links</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

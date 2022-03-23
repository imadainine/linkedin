import React from "react";

const Login = () => {
  return (
    <div className="container xl mx-auto flex flex-col bg-white justify-between px-6 py-1 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center py-1 px-6 w-36 h-12">
          <a href="/" className="font-extrabold mr-1">
            <h1 className="text-regal-purple">Linkedin</h1>
          </a>
          <a href="/">
            <img src="linkedin.png" alt="" width={40} />
          </a>
        </div>
        <div>
          <a href="/">
            <h6 className="font-normal text-blue-400">Join now</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

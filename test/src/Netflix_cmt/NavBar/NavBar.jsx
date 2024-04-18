import React, { Fragment } from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <Fragment>
      <div className="navbar bg-black h-20  flex  items-center  ">
        <div className="h-16 w-32 ml-12 ">
          <img
            src="https://th.bing.com/th/id/OIP.pTvx6Uh-1_tC6IvQDyriYAHaEK?w=602&h=338&rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>
        <div className=" ml-auto  ">
          <button className="bg-gray-500 text-white h-8 w-24 rounded m-4">
            English
          </button>
          <button className="bg-red-800 text-white h-8 w-24 rounded m-4">
            Sign Up
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default NavBar;

{
  /* <div className="NavBar relative">
<div className="logo w-32 ml-36 mt-12 relative z-10">
  <img
    src="https://repository-images.githubusercontent.com/701682132/3502ddf2-1a51-4dcf-b852-63859c393cb5"
    alt=""
  />
</div>
<div className="absolute top-0 right-0">
  <img
    src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    alt=""
  />
</div>
<div className="absolute top-0 right-0 m-4">
  <button className="bg-gray-300">Sign Up</button>
</div>
</div> */
}

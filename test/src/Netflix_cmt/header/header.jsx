import React from "react";

function Header() {
  return (
    <div style={{position:'relative'}}>
      <img
        src="https://handoff-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg"
        alt=""
      
      />
      <div style={{position:'absolute', top:'50%' ,left:'50%' ,  transform: "translate(-50%, -50%)" }} className="">
        <h1 className="text-white text-4xl font-semibold">Unlimited movies, TV shows and more</h1>
      </div>
    </div>
  );
}

export default Header;

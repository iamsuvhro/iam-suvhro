import React from "react";
import Image from "../assets/img/info.png"; // Ensure this path is correct

function ContactUs() {
  return (
    <div className="w-full grid grid-cols-12">
      <div className="col-span-8">
        <p className="text-6xl mb-4 font-sans font-bold bg-gradient-to-r from-purple-400 via-pink-700 to-red-500 bg-clip-text text-transparent">
          Contact Us
        </p>

        <div className="mt-10"></div>
      </div>
      <div className="col-span-4 -ml-40">
        <div style={{ width: "500px", height: "auto" }}>
          <img
            src={Image}
            alt="Profile"
            className="w-full h-full object-cover rounded-full mr-16"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

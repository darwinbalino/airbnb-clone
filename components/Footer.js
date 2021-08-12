import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 px-32 gap-y-10 md:grid-cols-4 py-14">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Coding is fun!</p>
        <p>Next.js ftw</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Created with</p>
        <p>Tailwind CSS</p>
        <p>React.js</p>
        <p>Next.js</p>
        <p>And lots of Love</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Saftey</p>
        <p>Hello</p>
        <p>Goodbye</p>
        <p>Have a great day!</p>
      </div>
    </div>
  );
};

export default Footer;

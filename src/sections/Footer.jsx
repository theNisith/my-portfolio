import { mySocials } from "../constants";
import { useState } from "react";

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <div key={index} className="relative">
            {social.showOnHover ? (
              <div
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                className="cursor-pointer"
              >
                <img src={social.icon} className="w-5 h-5" alt={social.name} />
                {hoveredSocial === index && (
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {social.href}
                  </div>
                )}
              </div>
            ) : (
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} className="w-5 h-5" alt={social.name} />
              </a>
            )}
          </div>
        ))}
      </div>
      <p>© 2025 Ali. All rights reserved.</p>
    </section>
  );
};

export default Footer;

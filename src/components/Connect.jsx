import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import "react-social-icons/telegram";
import "react-social-icons/tiktok";
import "react-social-icons/whatsapp";

const Connect = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="icon">
        <SocialIcon
          url="https://www.instagram.com/p/CyMI4sGuTXL/?igshid=MzRlODBiNWFlZA=="
          target="_blank"
        />
      </div>
      <div className="">
        <SocialIcon
          url="https://www.facebook.com/itscorgiland?mibextid=LQQJ4d"
          target="_blank"
        />
      </div>
      <div className="icon">
        <SocialIcon url="www.telegram.com/@itiscorgiland" />
      </div>
      <div className="icon">
        <SocialIcon url="https://www.tiktok.com/@itiscorgiland?_t=8h8nrqpSbOg&_r=1" />
      </div>
      <div className="icon">
        <SocialIcon url="https://whatsapp.com/channel/0029Va9Wfmh8KMqmM2EvU50Q" />
      </div>
    </div>
  );
};

export default Connect;

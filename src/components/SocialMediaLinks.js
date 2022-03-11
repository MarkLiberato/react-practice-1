import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaLinks() {
  return (
    <div className="Social">
      <FontAwesomeIcon icon={faFacebookF} className="Social__icon" />
      <FontAwesomeIcon icon={faTwitter} className="Social__icon" />
      <FontAwesomeIcon icon={faYoutube} className="Social__icon" />
      <FontAwesomeIcon icon={faInstagram} className="Social__icon" />
      <FontAwesomeIcon icon={faLinkedinIn} className="Social__icon" />
    </div>
  );
}

import React from "react";
import FooterLinks from "./FooterLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import "./styles/footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <SocialMediaLinks />
      <FooterLinks />
    </div>
  );
}

import React from "react";
import "./styles/body.css";

export default function Body() {
  return (
    <div className="Body">
      <div className="Body__main-wrapper">
        <div className="Body__header-wrapper">
          <h6 className="Body__header">
            Please login above to access the new EssilorPro®
          </h6>
          <hr className="Body__header__line" />
        </div>
        <div className="Body__content-wrapper">
          <div className="Body__lcontent">
            <img
              src="https://portal.essilorpro.com/assets/images/pro-welcome-landing.jpg"
              alt="essi content image"
              className="Body__lcontent__image"
            />
          </div>
          <div className="Body__rcontent">
            <h6 className="Body__rcontent__header">
              CONNECTING TO YOUR ESSILOR DASHBOARD IS EASIER THAN EVER THROUGH
              ESSILORPRO®!
            </h6>
            <p className="Body__rcontent__text">
              Click the button below to login and access your dashboard, manage
              your practice information that is displayed on the EssilorUSA.com
              locator, and review content specifically designed to drive success
              for your business. If you're new to EssilorPRO®, request access
              today and register your account.
            </p>
            <button className="Button Body__rcontent__button">
              Request Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

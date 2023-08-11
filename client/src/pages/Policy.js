import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Data Collection and Usage</p>
          <p>Security Measures</p>
          <p>Marketing Communication</p>
          <p>Age Restriction</p>
          <p>Data Retention</p>
          <p>Cookies and Tracking</p>
          <p>Updates to Privacy Policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

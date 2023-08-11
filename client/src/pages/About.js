import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At AT & DG, we are passionate about delivering a seamless and delightful shopping experience to our valued customers. With an ever-expanding collection of top-quality products, we strive to be your go-to destination for all your shopping needs. Our commitment to excellence, innovation, and customer satisfaction drives us to be the best in the e-commerce industry. Join us on this exciting journey and experience a new way of shopping that's fast, secure, and tailored just for you. Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

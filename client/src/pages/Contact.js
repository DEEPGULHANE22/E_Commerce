import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { FaLinkedin } from 'react-icons/fa';
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="cont.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : 2020bcs050@sggs.ac.in , 2020bcs094@sggs.ac.in
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 9370110442 , 9370618860
          </p>
          <p className="mt-3">
          <FaLinkedin /> : <a href="https://www.linkedin.com/in/anuj-thakare-3b7b89225" target="_blank" style={{textDecoration:"none"}}>Anuj-Thakare</a> , <a href="https://www.linkedin.com/in/deep-sudhir-gulhane-4a3b1b217" target="_blank" style={{textDecoration:"none"}}>Deep-Gulhane</a>
          </p>
        </div>


      </div>

    </Layout>
  );
};

export default Contact;

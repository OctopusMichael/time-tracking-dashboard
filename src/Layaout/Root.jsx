import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <div className="container-fluid section-container-main">
          <div className="row ">
            <div className="col-12 col-lg-4 section-left">
              <Navbar />
            </div>

            <div className="col-12 col-lg-8 section-right">
              {navigate.state == "loading" && (
                <div className="alert alert-info my-5"> loading... </div>
              )}
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/OctopusMichael" target="_blank">Michael Diaz</a>.
      </div>
    </>
  );
};

export default Root;

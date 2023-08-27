import cv from "../assets/Isaac_Danso_CV.pdf";
import download from "../assets/images/download.svg";

const Hero = () => {
  return (
    <div className=" hero flex mb-5">
      <div className="img"></div>
      <div className="title">
        <h2 className="pt-5">
          HI, I am <span className="">ISAAC DANSO</span>
        </h2>
        <p className="pt-4">
          Hello, I am Isaac Danso, a passionate{" "}
          <span>Frontend Web developer</span> with expertise in creating
          delightful and responsive web applications. I love transforming
          creative ideas into functional, user-friendly interfaces.
        </p>
        <button type="button" className="btn btn-dark">
          <a href={cv} download>
            <img src={download} alt="download"></img>Download CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;

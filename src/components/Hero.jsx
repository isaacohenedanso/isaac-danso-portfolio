import resume from "../assets/Isaac_Danso_CV.pdf";
import download from "../assets/images/download.svg";

const Hero = () => {
  return (
    <div className=" hero flex mb-5">
      <div className="img"></div>
      <div className="title">
        <h2>
          HI, I am <span className="">ISAAC DANSO</span>
        </h2>
        <p className=" py-2">
          Hello, I am Isaac Danso, a passionate Frontend Web developer with
          expertise in creating delightful and responsive web applications. I
          love transforming creative ideas into functional, user-friendly
          interfaces.
        </p>
        <button type="button" className="btn btn-dark">
          <a href={resume} download>
            <img src={download} alt="download"></img>Download CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectImageOne from "../images/projectImage1.jpg";
import ProjectImageTwo from "../images/projectImage2.jpg";
import ProjectImageThree from "../images/projectImage3.jpg";
import ProjectImageFour from "../images/projectImage4.jpg";
import ProjectImageFive from "../images/projectImage5.jpg";
import ProjectImageSix from "../images/projectImage6.jpg";
import ProjectImageSeven from "../images/projectImage7.jpg";
import ProjectImageEight from "../images/projectImage8.jpg";
import ProjectImageNine from "../images/projectImage9.jpg";
import ProjectImageTen from "../images/projectImage10.jpg";
import ProjectImageEleven from "../images/projectImage11.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  { id: 1, name: "45 Dalkeith", bgImage: `url(${ProjectImageSeven})` },
  { id: 2, name: "340 HENRY", bgImage: `url(${ProjectImageEleven})` },
  { id: 3, name: "27 Copernicus", bgImage: `url(${ProjectImageOne})` },
  { id: 4, name: "67 Copernicus", bgImage: `url(${ProjectImageFour})` },
  { id: 5, name: "84 Copernicus", bgImage: `url(${ProjectImageFive})` },
  { id: 6, name: "95 Copernicus", bgImage: `url(${ProjectImageSix})` },
  { id: 7, name: "57 Copernicus", bgImage: `url(${ProjectImageThree})` },
  { id: 8, name: "61 Dalkeith", bgImage: `url(${ProjectImageEight})` },
  { id: 9, name: "17 EASTON", bgImage: `url(${ProjectImageNine})` },
  { id: 10, name: "36 EASTON", bgImage: `url(${ProjectImageTen})` },
  { id: 11, name: "47 Copernicus", bgImage: `url(${ProjectImageTwo})` },
];

const Project = () => {
  const [activeLink, setActiveLink] = useState("Main Projects");
  const navigate = useNavigate();

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  // Separate projects by IDs
  const mainProjects = projects.filter((project) =>
    [1, 2, 3].includes(project.id)
  );
  const otherProjects = projects.filter(
    (project) => ![1, 2, 3].includes(project.id)
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="w-full h-full flex items-center justify-center pt-[13dvh]">
      <div
        className="flex flex-col items-center justify-center lg:w-[70%] md:w-[96%] w-[89%] h-[100dvh] mt-[5%]"
       
      >
        {/* Filter buttons */}
        <div className="w-full h-[10dvh] flex items-center justify-start">
          <div className="flex items-center justify-center overflow-x-auto gap-5 md:pl-8 pl-2 noScrollbar">
            <button
              className={`md:text-[13px] text-[10px] ${
                activeLink === "Main Projects"
                  ? "border-b-[1px] border-white py-1"
                  : ""
              }`}
              onClick={() => handleClick("Main Projects")}>
              Main Projects
            </button>
            <button
              className={`md:text-[13px] text-[10px] ${
                activeLink === "All Other Projects"
                  ? "border-b-[1px] border-white py-1"
                  : ""
              }`}
              onClick={() => handleClick("All Other Projects")}>
              All Other Projects
            </button>
          </div>
        </div>

        {/* Display projects based on the selected filter */}
        <div className="w-full h-full overflow-scroll flex flex-wrap gap-4 items-center justify-center"  data-aos= "fade-in-out">
          {activeLink === "Main Projects" && (
            <div className="w-full ">
              <h2 className="text-[24px] font-bold my-2">Main Projects</h2>
              <div className="flex flex-wrap gap-4">
                {mainProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group md:w-[47%] w-full px-4 h-[40dvh] flex items-end cursor-pointer projectImages"
                    style={{ backgroundImage: project.bgImage }}
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <p className="text-[20px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
                      {project.name.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeLink === "All Other Projects" && (
            <div className="w-full mt-8">
              <h2 className="text-[24px] font-bold my-2">All Other Projects</h2>
              <div className="flex flex-wrap gap-4">
                {otherProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group md:w-[47%] w-full px-4 h-[40dvh] flex items-end cursor-pointer projectImages"
                    style={{ backgroundImage: project.bgImage }}
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <p className="text-[20px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
                      {project.name.toUpperCase()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;

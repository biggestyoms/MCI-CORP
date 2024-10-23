import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectImageOne from "../images/projectImage1.jpg"
import ProjectImageOne1 from "../images/project11.jpg"
import ProjectImageOne11 from "../images/projectImage111.jpg"
import ProjectImageTwo from "../images/projectImage2.jpg"
import ProjectImageTwo2 from "../images/projectImage22.jpg"
import ProjectImageThree from "../images/projectImage3.jpg"
import ProjectImageThree3 from "../images/projectImage33.jpg"
import ProjectImageFour from "../images/projectImage4.jpg"
import ProjectImageFour4 from "../images/projectImage44.jpg"
import ProjectImageFour44 from "../images/projectImage444.jpg"
import ProjectImageFour444 from "../images/projectImage4444.jpg"
import ProjectImageFour4444 from "../images/projectImage44444.jpg"
import ProjectImageFive from "../images/projectImage5.jpg"
import ProjectImageFive1 from "../images/projectImage55.jpg"
import ProjectImageFive2 from "../images/projectImage555.jpg"
import ProjectImageSix from "../images/projectImage6.jpg"
import ProjectImageSix1 from "../images/projectImage66.jpg"
import ProjectImageSix2 from "../images/projectImage666.jpg"
import ProjectImageSeven from "../images/projectImage7.jpg"
import ProjectImageSeven1 from "../images/projectImage77.jpg"
import ProjectImageSeven2 from "../images/projectImage777.jpg"
import ProjectImageSeven3 from "../images/projectImage7777.jpg"
import ProjectImageSeven4 from "../images/projectImage77777.jpg"
import ProjectImageSeven5 from "../images/projectImage777777.jpg"
import ProjectImageEight from "../images/projectImage8.jpg"
import ProjectImageEight1 from "../images/projectImage88.jpg"
import ProjectImageEleven from "../images/projectImage11.jpg"
import ProjectImageEleven1 from "../images/projectImage1111.jpg"
import ProjectImageEleven2 from "../images/projectImage11111.jpg"
import ProjectImageEleven3 from "../images/projectImage111111.jpg"
import ProjectImageEleven4 from "../images/projectImage1111111.jpg"
import ProjectImageEleven5 from "../images/projectImage11111111.jpg"
import ProjectImageEleven6 from "../images/projectImage111111111.jpg"




const projects = [
  { 
    id: 1, 
    name: "45 Dalkeith", 
    bgImage:  `url(${ProjectImageSeven2})`, 
    image6: ProjectImageSeven1,  
    image2: ProjectImageSeven3,  
    image3: ProjectImageSeven4, 
    image4: ProjectImageSeven5, 
    image5: ProjectImageSeven, 
    details: ` 45 Dalkeith Ave, Brantford
Built in 2005, 45 Dalkeith Ave is a unique property designed with a distinct California-inspired aesthetic. This environmentally friendly building features 18 units spread across two levels, blending the breezy architectural styles reminiscent of Florida and the Bahamas. Offering a modern, laid-back vibe, this property is perfect for tenants looking for a refreshing alternative to traditional designs, while enjoying sustainable building practices.`,
    contractor: "MCI corp", 
    status: "Completed",
  },
  { 
    id: 2,
    name: "340 HENRY", 
    bgImage:  `url(${ProjectImageEleven})`, 
    image1: ProjectImageEleven1,  
    image2: ProjectImageEleven2,  
    image3: ProjectImageEleven3, 
    image4: ProjectImageEleven4, 
    image5: ProjectImageEleven5, 
    image6: ProjectImageEleven6, 
    details: `340 Henry Street, Brantford
Built in 2007, 340 Henry Street is a prime location in Brantford, offering 45,000 square feet of modern, versatile space. With a fresh design similar to 45 Dalkeith, this building exudes a contemporary feel, making it a top choice for businesses. Home to MCI’s main office and a thriving community of 50 successful tenants, the property provides ample parking and easy access to major routes, making it ideal for companies looking for convenience and a dynamic work environment.`  ,
    contractor: "MCI corp", 
    status: "Completed",
  },
  { 
    id: 3, 
    name: "27 Copernicus", 
    bgImage: `url(${ProjectImageOne})`, 
    image1: ProjectImageOne11,  
    image2: ProjectImageOne1, 
    image3: ProjectImageOne1,  
    details: `27 Copernicus Blvd, Brantford
Built in 2003, 27 Copernicus Blvd is a standout industrial complex featuring two modern buildings that collectively offer 17,000 square feet of versatile space. Ideal for a variety of business operations, this property provides ample room for growth and flexibility. Conveniently located in Brantford, it is well-suited for companies looking for a prime location with easy access to major routes.`, 
    contractor: "MCI Corp", 
    status: "Completed"
  },
  // Other projects without contractor and status details
  { 
    id: 4, 
    name: "67 Copernicus", 
    bgImage: `url(${ProjectImageFour})`, 
    image1: ProjectImageFour44,  
    image2: ProjectImageFour4,  
    image3: ProjectImageFour444, 
    image4: ProjectImageFour4444, 
    details: "This is the detail of 67 Copernicus." 
  },
  { 
    id: 5, 
    name: "84 Copernicus", 
    bgImage: `url(${ProjectImageFive})`, 
    image1: ProjectImageFive1,  
    image2: ProjectImageFive2,  
    image3: ProjectImageFive2, 
    details: "This is the detail of 84 Copernicus." 
  },
  { 
    id: 6, 
    name: "95 Copernicus", 
    bgImage:  `url(${ProjectImageSix})`, 
    image1: ProjectImageSix,  
    image2: ProjectImageSix1,  
    image3: ProjectImageSix2, 
    details: "This is the detail of 95 Copernicus." 
  },
  { 
    id: 7, 
    name: "57 Copernicus", 
    bgImage: `url(${ProjectImageThree})`, 
    image1: ProjectImageThree,  
    image2: ProjectImageThree,  
    image3: ProjectImageThree3, 
    details: "This is the detail of 57 Copernicus.", 
   
  },
  { 
    id: 8, 
    name: "61 Dalkeith", 
    bgImage:  `url(${ProjectImageEight})`, 
    image1: ProjectImageEight1,  
    details: "This is the detail of 61 Dalkeith." 
  },
  { 
    id: 9, 
    name: "17 EASTON", 
    // bgImage: ProjectImageNine, 
    // image1: ProjectImageNine1,  
    // image2: ProjectImageNine2,  
    // image3: ProjectImageNine3, 
    details: "This is the detail of 61 Dalkeith." 
  },
  { 
    id: 10, 
    name: "36 EASTON", 
    // bgImage: ProjectImageTen, 
    // image1: ProjectImageTen1,  
    // image2: ProjectImageTen2,  
    // image3: ProjectImageTen3, 
    details: "This is the detail of 61 Dalkeith." 
  },
  { 
    id: 11, 
    name: "47 Copernicus", 
    bgImage: `url(${ProjectImageTwo})`, 
    image1: ProjectImageTwo,  
    image2: ProjectImageTwo2,  
    image3: ProjectImageTwo2, 
    details: "This is the detail of 47 Copernicus.", 
  }
  
];


//   const { id } = useParams();
//   const project = projects.find((p) => p.id === parseInt(id));

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div className="w-full h-full flex items-center justify-center">
//       <div className="flex flex-col items-center justify-center w-full h-full ">
//         <div className="w-full h-[100dvh] bg-cover bg-no-repeat bg-center flex items-end justify-center" style={{ backgroundImage: project.bgImage }} >
//           <p className="py-10 md:text-[55px] text-[30px] font-extrabold font-Dm">{project?.name}</p>
//         </div>
//         <div className="mt-[7%] gap-10 w-full flex md:flex-row flex-col items-start justify-center h-full">
//           {/* Sidebar with sticky positioning */}
//           <div className="flex flex-col items-start md:justify-start justify-center text-start lg:w-[18%] ml-[5%] gap-2  md:w-[25%] md:h-full h-[20dvh] md:sticky md: top-[20%]">
//             <p className="text-[13px]">
//               <span className="font-bold text-[17px]">Contractor: </span>MCI corp
//             </p>
//             <p className="text-[13px] ">
//               <span className="font-bold text-[17px]">Status: </span>MCI corp
//             </p>
//             <p className="text-[13px]">
//               <span className="font-bold text-[17px]">Contractor: </span>MCI corp
//             </p>
//           </div>

//           {/* Main content area with vertical scrolling */}
//           <div className="overflow-y-scroll md:w-[80%] h-full p-4 flex flex-col items-center justify-start gap-10">

//             {
//                 project?.image1 ? <div className="lg:w-full md:w-[95%] w-full md:h-[100dvh] h-[69dvh] flex items-center justify-center">
//                 <img src={project?.image1} className="w-full h-full md:object-cover  " alt="" />
//               </div> : <div></div>
//             }

//         {
//           project?.image2 ?     <div className=" lg:w-full md:w-[95%] md:h-[100dvh] h-[65dvh] flex items-center justify-end">
//           <div className="lg:w-[60%] md:w-[50%] w-[60%] bg-blue-400 h-full">
//           <img src={project?.image2} className="w-full h-full object-cover object-left " alt="" />
//           </div>
//         </div> : <div></div>
//         }

//          {
//           project?.image3 ?   <div className="lg:w-full md:w-[95%] w-full md:h-[100dvh] h-[69dvh] flex items-center justify-center">
//           <img src={project?.image3} className="w-full h-full md:object-cover object-cover  " alt="" />
//         </div> : <div></div>
//          }


// {
//           project?.image4 ?    <div className="lg:w-full md:w-[95%] w-full md:h-[100dvh] h-[69dvh] flex items-center justify-center">
//           <img src={project?.image4} className="w-full h-full md:object-cover object-right  " alt="" />
//         </div> : <div></div>
//          }



// {
//          project?.image5 ?      <div className=" lg:w-full md:w-[95%] md:h-[100dvh] h-[65dvh] flex items-center justify-end">
//          <div className="lg:w-[60%] md:w-[50%] w-[60%] bg-blue-400 h-full">
//          <img src={project?.image5} className="w-full h-full object-cover object-left " alt="" />
//          </div>
//        </div> : <div></div>
//          }



// {
//           project?.image6 ?   <div className="lg:w-full md:w-[95%] w-full md:h-[100dvh] h-[69dvh] flex items-center justify-center">
//           <img src={project?.image6} className="w-full h-full object-fill object-left  " alt="" />
//         </div> : <div></div>
//          }




//   </div>
// </div>

//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <div className="w-full h-[100dvh] bg-cover bg-no-repeat bg-center flex items-end justify-center" style={{ backgroundImage: project.bgImage }} >
          <p className="py-10 md:text-[55px] text-[30px] font-extrabold font-Dm">{project?.name}</p>
        </div>
        <div className="mt-[7%] gap-10 w-full flex md:flex-row flex-col items-start justify-center h-full">
          {/* Sidebar with sticky positioning */}
          {
            project?.contractor && project?.status ? (
              <div  className="flex flex-col items-start md:justify-start justify-center text-start lg:w-[18%] ml-[5%] gap-2  md:w-[25%] md:h-full h-[20dvh] md:sticky md:top-[40%]">
                <p className="text-[13px]">
                  <span className="font-bold text-[17px]">Contractor: </span>{project.contractor}
                </p>
                <p className="text-[13px]">
                  <span className="font-bold text-[17px]">Status: </span>{project.status}
                </p>
                <p className="text-[13px]">
                  <span className="font-bold text-[17px]">Info: </span>{project.details}
                </p>
              </div>
            ) : null
          }

          {/* Main content area with vertical scrolling */}
          <div className="overflow-y-scroll md:w-[80%] h-full p-4 flex flex-col items-center justify-start gap-10">
            {project?.image1 && (
              <div className="lg:w-full md:w-[95%] w-full md:h-[100dvh] h-[69dvh] flex items-center justify-center">
                <img src={project.image1} className="w-full h-full object-cover" alt="" />
              </div>
            )}
            {project?.image2 && (
              <div className="lg:w-full md:w-[95%] md:h-[100dvh] h-[65dvh] flex items-center justify-end">
                <div className="lg:w-[60%] md:w-[50%] w-[60%] bg-blue-400 h-full">
                  <img src={project.image2} className="w-full h-full object-cover " alt="" />
                </div>
              </div>
            )}
            {project?.image3 && (
              <div className="lg:w-full md:w-[95%] w-full md:h-[100dvh] h-[69dvh] flex items-center justify-center">
                <img src={project.image3} className="w-full h-full object-cover" alt="" />
              </div>
            )}
            {project?.image4 && (
              <div className="lg:w-full md:w-[95%] w-full md:h-[100dvh] h-[69dvh] flex items-center justify-center">
                <img src={project.image4} className="w-full h-full object-cover " alt="" />
              </div>
            )}
            {project?.image5 && (
              <div className="lg:w-full md:w-[95%] md:h-[100dvh] h-[65dvh] flex items-center justify-end">
                <div className="lg:w-[60%] md:w-[50%] w-[60%] bg-blue-400 h-full">
                  <img src={project.image5} className="w-full h-full object-cover " alt="" />
                </div>
              </div>
            )}
            {project?.image6 && (
              <div className="lg:w-full md:w-[95%] w-full md:h-[100dvh] h-[69dvh] flex items-center justify-center">
                <img src={project.image6} className="w-full h-full object-cover" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

import { useState } from "react";
// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import { FaBed, FaShower, FaCar, FaRuler } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const {
    data: projects,
    error,
    isPending,
  } = useFetch("http://localhost:8000/projects/" + id);
 
  // const [thumbnailColor, setThumbnailColor] = useState(""); // State to store thumbnail color
  // const [imageUrl, setImageUrl] = useState('');
  // const imageName = projects.images[0]; // Assuming there's only one image URL per project


  const changeThumbnail = (event) => {
    const clickedThumbnail = event.target;
    const projectImg = document.getElementById(`${projects.areacode}${projects.id}main`);

    if (projectImg) {
      const backgroundImage = window.getComputedStyle(clickedThumbnail).getPropertyValue('background-image');
      projectImg.style.backgroundImage = backgroundImage;
    }
  };

  if (isPending) {
    return console.log("Loading");
  }

  if (error) {
    return console.log(error);
  }

  return (
    <div className="projects w-screen sm:h-[130vh] h-[200vh] flex flex-col justify-center items-center lg:py-20 sm:py-10 py-5">
    <div className="projects-screen bg-white lg:px-20 sm:px-10 px-2 lg:py-20 sm:py-10 py-5 w-screen sm:h-[130vh] h-[150vh] flex flex-col-reverse lg:flex-row">
      <div className="projects-infoleft flex w-full lg:w-7/12 justify-start flex-col h-3/6 lg:h-full lg:py-32 lg:mt-0 mt-8 md:px-20 sm:px-10 px-5 border-l-4 rounded border-slate-700">
        <h1 className="text-2xl font-bold pt-10 text-slate-50 font-merriweather">
          {projects.title}
        </h1>
        <h2 className="text-lg font-medium pb-10 text-slate-400">
          {projects.address}
        </h2>
        <h2 className="text-lg font-medium text-slate-500">Description</h2>
        <h1 className="text-lg font-bold text-slate-50 w-10/12">
          {projects.description}
        </h1>
      </div>
      <div className="projects-inforight lg:border-0 border-slate-700 lg:w-5/12 rounded-md w-full md:h-full h-1/2 md:py-0 py-4 bg-gray-100">
      <div
          className="project-img lg:h-4/6 lg:border-2 w-full h-4/6 rounded border-slate-700"
          id={`${projects.areacode}${projects.id}main`}
          style={{
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="picture-boxes lg:h-1/6 h-1/6 flex flex-row md:p-4 justify-around">

          <div className="thumbnail-box md:h-16 w-16 h-full border-2 bg-cyan-900 border-slate-700 cursor-pointer rounded-sm md:gap-0 gap-2" onClick={changeThumbnail} id={`${projects.areacode}${projects.id}1`}></div>
          <div className="thumbnail-box md:h-16 w-16 h-full bg-orange-800 cursor-pointer rounded-sm md:gap-0 gap-2" onClick={changeThumbnail} id={`${projects.areacode}${projects.id}2`}></div>
          <div className="thumbnail-box md:h-16 w-16 h-full border-2 bg-red-800 border-slate-700  cursor-pointer rounded-sm md:gap-0 gap-2" onClick={changeThumbnail} id={`${projects.areacode}${projects.id}3`}></div>
          <div className="thumbnail-box md:h-16 w-16 h-full bg-pink-800 cursor-pointer rounded-sm md:gap-0 gap-2" onClick={changeThumbnail} id={`${projects.areacode}${projects.id}4`}></div>

        </div>
        <div className="project-attributes h-1/6 flex flex-row justify-around py-4">
          <div className="deets-box w-1/6 flex items-center flex-col sm:gap-0 gap-1 h-full">
            {/* <img alt="alt" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWklEQVR4nO3Vv0tVYRgH8FeUllAQl5DaGgQnV5vErdzrD+gfiIZ2B3/NSmt/hDiIQUtQSDQ2tLTYEkGhICHykYNPIXbvMQIv570+n+We973POS/f871wS0kppZRSKbiFdXzFAVabvereDdb8baXUxnkLjXk8iOuDUhuh37oaMkjHyEY6RjbSMYa9ETzCFj7iMPaO8AEbmC2VBLnKKV7idukC4fI67GEJ9zCJO1jAJo5j5l3z3YX737p+h3jd/Gr+Nch7jPR5ATP4HHO7GO1x/yAsXxXke3w+aWnzPr7F3LNez7sOmMYL/IrjHrYFeXoh0EzLQx/H3A9MDCLIbxGmsdcWZATbcf0Fc6WHmNuPuecDDjIdx/1s/R/BON7E1gleYRFTGMPdWO/EzKdBBmn8Oa+lkaqUoQ1SGxmkY2QjtTSiEuXGBSkdJYPU1shlpaP0MTxBUkoppfL/zgD4eoQJ3XSTrwAAAABJRU5ErkJggg=="></img> */}
            <FaBed />
            <h2 className="text-black text-xs md:text-base text-center">
              {projects.bedrooms} Beds
            </h2>
          </div>
          <div className="deets-box w-1/6 flex items-center flex-col sm:gap-0 gap-1 h-full">
            {/* <img alt="alt" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVR4nO2Xy0rDQBSGh1K7EPQJvBRX4hu49Uaj4F5EceMbeFuJqKhQ9DWU6lJwL+71FaxaH0FFyicDRwiFqLFnkjHOB1mESf7/P0wyZ8YYRyAk3f8ZCIV4RpgR3wgz4hthRnwAqABTQJ1k6vJMxfgG0A9sAS1+zhOwCfQZHwBmgYdYwFtgH5gAhoFeuarApIzdxZ5vAlHeRezEAl3b8CnetZ/XTez9bbdpk4OcSIA3YA0o/UKjBGyIhuXYTdrkACuxIuYV9CLgVTRXdVJ+bzoCvIjpgqLukmha7aqW7leG52J46kC7Idpn2tqdRkNAG3gHBhzoD4p224V+3Mj2CkvDoceFeKwbhyZXYrLo0GNZPC6NQxPbvCyjDj3GxONeU7RHOnGarYc2LWAPKHdTyBH+cNBNIc8iMm5yApiRDC2NQqZV06XLUNMo5JCCfFpl2eF+zkxeP/tuVz97IJATwBzwKEfdSHs8MzrO6k3t8cwoUiGRhLGbyZr2eCAQKGjfIKu+4nq5JavluEiFRC77BqGvBAL/s2+g1VfyXm7RWo6LVEiUZ99I01c+AH0NYd9RukIRAAAAAElFTkSuQmCC"></img> */}
            <FaShower />
            <h2 className="text-black text-xs md:text-base text-center">
              {projects.bathrooms} Baths
            </h2>
          </div>
          <div className="deets-box w-1/6 flex items-center flex-col sm:gap-0 gap-1 h-full">
            {/* <img alt="alt" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACxUlEQVR4nO2aT4hNURzH3zDlX2amMWpoFlIybAiJhkyxNc3CSxaMP5NmQSYjSqkpbBSpWUxqZvfCQiSjiJQNKVkgC8UQC1FCUyzw0S/fp5/bfd673tOcZ+63fvW+5/zOued7zzn3nt/vvkwmRYoUiQHUACuAbGC2PKmI84SLs6UKsZkwDAMbArNhja34zACdcm7PBAagXWPrLMV54gkBmoEB4ExCOw30AUtCEbJNvh+B9wnsq9u8D4D14y1ku3yXljIQ124SsAA4CLwBvgP99sSsKiGRPmYCF9XP4aoV4mZoBPgGrAxGCDAdeBLZF8+Bm0Cv1cf01QR8MJ+QhMxT+R09pexFdhV4ofKnQEtMfyc0K3NCE9Ibs4S2AJ9tKcX0t07tNgctxNUP6M43Rcpb1K6vWoR0qf63jQ00qLy/WoQcUP3CSPkslR8JXggwBbivF2FtpG6x2u0OTchRYL5sFdANPFJdd0x/O1W3NhQhcymMt8COAv3dBt4Bk4MQojp7zB6S7Qe2Amuiy8n5Wyj7x2NKNRxRVgOfgMfAtKoTAkzVjH0BXtteKuI/7ksranZkP6czmOFWoWNJyJsdF4xdADYWHVRgj19vDUUHEvoLsRyQCimCdEb+EqRLawItrS75vgKeOXup8n2VEvGvhdidvwzciLErwKJMBUGaxA4MlDMjQBvwEKgT7wDu5eMKYBdwzbW3Q2HO8VPAScdz5uP4dYsM9btWfXeI1+nabZUQ0iPeKm4nV/LnJWDQ8lSu/SVg1PG7Zo6Pmo/jluMajMuiAK3iPZUQktVngGbxvcCYxRLixy2WcO2HLLng+IhPxinxMOS4xSHHXHwyBuxx31/s2pvKFqKy2ZFs4a/EmpZDYyRLUu/4DDPH683H8UYfo/MzB1xT4NqJhPwfH0MN9gmYcJHLJIGpDuAPAtmILUskIkWKFJk8fgDUmrAPhRJDSwAAAABJRU5ErkJggg=="></img> */}
            <FaCar />
            <h2 className="text-black text-xs md:text-base text-center">
              {projects.parkings} Parkings
            </h2>
          </div>
          <div className="deets-box w-1/6 flex items-center flex-col sm:gap-0 gap-1 h-full">
            {/* <img alt="alt" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQ0lEQVR4nO2afWiVdRTHry81Ny03FScqUjrfJk6XN9818I90CKVkoblMLGeGoARhvoEWyjArEkOKoj9SmGKhKIK0XnCzYkoqMVQQhVJ8idKcpnOzj5z2feDn5d49997du7vhc+DycJ7nnPM73/P7Pef8fue5oVBA7ZSA4UB+hn14BHgK6JKM8hBgP010AxiUFi/j8+Vr+XEBKAU6xKPUEdgE1AO3gQoZeaVVvI5CQB3wC3BKvvzsG1hgtoQPAk8CxeJvAn9n6Pcf8KmW2AoF+ZAfkDFAA/AnsBQIC8gPMpaJX4Ouo4Af5c/2ZoEIzGTgVylc1HVOKENEU1AvA41aZquBR+NVtndlMXAa+BZ4PO0exyBgOfA78AXQN5ZcQAGli4CuwOA02s9u5lkWMBN4EZgOdEp2kJ7AOWWmd1vicIzsd0S2vwOejiKzmwfp42QH26aCcxS4CxSmaH+2V45Z6twO/KNxKtyqrGx0QPXrOFCTzICFKjY7gP6q3pUtANDLIiqbt4ByoLsz88bfUcCswOUDfwBfSabKAprMwLvkfH/x6xXFiQnaecyWpWw1Kt97NicAW233Kr5Ay8lm57q3nwu1EMg+otO0OPVt7/MmcMXZn410ds975LDRPc38E3o+DjisZ1eBRcBPyQLpA6wDqmXwI+DlOPQ6AC8AZ6R3zAOv5fKJlk+9bI7Qe9KgpfUB0EPyzwG1ThCPJwzEccxbUrlxyI53Imkvapm2MznASuel3h251dYsecuqTuNmS3+Bs6+zmZmUFiDAMCcT/QW8pRrQGVgCXHLS7BhHz5zsa1fn3iQnLVswXpWc1bO1Osh5GW5gyoCoHtzRi7kZyNP9Wc5h5yRQEqE3X6A98KVRzj62KfX0Z+h+b5WFu0ogo1MFpFzZaICTiaqdiC50Iy6ZsHRqgLd1bYwsiprRN5wZrXQynHeoeydVQN7X86FOJrqmdyLq9kPHZXO8p1NHjC+PId9NftTJ/k7nULc2VUBW6bllHY+KfGy+p5Tbx8mQxm/00ZvqjOGNtzRVQLoDnyuterNT4GOzSOm3VqBqteb9AhCW/Q3AZxozJyVAImSXxQPEqRHnJW/X5+PQCUv+gcSQUSCOTtcEZMNtFkiCvoRbG4hV6Txv/SqN5nlZTPsw47PEZ4n/v/uhim58Z/E54se2NpDpqi+v6/5o8XOdImr8TPEl4qeKf0l8sfjXPP1gafGQvyMFPnId1VQoc37P+nXSaYNAthCd1rQ3IDXACTUVvN9Zvy46bRCIdWWqIu79Zn1kH71wAIRgRmJTsLRI4h1RZ3BlRDtolo+OfY7Dr7XaghmZKPvzEgHyTYxc/0wzOsU66aWT6hP6HK7z97/qAedp02Y0xUdvmnq86fjw+WGiLduQvpJaQ+BLoJ8O/t+H2iPRFIV7apg1+p2p2yzR1Ayz1r7R5lB7JiBXy8z/Px4BBRRqju4DtrDHCBmoTUAAAAAASUVORK5CYII="></img> */}
            <FaRuler/>
            <h2 className="text-black text-xs md:text-base text-center">
              {projects.sft} sqft.
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div>
    <Link to={"/projects"}><button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded">All Projects</button></Link>
    </div>
    </div>
  );
};

export default Project;

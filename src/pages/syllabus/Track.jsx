import Header from "../components/header"
import Menu from "../components/menu"
import { useEffect, useState } from "react";
import companyLogo from "/icons/lantoplogo2.svg";
import Footer from "../components/footer";
import { Link, useParams } from "react-router-dom";
import '../../styles/syllabus.css';
import frontendData from "../../Data/frontendTrackData";
import dataScienceTrack from "../../Data/dataScienceTrack";


const Track = ({props}) => {
    const [openMenu, setOpenMenu] = useState(false);

   let {trackID} = useParams()

   console.log(trackID)

   const [ dataToRender, setDataToRender ] = useState([]);
    useEffect(() => {
        if (trackID === 'frontend'){
         setDataToRender(frontendData)
        } else {
          setDataToRender(dataScienceTrack)
        }

    }, [trackID])

    const openMenuDropdown = () => {
        setOpenMenu(true);
        document.body.classList.add('dropdownMenuOpened');
    }
    const closeMenuDropdown = () => {
      setOpenMenu(false);
      document.body.classList.remove('dropdownMenuOpened');
    }
    useEffect(() => {
      return () => {
        // This cleanup function will be called when the component unmounts
        closeMenuDropdown();
      };
    }, []);
  return (
    <div>
        <Header openMenuDropdown = {openMenuDropdown} companyLogo = {companyLogo}/>
        <Menu closeMenuDropdown ={closeMenuDropdown} /> 
        <div className="contact-hero">
          <div className="contact-hero-text">
            <span className='sub-header-text'>Program</span>
            <h1>
                {trackID === 'frontend' ? 'Frontend Track' : (trackID === 'backend' ? 'Backend Track' : (trackID === 'data' ? 'Data Science track': 'Full-stack Track'))}
            </h1>
          </div>
        </div>

        <div className="syllabus">
            <div className="container">
                <div>
                    {dataToRender.map((data, index) => (
                        <div key={index} className="track-inner-container">
                            <h2>Week {data.week}</h2>
                            <ul>
                                {data.topics.map((topic) => (
                                    <li key={topic}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* footer */}
        <Footer />
    </div>
  )
}

export default Track 
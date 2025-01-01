import Header from "./components/header"
import Menu from "./components/menu"
import { useEffect, useState } from "react";
import companyLogo from "/icons/lantoplogo2.svg";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import '../styles/syllabus.css'


const syllabus_data = [
    {
        link : '/syllabus/frontend',
        name: 'Frontend Track'
    },
    {
        link : '/syllabus/backend',
        name: 'Backend Track'
    },
    {
        link : '/syllabus/data',
        name: 'Data science Track'
    },
    {
        link : '/syllabus/fullstack',
        name: 'Fullstack Track'
    },
]


const Syllabus = ({props}) => {
    const [openMenu, setOpenMenu] = useState(false);

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
            <span className='sub-header-text'>Syllabus</span>
            <h1>Our learning Syllabus</h1>
          </div>
        </div>

        <div className="syllabus">
            <div className="container">
                <div className="syllabus_container">
                    {
                        syllabus_data.map((value, key) => {
                            return (
                                <Link to={value.link} key={key}>
                                    <div className="syllabus_container_inner"> 
                                        <p>{value.name}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>

        {/* footer */}
        <Footer />
    </div>
  )
}

export default Syllabus
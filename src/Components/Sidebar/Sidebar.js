import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,

    SidebarContent,

  } from "react-pro-sidebar";
  //import icons from react icons

  import {

    FiArrowLeftCircle,
    FiArrowRightCircle
  } from "react-icons/fi";
  import { FaBuilding, FaListAlt} from 'react-icons/fa'
  import {AiOutlineBarChart} from 'react-icons/ai'
import {BsFillPeopleFill} from 'react-icons/bs'
  import 'react-pro-sidebar/dist/css/styles.css';
  
  import './Sidebar.css'
const Sidebar = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        };
  return (
    <>
    <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
 
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<AiOutlineBarChart />}>
               <Link to='/'>Cockpit</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<BsFillPeopleFill/>}>
               <Link to='/'>People</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<FaBuilding />}>
               <Link to='/'>Companies</Link> 
              </MenuItem>
              <MenuItem active={true} icon={<FaListAlt />}>
               <Link to='/'>Sequence</Link> 
              </MenuItem>

            </Menu>
          </SidebarContent>
    
    
        </ProSidebar>
      </div>
    </>
  )
}

export default Sidebar
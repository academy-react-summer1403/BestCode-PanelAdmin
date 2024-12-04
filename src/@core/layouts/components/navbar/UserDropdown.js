// ** React Imports
import { Link } from "react-router-dom";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
} from "react-feather";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import { userPanelProfile } from "../../../../core/services/api/usersmanager";
// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg";
import { useEffect, useState } from "react";
import { removeItem , getItem } from "../../../../core/services/common/storage.services";
import { useNavigate } from "react-router-dom";
const UserDropdown = () => {
  const [profile , setProfile] = useState([])
  const GetProfileInfo = async () => {
    const result =  await  userPanelProfile()
    setProfile(result)
  }
  const navigate = useNavigate()

  const logOut = () => {
    removeItem('token')
    navigate('/login')
  }

  const roles = getItem('roles')

  useEffect(() => {
     GetProfileInfo()
  }, [])
  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">{profile.fName} {profile.lName}</span>
          <span className="user-status">{roles && roles.slice(0, 2).map(role => <span> {role}, </span>)}...</span>
        </div>
        <Avatar
          img={profile.currentPictureAddress}
          imgHeight="40"
          imgWidth="40"
          status="online"
        />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem onClick={logOut}>
          <Power size={14} className="me-75" />
          <span className="align-middle">خروج از حساب کاربری</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;

import MobileNavItem from "./mobile-nav-item";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";

const MobileNavbar = () => {
  return (
    <div className="flex flex-col  gap-8 mt-16 ml-8  bg-mainBackground z-50">
      <MobileNavItem url="about" />
      <MobileNavItem url="collections" />
      <MobileNavItem url="contact" />
      <MobileNavItem url="blog" />
      <div className=" flex gap-8 text-mainText">
        <a href="https://www.instagram.com/lilybeegentle/">
          <FaInstagram size={24} />
        </a>
        <a href="https://pinterest.com/lilybeegentle/">
          <ImPinterest2 size={24} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086417744367">
          <FaFacebookF size={24} />
        </a>
      </div>
    </div>
  );
};

export default MobileNavbar;

import MobileNavItem from "./mobile-nav-item";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiPinterestLine } from "react-icons/ri";

const MobileNavbar = () => {
  return (
    <div className="flex flex-col  gap-8 mt-16 ml-8  bg-mainBackground z-50">
      <MobileNavItem url="about" />
      <MobileNavItem url="collections" />
      <MobileNavItem url="contact" />
      <MobileNavItem url="blog" />
      <div className=" flex gap-8 text-mainText felx items-center ">
        <a href="https://www.instagram.com/lilybeegentle/">
          <BsInstagram size={24} />
        </a>
        <a href="https://pinterest.com/lilybeegentle/">
          <RiPinterestLine size={26} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086417744367">
          <FaFacebookF size={24} />
        </a>
      </div>
    </div>
  );
};

export default MobileNavbar;

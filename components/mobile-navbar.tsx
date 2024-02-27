import MobileNavItem from "./mobile-nav-item";

const MobileNavbar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 my-4">
      <MobileNavItem url="about" />
      <MobileNavItem url="collections" />
      <MobileNavItem url="contact" />
      <MobileNavItem url="blog" />
    </div>
  );
};

export default MobileNavbar;

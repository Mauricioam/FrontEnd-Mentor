
import logo from "../assets/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import closeMenu from "../assets/images/icon-menu-close.svg";

const headerTitles = ["Home", "New", "Popular", "Trending", "Categories"];

function Header({ open, setOpen }) {

  

  return (
    <header className="flex items-center py-7">
      <div className="w-screen">
        <img src={logo} alt="logo_from_magazine" />
      </div>
      <div className="desktop:flex hidden gap-12 ">
        {headerTitles.map((item, i) => (
          <a
            className="hover:cursor-pointer active:text-softOrange text-darkGrayishBlue"
            key={i}
          >
            {item}
          </a>
        ))}
      </div>
      <button className="desktop:hidden" onClick={()=>setOpen(true)} >
       <img src={menuIcon} alt="Menu icon " />
      </button>
      {/* Rigth Menu */}
      <div className={` desktop:hidden fixed top-0 right-0 ${open ? "w-[80%]  shadow-2xl ": "w-0"}   flex h-full  bg-offWhite  justify-start ml-44 pt-10 z-10`}>
      <div className="desktop:hidden px-7 w-full flex flex-col gap-10">
        <button className="flex justify-end hover:cursor-pointer" onClick={()=> setOpen(false)}>
          <img className="w-10" src={closeMenu} alt="close menu icon" />
        </button>
        <div className="flex flex-col gap-5 ">
        {headerTitles.map((item, i) => (
          <a
            className="hover:cursor-pointer active:text-softOrange text-darkGrayishBlue "
            key={i}
          >
            {item}
          </a>
        ))}
        </div>

      </div>
      </div>
      {/* ------- */}
    </header>
  );
}

export default Header;

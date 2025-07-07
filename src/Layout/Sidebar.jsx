import { Link, useLocation, useNavigate } from "react-router-dom";

//import { useAuth } from "../context/AuthContext";
import ImagenLogo from "../assets/car-blue.svg";
import Profile from "../assets/Profile.svg";
import Seach from "../assets/Seach.svg";
import Shop from "../assets/Shop.svg";
import { useState } from "react";

function CustomLink({ to, label, ...props }) {
  const location = useLocation();
  const isHovered = location.pathname === to;
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <p
        {...props}
        className={`font-light mr-5 text-[14px] hover:font-normal ${
          isActive ? "font-normal" : isHovered ? "" : ""
        }`}
      >
        {label}
      </p>
    </Link>
  );
}

function Sidebar ({ navbar, onAbrirCarrito })  {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const modal = (num) => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1000);
  };
  const Home = () => {
    console.log("Click");
    navigate("/");
  };

  return (
    <>
      <div>
        <div
          onMouseEnter={() => setActive(false)}
          className={`h-[80px] select-none flex justify-between items-center px-10 transition-colors duration-300 ${
            navbar ? "" : "bg-[#ffffff] -translate-y-[48px]"
          }`}
        >
          <div className="flex">
            <CustomLink to="/" label="HOME" onMouseEnter={() => modal(1)} />

            <CustomLink to="" label="JOYERIA" onMouseEnter={() => modal(2)} />

            <CustomLink to="" label="SOBRE MK" onMouseEnter={() => modal(3)} />

            <CustomLink to="" label="LO NUEVO" onMouseEnter={() => modal(4)} />
          </div>

          <div className="flex justify-end">
            <button onClick={Home} className="w-1/6 hover:w-1/5">
              <img src={Seach} />
            </button>
            <button onClick={Home} className="w-1/6 mx-5 hover:w-1/5">
              <img src={Profile} />
            </button>
            <button onClick={onAbrirCarrito} className="w-1/6 hover:w-1/5">
              <img src={Shop} />
            </button>
          </div>
        </div>
        {active == true ? (
          <div
            className="full bg-black h-[200px] m-10"
            onMouseEnter={() => modal()}
          ></div>
        ) : null}
      </div>
    </>
  );
}

export default Sidebar;

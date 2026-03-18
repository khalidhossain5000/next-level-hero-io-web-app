import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { Link, NavLink } from "react-router";

const navLink = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Apps",
    path: "/apps",
  },{
    label: "My Installation",
    path: "/my-installation",
  },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative py-4 px-4 sm:px-6 lg:px-20 shadow-sm flex items-center justify-between">
      {/* logo */}
      <Link to="/">
        <div className="logo flex items-center gap-3">
          <img src={logo} alt="" className="w-10 h-10" />{" "}
          <p className="text-[16px] font-semibold bg-clip-text bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent">
            HERO.IO
          </p>
        </div>
      </Link>
      {/* nav menu */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-8">
          {navLink.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `text-[16px] font-semibold ${isActive ? "bg-clip-text bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent border-b-2 border-[#7441e8]" : "text-[#1a1a1a]"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </ul>
      </nav>
      {/* button */}
      <div className="hidden lg:block">
        <a
          href="https://github.com/khalidhossain5000"
          target="_blank"
          className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-xs text-[16px] font-semibold flex items-center gap-2 text-white"
        >
          <span>
            <FaGithub />
          </span>
          Contribute
        </a>
      </div>
      {/* mobile menu starts */}
      <div className="lg:hidden">
        {open ? (
          <button onClick={() => setOpen(false)}>
            <ImCross />
          </button>
        ) : (
          <button onClick={() => setOpen(true)}>
            <ImMenu className="text-2xl cursor-pointer" />
          </button>
        )}

        {/* nav item for mobile menu */}

        <div
          className={`flex flex-col justify-between items-start gap-1 fixed top-24 ${open ? "right-5" : "-right-60"} w-56  md:h-44 h-36  bg-slate-200 rounded-xl shadow-xl p-4  duration-1500`}
        >
          <ul className="flex flex-col">
            {navLink.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className="text-[16px] font-semibold bg-clip-text bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent"
              >
                {item.label}
              </NavLink>
            ))}
          </ul>

          <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 text-white">
            <span>
              <FaGithub />
            </span>
            Contribute
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavBar;

import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* large screens */}
      <div className="hidden lg:flex navbar md:px5 lg:px-10 bg-base-100">
        <div className="navbar-start">
          <ThemeSwitcher />
        </div>
        <div className="navbar-center">
          <ul className="hidden lg:flex gap-1">
            <li>
              <div className="btn btn-ghost">ABOUT US</div>
            </li>
            <li>
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  SERVICES
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-t-none rounded-b-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>ROOFING</a>
                  </li>
                  <li>
                    <a>RESTORATION</a>
                  </li>
                  <li>
                    <a></a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="btn btn-ghost">PROJECTS</div>
            </li>
            <li>
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  SERVICE AREA
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-t-none rounded-b-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>HOUSTON</a>
                  </li>
                  <li>
                    <a>DALLAS</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="btn btn-ghost">OFFERS</div>
            </li>
            <li>
              <div className="btn btn-ghost">BLOG</div>
            </li>
            <li>
              <div className="btn btn-ghost">FREE ESTIMATE</div>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="btn btn-ghost text-xl">Southern Roots</div>
        </div>
      </div>
      {/* navbar for small-medium screens */}
      <div className="flex lg:hidden navbar md:px5 bg-base-100">
        <div className="navbar-start">
          <div className="btn btn-ghost text-xl">Southern Roots</div>
        </div>
        <div className="flex gap-5 navbar-end">
          <ThemeSwitcher />
          <div className="flex lg:hidden">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <FaBars />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-t-none rounded-b-box z-[1] w-52 p-2"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

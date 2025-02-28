import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="navbar md:px5 lg:px-10 bg-base-100">
        <div className="navbar-start">
          <ThemeSwitcher />
        </div>
        <div className="navbar-center">
          <ul className="flex gap-1">
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
    </div>
  );
};

export default Navbar;

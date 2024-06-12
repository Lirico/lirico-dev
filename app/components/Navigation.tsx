"use client";
import Link from "next/link";
import fire from "../images/fire_background.webp";
import NavButton from "./navigation/NavButton";

const Navigation = () => {
  const linkStyles: string =
    "text-xl hover:text-orange-300 delay-300 transition duration-300";

  return (
    <>
      <div id="navigation" className="flex items-center gap-x-4 w-9/12 py-2">
        <div id="logo">
          <img className="w-20" src="nav_logo.png" alt="" />
        </div>
        <nav id="nav-menu" className="flex justify-between items-center w-full">
          <div className="flex gap-x-10">
            <div className="nav-item pb-3">
              <Link href="#" className={linkStyles}>
                Conóceme
              </Link>
            </div>
            <div className="nav-item pb-3">
              <Link href="#" className={linkStyles}>
                Blog
              </Link>
            </div>
            <div className="nav-item pb-3">
              <Link href="#" className={linkStyles}>
                Cursos
              </Link>
            </div>
          </div>
          <Link href="#">
            <NavButton />
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .nav-item:hover {
          background-image: url(${fire.src});
          background-size: 100% 40%;
          background-repeat: no-repeat;
          background-position: 0% 100%;
          animation: 0.3s easy-in fireFading;
        }

        @keyframes fireFading {
          0% {
            opacity: 0%;
          }
          100% {
            opacity: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;

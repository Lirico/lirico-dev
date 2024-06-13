"use client";
import Link from "next/link";
import fire from "../images/fire_background.webp";
import iceHandPointer from "../images/ice_hand_pointer.png";
import matchPointer from "../images/match_pointer.png";
import NavButton from "./navigation/NavButton";

const Navigation = () => {
  const linkStyles: string =
    "text-xl hover:text-orange-300 delay-300 transition duration-300";

  return (
    <>
      <div id="navigation" className="flex items-center gap-x-4 w-9/12 py-2">
        <div id="logo">
          <Link href="/">
            <img className="w-20" src="nav_logo.png" alt="" />
          </Link>
        </div>
        <nav id="nav-menu" className="flex justify-between items-center w-full">
          <div className="flex gap-x-10 mt-2">
            <div className="nav-item pb-3">
              <Link href="#" className={linkStyles}>
                <span>Conóceme</span>
              </Link>
            </div>
            <div className="nav-item pb-3">
              <Link href="#" className={linkStyles}>
                <span>Blog</span>
              </Link>
            </div>
            <div className="nav-item pb-3">
              <Link href="#" className={linkStyles}>
                <span>Cursos</span>
              </Link>
            </div>
          </div>
          <Link href="#">
            <NavButton />
          </Link>
        </nav>
      </div>

      <style jsx>{`
        img {
          cursor: url(${iceHandPointer.src}), auto;
        }
        span {
          cursor: url(${matchPointer.src}), auto;
          padding-top: 1rem;
        }
        .nav-item:hover {
          background-image: url(${fire.src});
          background-size: 100% 40%;
          background-repeat: no-repeat;
          background-position: 0% 100%;
          animation: 0.3s easy-in fireFading;
          cursor: url(${matchPointer.src}), auto;
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

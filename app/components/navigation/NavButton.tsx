import iceHandPointer from "../../images/ice_hand_pointer.png";

const NavButton = () => {
  return (
    <>
      <button className="text-xl bg-orange-600 hover:bg-orange-400 p-2 rounded transition duration-300">
        Coaching
      </button>

      <style jsx>{`
        button {
          cursor: url(${iceHandPointer.src}), auto;
        }
      `}</style>
    </>
  );
};

export default NavButton;

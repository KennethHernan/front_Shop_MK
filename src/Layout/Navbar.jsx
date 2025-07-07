
const Navbar = ({ navbar }) => {
  return (
    <>
        <div
          className={`flex flex-row bg-black  justify-center items-center transition-transform duration-300 ${
            navbar ? "pointer-events-none" : "-translate-y-[48px]"
          }`}
          >
          <p className="text-white text-[16px] my-3">
            ¡Mensaje informativo!
          </p>
        </div>
    </>
  );
};

export default Navbar;
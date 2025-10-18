import Sidebar from "../Layout/Sidebar";
import Header_Movile from "../Layout/Header_Movile";

function Header() {
  return (
    <div className="sticky top-0 left-0 z-30 w-full">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="block md:hidden">
        <Header_Movile />
      </div>
    </div>
  );
}

export default Header;
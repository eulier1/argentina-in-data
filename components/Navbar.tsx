import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark filter sticky top-0 bg-dark-900/80 backdrop-blur-xl" id="navbar">
    <div className="container">
      <Link href="#footer" className="nav-link filter">Who made this?</Link>
      </div>
    </nav>
  );
};

export default Navbar;

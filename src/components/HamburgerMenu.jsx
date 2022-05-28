import "./Header.css";

export default function HamburgerMenu({ open }) {
  return (
    <div className="HamburgerMenu" className={open? "HamburgerMenu open fixed":"HamburgerMenu"}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

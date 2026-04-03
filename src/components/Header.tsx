function Header() {
  return (
    <div className="h-17 flex justify-between items-center text-secondary">
      <div>
        <p className="text-h1">LOGO</p>
      </div>

      <div className="hidden sm:flex gap-5 md:gap-10 text-body md:text-h4">
        <p> About us</p>
        <p> Services </p>
        <p> Use Cases </p>
        <p> Pricing </p>
        <p> Blog </p>
      </div>
      <p className="text-h1 sm:hidden">MENU</p>
    </div>
  );
}

export default Header;

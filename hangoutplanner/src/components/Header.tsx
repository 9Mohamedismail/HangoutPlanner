function Header() {
  return (
    <div className="h-17 flex justify-between items-center text-secondary">
      <div>
        <p className="text-h1">LOGO</p>
      </div>

      <div className="flex gap-10 text-h4">
        <p> About us</p>
        <p> Services </p>
        <p> Use Cases </p>
        <p> Pricing </p>
        <p> Blog </p>
      </div>
    </div>
  );
}

export default Header;

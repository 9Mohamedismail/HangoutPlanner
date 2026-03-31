function Card() {
  return (
    <div className="w-150 h-50 p-12.5  border-secondary border rounded-[45px] bg-primary text-secondary flex shadow-[0_6px_0_0_#191A23]">
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-left font-bold text-h1">Event Details</p>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <p className="text-left font-bold text-h4">
          Tuesday, Apr 7 · 5:30 PM to 8:30 PM EDT
        </p>
        <p className="text-left font-bold text-h4">
          11 W 19th St 11 W 19th St · New York, NY
        </p>
      </div>
    </div>
  );
}

export default Card;

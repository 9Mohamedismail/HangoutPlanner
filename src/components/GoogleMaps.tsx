import CardShell from "./CardShell";

function GoogleMaps() {
  return (
    <CardShell className="md:h-full md:w-full sm:flex sm:gap-6 xl:gap-2">
      <div className="sm:flex sm:flex-1 flex-col justify-center ">
        <p className="text-left font-bold text-h3 sm:text-h2">Event Details</p>
      </div>
      <div className="sm:flex sm:flex-1 lg:flex-initial xl:flex-1 flex-col justify-center">
        <p className="text-left font-bold text-h4 lg:text-body xl:text-h4">
          Tuesday, Apr 7 · 5:30 PM to 8:30 PM EDT
        </p>
        <p className="text-left font-bold text-h4 lg:text-body xl:text-h4">
          11 W 19th St 11 W 19th St · New York, NY
        </p>
      </div>
    </CardShell>
  );
}

export default GoogleMaps;

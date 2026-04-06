import Attendees from "../components/Attendees";
import EventDetails from "../components/EventDetails";
import EventInfo from "../components/EventInfo";
import GoogleMaps from "../components/GoogleMaps";

function EventPage() {
  return (
    <div>
      <EventInfo />
      <div className="lg:grid lg:grid-cols-2 flex flex-col gap-6 mt-6 items-stretch">
        <div className="h-full">
          <GoogleMaps />
        </div>
        <div className="flex flex-col gap-4">
          <EventDetails />
          <Attendees />
        </div>
      </div>
    </div>
  );
}

export default EventPage;

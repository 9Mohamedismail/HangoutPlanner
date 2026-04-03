import CardShell from "./CardShell";

function Attendees() {
  return (
    <CardShell className="lg:h-50 sm:py-2 md:flex lg:block">
      <div className="md:flex md:flex-1 flex-col justify-center ">
        <p className="text-left font-bold text-h3 sm:text-h2">Attendees</p>
      </div>

      <div className="flex flex-1 justify-between md:items-end gap-2">
        <div className="flex flex-col items-center">
          <img
            src="https://secure.meetupstatic.com/photos/member/b/a/5/4/highres_249347700.jpeg?w=256"
            className="border rounded-full w-16 h-16 lg:w-18 lg:h-18"
          />
          <p className="text-left font-bold text-h4 sm:text-body">Justin</p>
          <p className="text-left text-[14px]">Member</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://secure.meetupstatic.com/photos/member/b/a/5/4/highres_249347700.jpeg?w=256"
            className="border rounded-full w-16 h-16 lg:w-18 lg:h-18"
          />
          <p className="text-left font-bold text-h4 sm:text-body">Justin</p>
          <p className="text-left text-[14px]">Member</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://secure.meetupstatic.com/photos/member/b/a/5/4/highres_249347700.jpeg?w=256"
            className="border rounded-full w-16 h-16 lg:w-18 lg:h-18"
          />
          <p className="text-left font-bold text-h4 sm:text-body">Justin</p>
          <p className="text-left text-[14px]">Member</p>
        </div>
        <div className="flex items-end">
          <p className="text-left text-body leading-7">See more</p>
        </div>
      </div>
    </CardShell>
  );
}

export default Attendees;

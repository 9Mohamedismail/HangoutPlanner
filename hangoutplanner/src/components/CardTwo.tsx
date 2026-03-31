function Card() {
  return (
    <div className="w-full h-50 px-12.5 py-2 border-secondary border rounded-[45px] bg-primary text-secondary shadow-[0_6px_0_0_#191A23]">
      <div className="">
        <p className="text-left font-bold text-h1">Attendees</p>
      </div>

      <div className="flex gap-4">
        <img src="https://secure.meetupstatic.com/photos/member/b/a/5/4/highres_249347700.jpeg?w=256" />
        <img src="https://secure.meetupstatic.com/photos/member/b/a/5/4/highres_249347700.jpeg?w=256" />
        <img src="https://secure.meetupstatic.com/photos/member/b/a/5/4/highres_249347700.jpeg?w=256" />
        <img src="https://secure.meetupstatic.com/photos/member/b/a/5/4/highres_249347700.jpeg?w=256" />
      </div>
    </div>
  );
}

export default Card;

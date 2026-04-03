function EventInfo() {
  return (
    <div className="grid lg:justify-between lg:grid-cols-2 lg:grid-rows-[auto_1fr] bg-[#FFFFFF] gap-4">
      <p className="order-1 lg:order-0 lg:col-start-1 lg:row-start-1 font-bold text-center lg:text-left text-h2 xl:text-h1">
        Navigating the digital landscape for success
      </p>

      <p className="leading-7 text-h4 order-3 lg:order-0 lg:col-start-1 lg:row-start-2">
        Join us for Coffee & Connection 45+ in Westchester, NY a welcoming
        meetup for women seeking friendship, community, and real conversation.
        Whether you are new in town, retired, newly single, or simply ready to
        connect, come as you are and enjoy a relaxed morning!
      </p>

      <div
        className="order-2
          lg:order-0 lg:col-start-2 lg:row-start-1 lg:row-span-2
          lg:flex lg:justify-end"
      >
        <img
          className="block w-full lg:max-w-150"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yY8lqbE2uDXCxlmAFQEXaP9OoXRB-E4j0g&s"
          alt=""
        />
      </div>
    </div>
  );
}

export default EventInfo;

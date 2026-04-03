function Form() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col flex-1 gap-6.25">
        <div className="flex flex-col gap-1.5">
          <label className="text-body">Name</label>
          <input
            type="text"
            placeholder="Event Title"
            className="h-14.75 w-full rounded-[14px] border border-secondary px-4.5 outline-none text-body"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex flex-col gap-1.5">
            <label className="text-body">Suggest a Physical Location?</label>

            <div className="flex flex-row gap-8.75">
              <label className="flex space-x-3.5">
                <input
                  type="radio"
                  className="h-7 w-7 rounded-[29px] border border-black px-4.5 outline-none"
                />
                <span className="text-body">Yes</span>
              </label>

              <label className="flex space-x-3.5">
                <input
                  type="radio"
                  className="h-7 w-7 rounded-[29px] border border-black px-4.5 outline-none"
                />
                <span className="text-body">No</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-body">Enter a place</label>
          <input
            type="text "
            placeholder="(e.g., 'Discord' or 'Mike’s House')"
            className="h-14.75 w-full rounded-[14px] border border-black px-4.5 outline-none text-body"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-body">Event Date</label>
          <input
            type="text"
            placeholder="Event Date"
            className="h-14.75 w-full rounded-[14px] border border-secondary px-4.5 outline-none text-body"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-body">Event Time</label>
          <input
            type="text"
            placeholder="Event Time"
            className="h-14.75 w-full rounded-[14px] border border-secondary px-4.5 outline-none text-body"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-body">Event Description</label>
          <textarea
            placeholder="Event Description"
            className="min-h-47.5 w-full rounded-[14px] border border-black px-4.5 py-4.5 outline-none resize-none text-body"
          />
        </div>
      </div>

      <div className="flex flex-1">
        <img
          className="hidden lg:block w-full lg:max-w-150"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yY8lqbE2uDXCxlmAFQEXaP9OoXRB-E4j0g&s"
          alt=""
        />
      </div>
    </div>
  );
}

export default Form;

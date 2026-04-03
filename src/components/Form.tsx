function Form() {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-1.5">
          <label className="text-body">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="h-14.75 w-full rounded-[14px] border border-secondary px-4.5 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-body">Email*</label>
          <input
            type="email"
            placeholder="Email"
            className="h-14.75 w-full rounded-[14px] border border-black px-4.5 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-body">Message*</label>
          <textarea
            placeholder="Message"
            className="min-h-47.5 w-full rounded-[14px] border border-black px-[18px] py-[18px] outline-none resize-none"
          />
        </div>
      </div>

      <div className="flex flex-1">
        <img
          className="block w-full lg:max-w-150"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yY8lqbE2uDXCxlmAFQEXaP9OoXRB-E4j0g&s"
          alt=""
        />
      </div>
    </div>
  );
}

export default Form;

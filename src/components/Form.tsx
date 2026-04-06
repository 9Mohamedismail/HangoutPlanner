import FormInputShell from "./FormInputShell";

function Form() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col flex-1 gap-6.25">
        <FormInputShell
          label="Name"
          inputType="text"
          placeholder="Event Title"
        />

        <div className="flex flex-col gap-1.5">
          <label className="text-body">Suggest a Physical Location?</label>

          <div className="flex flex-row gap-8.75">
            <label className="flex items-center space-x-3.5">
              <input
                type="radio"
                className="h-7 w-7 border border-black outline-none bg-[#FFFFFF]"
                name="physicalLocation"
              />
              <span className="text-body">Yes</span>
            </label>

            <label className="flex items-center space-x-3.5">
              <input
                type="radio"
                className="h-7 w-7 border border-black outline-none bg-[#FFFFFF]"
                name="physicalLocation"
              />
              <span className="text-body">No</span>
            </label>
          </div>
        </div>

        <FormInputShell
          label="Enter a place"
          inputType="text"
          placeholder="(e.g., 'Discord' or 'Mike’s House')"
        />

        <FormInputShell
          label="Event Date"
          inputType="text"
          placeholder="Event Date"
        />

        <FormInputShell
          label="Event Time"
          inputType="text"
          placeholder="Event Time"
        />

        <FormInputShell
          label="Event Description"
          placeholder="Event Description"
          multiline
        />
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

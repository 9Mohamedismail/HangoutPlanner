type FormInputProps = {
  label: string;
  inputType?: string;
  placeholder: string;
  className?: string;
  multiline?: boolean;
};

function FormInputShell({
  label,
  inputType = "text",
  placeholder,
  className = "",
  multiline = false,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-body">{label}</label>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          className={`min-h-47.5 resize-none w-full rounded-[14px] border border-secondary p-4.5 outline-none text-body bg-[#FFFFFF] ${className}`}
        />
      ) : (
        <input
          type={inputType}
          placeholder={placeholder}
          className={`h-14.75 w-full rounded-[14px] border border-secondary p-4.5 outline-none text-body bg-[#FFFFFF] ${className}`}
        />
      )}
    </div>
  );
}

export default FormInputShell;

const Input = ({
  placeholderName,
  longInput,
  handleChange,
  inputType,
  name,
  value,
  label,
}) => {
  return (
    <div className={`relative ${longInput} max-w-md flex-1 font-roboto`}>
      {/* label for input */}
      <span className="text-md absolute -top-3 left-5 bg-white px-2 font-bold text-primaryBlack">
        {label} <b className=" font-extrabold text-red-700">*</b>
      </span>

      {/* {input } */}
      <input
        type={inputType}
        placeholder={placeholderName}
        required
        value={value}
        name={name}
        onChange={(e) => handleChange(e)}
        className="text-md w-full rounded-xl border-2 border-zinc-500 px-6 py-4 font-roboto text-xl tracking-wide text-primaryBlack outline-slate-700 placeholder:text-gray-400 "
      />
    </div>
  );
};

export default Input;

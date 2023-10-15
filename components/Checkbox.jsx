const Checkbox = ({ gender, name, handleChange, checkbox }) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border border-gray-500 px-4 py-2 ${
        checkbox
          ? " outline outline-2 outline-offset-4 outline-primaryBlack"
          : ""
      }`}
    >
      <input
        type="checkbox"
        className="checkbox checkbox-lg"
        id="gender"
        name={name}
        checked={checkbox}
        onChange={handleChange}
      />
      <label
        htmlFor="gender"
        className={`font-roboto text-xl font-normal capitalize text-primaryBlack`}
      >
        {gender}
      </label>
    </div>
  );
};

export default Checkbox;

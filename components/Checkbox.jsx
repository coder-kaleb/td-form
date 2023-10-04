const Checkbox = ({ gender, name }) => {
  return (
    <div className="flex gap-2">
      <input type="checkbox" className="checkbox" id="gender" name={name} />
      <label htmlFor="gender">{gender}</label>
    </div>
  );
};

export default Checkbox;

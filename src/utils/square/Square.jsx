const Square = ({ value, handleOnClick }) => {
  return (
    <button
      className="border border-slate-700 size-16 m-1 leading-9 text-lg"
      onClick={handleOnClick}
    >
      {value}
    </button>
  );
};

export default Square;

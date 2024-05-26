const Square = ({ value, handleOnClick }) => {
  return (
    <button
      className="border border-slate-700 size-16 m-2 leading-9 text-xl bg-yellow-100 rounded font-bold"
      onClick={handleOnClick}
    >
      {value}
    </button>
  );
};

export default Square;

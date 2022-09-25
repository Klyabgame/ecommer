export const Button = ({ children, className }) => {
  return (
    <button
      type="submit"
      className={`w-full bg-blue-500 px-4 py-1 mt-6 text-lg text-white cursor-pointer font-bold rounded hover:bg-blue-600 transition-all ${className}}`}
    >
      {children}
    </button>
  );
};

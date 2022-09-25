
export const Button = ({children}) => {
  return (
    <button
    type="submit"
    className="w-full bg-blue-500 px-4 py-1 text-lg text-white cursor-pointer font-bold rounded hover:bg-blue-600 transition-all disabled:bg-slate-300"
  >
    {children}
  </button>
  )
}

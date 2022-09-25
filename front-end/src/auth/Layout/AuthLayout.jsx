export const AuthLayout = ({children}) => {
  return (
    <div className="animate__animated animate__fadeIn animate__faster h-screen flex justify-center items-center bg-gray-50 p-3 md:p-0">
      <div className="max-w-sm w-full md:max-w-md bg-white mx-auto shadow rounded-lg">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

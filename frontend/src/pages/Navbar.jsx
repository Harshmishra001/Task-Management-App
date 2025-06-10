
// export default Navbar
const Navbar = () => {
  return (
    <nav className="bg-sky-950 p-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-slate-50 text-2xl sm:text-4xl font-bold font-serif text-center sm:text-left">
          Task Management App
        </div>
        <div className="space-x-6 mt-4 sm:mt-0 text-center">
          <a
            href="/signup"
            className="text-slate-50 font-serif text-lg sm:text-xl hover:underline"
          >
            Signup
          </a>
          <a
            href="/signin"
            className="text-slate-50 font-serif text-lg sm:text-xl hover:underline"
          >
            Signin
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

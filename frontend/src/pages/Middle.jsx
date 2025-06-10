// import React from "react";

// const Middle =()=>{
//     const [isDropdownVisible, setDropdownVisible] = React.useState(false);
//     const toggleDropdown = () => {
//       setDropdownVisible(!isDropdownVisible);
//     };
//     return (
//         <div className="flex flex-1 justify-between ">
//         <div className="flex-1 bg-zinc-200 px-8">
//           <h1 className="text-6xl font-serif text-sky-950 pt-10">
//           Organize
//           </h1>
//           <h1 className="text-6xl font-serif text-sky-950">
//           Your Tasks & Goals
//           </h1>
//           <p className="text-2xl text-gray-700 font-serif pt-6">
//           Stay productive, track progress, and get things done
//           </p><br></br>
//           <div className="relative">
//             <button
//               className="bg-sky-950 text-white font-serif py-3 px-6 rounded-full text-lg hover:bg-sky-800"
//               onClick={toggleDropdown}
//             >
//               Start your journey
//             </button>
//             {isDropdownVisible && (
//               <ul className="border border-gray-300 mt-2 rounded-md shadow-lg w-48">
//                 <a href="/signup">
//                 <li
//                   className="py-2 px-4 text-sky-950 font-mono hover:bg-sky-950 hover:text-slate-50 cursor-pointer" 
//                 >
//                   Signup
//                 </li>
//                 </a>
//                 <a href="signin">
//                 <li
//                   className="py-2 px-4 text-sky-950 font-mono hover:bg-sky-950 hover:text-slate-50 cursor-pointer"
//                 >
//                   Signin
//                 </li>
//                 </a>
//               </ul>
//             )}
//           </div>
//         </div>
//         <div className="flex-1 bg-zinc-200">
//           <img
//             src="https://cdn.imgbin.com/3/21/1/imgbin-laptop-coffee-paper-notebook-writing-laptop-ySpH1urY8VP8Ya2unJaQ7jVfZ.jpg"
//             alt="Blog related"
//             className="max-w-full h-full"
//           />
//         </div>
//       </div>
//     )
// }

// export default Middle
import React from "react";

const Middle = () => {
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="flex flex-col md:flex-row flex-1 bg-zinc-200">
      {/* Left Section */}
      <div className="flex-1 px-6 sm:px-8 py-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-sky-950">
          Organize
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-sky-950">
          Your Tasks & Goals
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-serif pt-4 sm:pt-6">
          Stay productive, track progress, and get things done
        </p>

        <div className="relative mt-6">
          <button
            className="bg-sky-950 text-white font-serif py-3 px-6 rounded-full text-lg hover:bg-sky-800"
            onClick={toggleDropdown}
          >
            Start your journey
          </button>

          {isDropdownVisible && (
            <ul className="border border-gray-300 mt-2 rounded-md shadow-lg w-48 bg-white">
              <a href="/signup">
                <li className="py-2 px-4 text-sky-950 font-mono hover:bg-sky-950 hover:text-white cursor-pointer">
                  Signup
                </li>
              </a>
              <a href="/signin">
                <li className="py-2 px-4 text-sky-950 font-mono hover:bg-sky-950 hover:text-white cursor-pointer">
                  Signin
                </li>
              </a>
            </ul>
          )}
        </div>
      </div>

      {/* Right Section - Hidden on small screens */}
      <div className="hidden md:flex flex-1">
        <img
          src="https://cdn.imgbin.com/3/21/1/imgbin-laptop-coffee-paper-notebook-writing-laptop-ySpH1urY8VP8Ya2unJaQ7jVfZ.jpg"
          alt="Blog related"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Middle;

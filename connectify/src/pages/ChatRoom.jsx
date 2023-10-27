// // import React from "react";
// import { AiOutlineSend } from "react-icons/ai";
// import { GrAttachment } from "react-icons/gr";
// function ChatTemplate() {
//   return (
//     <div>
//       <div className="container mx-auto">
//         <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
//           <div className="border-r border-gray-300 lg:col-span-1">
//             <div className="mx-3 my-3">
//               <div className="relative text-gray-600">
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
//                 <input
//                   type="search"
//                   className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
//                   name="search"
//                   placeholder="Search"
//                   required
//                 />
//               </div>
//             </div>

//             <ul className="overflow-auto h-[32rem]">
//               <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
//               <li>
//                 <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
//                   <img
//                     className="object-cover w-10 h-10 rounded-full"
//                     src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
//                     alt="username"
//                   />
//                   <div className="w-full pb-2">
//                     <div className="flex justify-between">
//                       <span className="block ml-2 font-semibold text-gray-600">
//                         Jhon Doe
//                       </span>
//                       <span className="block ml-2 text-sm text-gray-600">
//                         25 minutes
//                       </span>
//                     </div>
//                     <span className="block ml-2 text-sm text-gray-600">
//                       bye
//                     </span>
//                   </div>
//                 </a>
//                 <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
//                   <img
//                     className="object-cover w-10 h-10 rounded-full"
//                     src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
//                     alt="username"
//                   />
//                   <div className="w-full pb-2">
//                     <div className="flex justify-between">
//                       <span className="block ml-2 font-semibold text-gray-600">
//                         Thanisha
//                       </span>
//                       <span className="block ml-2 text-sm text-gray-600">
//                         50 minutes
//                       </span>
//                     </div>
//                     <span className="block ml-2 text-sm text-gray-600">
//                       Hellooo
//                     </span>
//                   </div>
//                 </a>
//                 <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
//                   <img
//                     className="object-cover w-10 h-10 rounded-full"
//                     src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
//                     alt="username"
//                   />

//                   {/* // */}
//                   <div className="w-full pb-2">
//                     <div className="flex justify-between">
//                       <span className="block ml-2 font-semibold text-gray-600">
//                         Janhavi
//                       </span>
//                       <span className="block ml-2 text-sm text-gray-600">
//                         50 minutes
//                       </span>
//                     </div>
//                     <span className="block ml-2 text-sm text-gray-600">
//                       Hellooo
//                     </span>
//                   </div>
//                 </a>
//                 <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
//                   <img
//                     className="object-cover w-10 h-10 rounded-full"
//                     src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
//                     alt="username"
//                   />
//                   {/* // */}
//                   <div className="w-full pb-2">
//                     <div className="flex justify-between">
//                       <span className="block ml-2 font-semibold text-gray-600">
//                         Vansh
//                       </span>
//                       <span className="block ml-2 text-sm text-gray-600">
//                         6 hours
//                       </span>
//                     </div>
//                     <span className="block ml-2 text-sm text-gray-600">
//                       Good Morning
//                     </span>
//                   </div>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="-span-2 lg:block">
//             <div className="w-full">
//               <div className="relative flex items-center p-3 border-b border-gray-300">
//                 <img
//                   className="object-cover w-10 h-10 rounded-full"
//                   src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
//                   alt="username"
//                 />
//                 <span className="block ml-2 font-bold text-gray-600">
//                   Thanisha
//                 </span>
//                 <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
//               </div>
//               <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
//                 <ul className="space-y-2">
//                   <li className="flex justify-start">
//                     <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
//                       <span className="block">Hi</span>
//                     </div>
//                   </li>
//                   <li className="flex justify-end">
//                     <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
//                       <span className="block">Hiiii</span>
//                     </div>
//                   </li>
//                   <li className="flex justify-end">
//                     <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
//                       <span className="block">how are you?</span>
//                     </div>
//                   </li>
//                   <li className="flex justify-start">
//                     <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
//                       <span className="block">
//                         Lorem ipsum dolor sit, amet consectetur adipisicing
//                         elit.
//                       </span>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//               <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
//                 <button>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6 text-gray-500"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   ></svg>
//                 </button>
//                 <button>
//                   <GrAttachment size={24} />
//                 </button>

//                 <input
//                   type="text"
//                   placeholder="Message"
//                   className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
//                   name="message"
//                   required
//                 />
//                 <button>
//                   <AiOutlineSend size={24} />
//                 </button>
//                 <button type="submit">
//                   <svg
//                     className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   ></svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatTemplate;
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";

function ChatTemplate() {
  const [message, setMessage] = useState(""); // State for the message input
  const [messages, setMessages] = useState([]); // State to store sent messages

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      // Check if the message is not empty
      setMessages([...messages, { text: message, sentBy: "you" }]); // Add the message to the messages array
      setMessage(""); // Clear the input field
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
          <div className="border-r border-gray-300 lg:col-span-1">
            <div className="mx-3 my-3">
              <div className="relative text-gray-600">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
                <input
                  type="search"
                  className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
                  name="search"
                  placeholder="Search"
                  required
                />
              </div>
            </div>
            <ul className="overflow-auto h-[32rem]">
              <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
              <li>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                    alt="username"
                  />

                  {/* // */}
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Tanu
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        50 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      Hellooo
                    </span>
                  </div>
                </a>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                    alt="username"
                  />

                  {/* // */}
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        John Doe
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        50 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      Hellooo
                    </span>
                  </div>
                </a>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                    alt="username"
                  />

                  {/* // */}
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Janhavi
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        50 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      Hellooo
                    </span>
                  </div>
                </a>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Vansh
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        50 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      Hellooo
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="-span-2 lg:block">
            <div className="w-full">
              <div className="relative flex items-center p-3 border-b border-gray-300">
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
                  alt="username"
                />
                <span className="block ml-2 font-bold text-gray-600">
                  Thanisha
                </span>
                <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
              </div>
              <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
                <ul className="space-y-2">
                  {messages.map((msg, index) => (
                    <li
                      key={index}
                      className={`flex justify-${
                        msg.sentBy === "you" ? "end" : "start"
                      }`}
                    >
                      <div
                        className={`relative max-w-xl px-4 py-2 text-gray-700 ${
                          msg.sentBy === "you" ? "bg-gray-100" : ""
                        } rounded shadow`}
                      >
                        <span className="block">{msg.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  ></svg>
                </button>
                <button className="mr-[0.5rem]">
                  <GrAttachment size={22} />
                </button>
                <input
                  type="text"
                  placeholder="Message"
                  className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  required
                />
                <button onClick={handleSendClick}>
                  <AiOutlineSend size={24} />
                </button>
                <button type="submit">
                  <svg
                    className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  ></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatTemplate;

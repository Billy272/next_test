import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Page() {
  return (
    <div className="bg-white p-4 w-screen h-screen flex justify-start items-center flex-col">
      <div>
        <h1 className="text-xl font-semibold text-black flex justify-center items-center flex-row">
          <FaArrowLeft className="mr-2 cursor-pointer" />
          Friday, February 28, 2025
          <FaArrowRight className="ml-2 cursor-pointer" />
        </h1>
      </div>
      <div className="w-full flex justify-center items-start flex-col">
        <h2 className="text-black font-semibold p-4">Today's Meetings</h2>
        <div className="w-full flex justify-start items-center flex-col md:flex-row">
          <div className="w-[20rem] h-auto bg-green-200 p-4 rounded-lg ml-4 mb-4 md:mb-0">
            <h2 className="text-black font-semibold mb-2">Faiba 4G Meeting</h2>
            <p className="text-black mb-2">8:00 AM - 9:00 AM</p>
            <p className="text-black">4th Floor - B/Room 1</p>
          </div>
          <div className="w-[20rem] h-auto bg-blue-200 p-4 rounded-lg ml-4 mb-4 md:mb-0">
            <h2 className="text-black font-semibold mb-2">AdGroup Limited Meeting</h2>
            <p className="text-black mb-2">10:00 AM - 11:00 AM</p>
            <p className="text-black">4th Floor - B/Room 8</p>
          </div>
          <div className="w-[20rem] h-auto bg-yellow-200 p-4 rounded-lg ml-4 mb-4 md:mb-0">
            <h2 className="text-black font-semibold mb-2">4G Support Meeting</h2>
            <p className="text-black mb-2">2:00 PM - 3:00 PM</p>
            <p className="text-black">4th Floor - B/Room 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
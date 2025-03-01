export default function NavBar() {
    return (
        <div className="bg-blue-500 p-8 w-screen h-16 flex justify-between items-center">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-white text-medium font-semibold">AdGroup Limited</h1>
                <h2 className="text-white">Meeting Room Booking System</h2>
            </div>
            <div className="flex justify-center items-center flex-row">
                <button className="text-white mr-4">Help</button>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-lg ml-4 ">Login</button>
            </div>
        </div>
    );
}
export default function Sidebar(){
    return (
        <div className="fixed top-0 left-0 h-screen w-64 text-black p-6">
          <h2 className="text-2xl font-bold mb-4">2wei</h2>
          <ul>
            <li className="mb-2 hover:bg-gray-200 rounded-md transition-colors duration-300">
              <a href="#" className="block px-4 py-2 hover:text-gray-800">
                Home
              </a>
            </li>
            <li className="mb-2 hover:bg-gray-200 rounded-md transition-colors duration-300">
              <a href="#" className="block px-4 py-2 hover:text-gray-800">
                About
              </a>
            </li>
            <li className="mb-2 hover:bg-gray-200 rounded-md transition-colors duration-300">
              <a href="#" className="block px-4 py-2 hover:text-gray-800">
                Contact
              </a>
            </li>
          </ul>
        </div>
      );
}
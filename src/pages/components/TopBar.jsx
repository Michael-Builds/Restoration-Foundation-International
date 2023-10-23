import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const TopBar = () => {
    return (
        <div className="top-bar absolute bg-white h-16 w-full top-0 left-0 z-3 border-b border-opacity-30">
            <div className="container mx-auto">
                <div className="flex lg:flex justify-between items-center">
                    <div className="flex lg:w-1/2  items-center justify-start">
                        <div className="text flex items-center justify-center flex-row h-16 px-10 text-center gap-2 first:-ml-8 ">
                            <FaLocationDot className="text-yellow-500 h-4 w-4 mr-1 hover:text-yellow-500 cursor-pointer" />
                            <p className=" text-sm my-0 font-quicksand">Ho, Volta Region</p>
                        </div>

                        <div className="text flex items-center justify-center flex-row h-16 px-10 text-center gap-2 last:border-l-0">
                            <MdEmail className="text-yellow-500 h-4 w-4 mr-1 hover:text-yellow-500 cursor-pointer" />
                            <p className=" text-sm my-0 font-quicksand">info@michaelkabanda.com</p>
                        </div>
                    </div>
                    <div className=" lg:w-1/2 flex items-center justify-end">
                        <div className="flex items-center h-16 text-0 justify-end gap-2">
                            <FaFacebook className="h-4 w-4 text-yellow-500  mr-1 cursor-pointer hover:text-gray-500" />
                            <FaInstagram className="h-4 w-4 text-yellow-500  mr-1 cursor-pointer hover:text-gray-500" />
                            <FaTwitter className="h-4 w-4 text-yellow-500 mr-1 cursor-pointer hover:text-gray-500" />
                            <FaLinkedin className="h-4 w-4 text-yellow-500 mr-1 first: mr-8 cursor-pointer hover:text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

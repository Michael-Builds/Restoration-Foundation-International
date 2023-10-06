import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const ToolBar = () => {
    return (
        <div className="absolute bg-white h-16 w-full top-0 left-0 z-3 border-b border-opacity-30">
            <div className="container mx-auto">
                <div className="flex lg:flex justify-between items-center">
                    <div className="flex lg:w-1/2  items-center justify-start">
                        <div className="text flex items-center justify-center flex-row h-16 px-10 text-center gap-2 first:-ml-16 ">
                            <FiPhone className="text-gray-500 h-5 w-5 mr-1 hover:text-yellow-500 cursor-pointer" />
                            <p className=" text-16 my-0">+233 54 4541 587</p>
                        </div>

                        <div className="text flex items-center justify-center flex-row h-16 px-10 text-center gap-2 last:border-l-0">
                            <MdEmail className="text-gray-500 h-5 w-5 mr-1 hover:text-yellow-500 cursor-pointer" />
                            <p className=" text-16 my-0">info@michaelkabanda.com</p>
                        </div>
                    </div>
                    <div className=" lg:w-1/2 flex items-center justify-end">
                        <div className="flex items-center h-16 text-0 justify-end gap-2">
                            <FaFacebook className="h-5 w-5 text-gray-500  mr-1 cursor-pointer hover:text-yellow-500" />
                            <FaInstagram className="h-5 w-5 text-gray-500  mr-1 cursor-pointer hover:text-yellow-500" />
                            <FaTwitter className="h-5 w-5 text-gray-500 mr-1 cursor-pointer hover:text-yellow-500" />
                            <FaLinkedin className="h-5 w-5 text-gray-500 mr-1 first:-mr-8 cursor-pointer hover:text-yellow-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolBar;

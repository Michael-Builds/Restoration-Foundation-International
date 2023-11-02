import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const TopBar = () => {
    return (
        // <div className="top-bar absolute bg-white h-16 w-full top-0 left-0 z-3 border-b border-opacity-30">
        //     <div className="container mx-auto">
        //         <div className="flex lg:flex justify-between items-center">
        //             <div className="flex lg:w-1/2  items-center justify-start">
        //                 <div className="text flex items-center justify-center flex-row h-16 px-10 text-center gap-2 first:-ml-8 ">
        //                     <FaLocationDot className="text-yellow-500 h-4 w-4 mr-1 hover:text-yellow-500 cursor-pointer" />
        //                     <p className=" text-sm my-0 font-quicksand">Ho, Volta Region</p>
        //                 </div>

        //                 <div className="text flex items-center justify-center flex-row h-16 px-10 text-center gap-2 last:border-l-0">
        //                     <MdEmail className="text-yellow-500 h-4 w-4 mr-1 hover:text-yellow-500 cursor-pointer" />
        //                     <p className=" text-sm my-0 font-quicksand">info@michaelkabanda.com</p>
        //                 </div>
        //             </div>
        //             <div className=" lg:w-1/2 flex items-center justify-end">
        //                 <div className="flex items-center h-16 text-0 justify-end gap-2">
        //                     <FaFacebook className="h-4 w-4 text-yellow-500  mr-1 cursor-pointer hover:text-gray-500" />
        //                     <FaInstagram className="h-4 w-4 text-yellow-500  mr-1 cursor-pointer hover:text-gray-500" />
        //                     <FaTwitter className="h-4 w-4 text-yellow-500 mr-1 cursor-pointer hover:text-gray-500" />
        //                     <FaLinkedin className="h-4 w-4 text-yellow-500 mr-1 first: mr-8 cursor-pointer hover:text-gray-500" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="absolute bg-gray-100 md:h-16 w-full  top-0 left-0 z-3 border-b border-opacity-30">
        <div className="container md:mx-auto">
            <div className="flex flex-col items-center md:flex-row md:justify-between">

                <div className="w-full md:w-1/2 md:mt-0 md:mb-0 -mb-6 md:flex">
                    <div className="flex flex-col md:flex-row gap-2 items-center justify-start">
                        <div className="flex ike one items-center -ml-24 md:ml-0 md:pt-0 pt-1 align-center md:justify-center md:flex-row md:h-16 -mb-2 px-10 text-center gap-2 md:first:-ml-8">
                            <FaPhone className="text-gold md:h-4 md:w-4 h-3 w-3 mr-1" />
                            <p className="text-sm top md:my-0 font-quicksand cursor-pointer hover:text-gold">+233 24 263 2692</p>
                        </div>
                        <div className="text two flex items-center md:ml-0 -ml-4 md:mt-0 mt-1 justify-center flex-row md:h-16 px-10 text-center gap-2 last:border-l-0">
                            <MdEmail className="text-gold md:h-4 md:w-4 w-3 h-3 mr-1" />
                            <p className="text-sm top my-0 font-quicksand hover:text-gold cursor-pointer">info@timanipropertiesgh.com</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 md:mt-0 -mb-3">
                    <div className="flex three items-center md:justify-end md:mt-0 mt-1 md:ml-0 -ml-1 justify-center">
                        <div className="flex items-center md:h-16 h-16 text-0 justify-end gap-2">
                            <IoLocationSharp className="h-4 w-4 text-gold" />
                            <p className='font-quicksand top text-sm text-12 hover:text-gold cursor-pointer'>Box WY 918 - Kwabenya - Accra.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
        
    );
};

export default TopBar;

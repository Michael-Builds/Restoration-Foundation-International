import { IoIosArrowForward } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { MdAttachEmail, MdOutlinePhoneMissed } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import swal from "sweetalert";
import React from "react";

const Footer = () => {

    const [newletterInfo, setNewsLetterInfo] = React.useState({
        email: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewsLetterInfo((prevNewsLetter) => ({
            ...prevNewsLetter,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setNewsLetterInfo({
            email: "",
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        swal("Restoration Foundation", "Subscription Successful", "success")
        handleClear();
    }

    // Create an array of link texts
    const linkData = [
        { text: "About Us", href: "/about" },
        { text: "Blog Post", href: "/blog" },
        { text: "Donners", href: "/donate" },
        { text: "Documentation", href: "/document" },
    ];
    const usefulData = [
        { text: "Privacy Policy", href: "/about" },
        { text: "Terms of use", href: "/blog" },
        { text: "Cookies", href: "/donate" },
        { text: "Help Center", href: "/document" },
    ];

    // Function to get the current year
    const getCurrentYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
    };

    return (
        <section className='mt-16 justify-center items-center'>
            <div className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between mt-10 gap-6">
                    {/* Left Section */}
                    <div className="w-1/3 ">
                        <div className='border-l-4 border-yellow-500 pl-4'>
                            <h2 className='text-3xl font-yeseva mb-8 font-yeseva text-yellow-500 tracking-wide'>Our Head Office</h2>
                        </div>
                        <div className='block items-center'>
                            <p className=" flex items-center font-quicksand font-medium pb-4 text-white">
                                <IoLocationSharp className='mr-4 h-6 w-6' />
                                Ho, Volta Region
                            </p>
                            <p className=" flex items-center  font-quicksand font-medium pb-4 text-white">
                                <MdOutlinePhoneMissed className='mr-4 h-6 w-6' />
                                +233 54 454 1587
                            </p>
                            <p className=" flex items-center font-quicksand font-medium pb-4 text-white">
                                <MdAttachEmail className='mr-4 h-6 w-6' />
                                restoration@gmail.com
                            </p>
                        </div>
                        <div className='flex items-center text-white gap-6'>
                            <a href='#' className='p-2 border border-yellow-500 rounded-full inline-block'>
                                <BsFacebook className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>

                            <a href='#' className='p-2 border border-yellow-500 rounded-full inline-block'>
                                <BsInstagram className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>
                            <a href='#' className='p-2 border border-yellow-500 rounded-full inline-block'>
                                <BsLinkedin className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>
                            <a href='#' className='p-2 border border-yellow-500 rounded-full inline-block'>
                                <FaTiktok className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>
                        </div>
                    </div>
                    {/* Center Section */}
                    <div className="w-1/3 text-center">
                        <div className='border-l-4 border-yellow-500 pl-4'>
                            <h2 className='text-3xl font-yeseva mb-8 font-yeseva text-yellow-500 tracking-wide text-left'>Popular Links</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4 ml-8">
                            {linkData.map((data, index) => (
                                <a key={index} href={data.href} className="font-quicksand flex items-center text-white text-md hover:text-yellow-500 font-medium text-left">
                                    <IoIosArrowForward className='mr-4' />
                                    {data.text}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Center Section */}
                    <div className="w-1/3 text-center">
                        <div className='border-l-4 border-yellow-500 pl-4'>
                            <h2 className='text-3xl font-yeseva text-yellow-500 mb-8 font-yeseva tracking-wide text-left'>Useful Links</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4 ml-8">
                            {usefulData.map((data, index) => (
                                <a key={index} href={data.href} className="font-quicksand flex items-center  text-white text-md hover:text-yellow-500 font-medium text-left">
                                    <IoIosArrowForward className='mr-4' />
                                    {data.text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-1/3 text-right">
                        <div className='border-l-4 border-yellow-500 pl-4'>
                            <h2 className='text-3xl font-yeseva mb-8 font-yeseva text-yellow-500 tracking-wide text-left'>Newsletter</h2>
                        </div>

                        <form onSubmit={handleSave}>
                            <input
                                className='p-4 border border-yellow-500 rounded-md border-b-4 focus:outline-none font-quicksand w-72'
                                placeholder='Email Adress'
                                type='email'
                                required
                                name='email'
                                value={newletterInfo.email}
                                onChange={handleInputChange}
                            />
                            <button
                                type='submit'
                                className='p-4 bg-white mt-4 w-72 font-quicksand rounded-md text-center align-center justify-center items-center'
                            >
                                Submit
                            </button>

                        </form>

                    </div>
                </div>
                <div className='justify-center items-center text-center mt-16 mb-6'>
                    <p className='font-medium font-quicksand text-white'
                    >© {getCurrentYear()} <span className='text-yellow-500'>Restoration Foundation</span>. Developed by <span className='font-bold text-lg'>Michael Kabanda</span> </p>

                </div>
            </div>

        </section>
    );
}

export default Footer;

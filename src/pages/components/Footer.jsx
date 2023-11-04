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
        swal("Restoration Foundation International", "Subscription Successful", "success")
        handleClear();
    }

    // Create an array of link texts
    const linkData = [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
        { text: "Causes", href: "/causes" },
        { text: "Events", href: "/recent" },
        { text: "Contact Us", href: "/contact" },
        { text: "Blog", href: "/blog" },
    ];

    // Function to get the current year
    const getCurrentYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
    };

    return (
        <section className='justify-center  items-center'>
            <div className="bg-blue p-4 ">
                <div className="container md:ml-0 ml-4 md:mx-auto md:flex md:justify-between md:mt-10 md:gap-6">
                    {/* Center Section */}
                    <div className="md:w-1/3 ">
                        <div className='border-l-4 pl-3 border-gold md:pl-4 md:mt-0 mt-6'>
                            <h2 className='text-2xl font-yeseva mb-8 font-yeseva tracking-wide text-white'>About Us</h2>
                        </div>
                        <div >
                            <p className=" font-quicksand md:text-md text-sm pb-4 p-2 text-white">
                                Restoration Foundation International is a Christian non-profit, charitable and humanitarian
                                organization incorporated in Ghana in 2006 with representatives in USA, Canada, UK and Germany
                            </p>
                        </div>
                    </div>

                    {/* Center Section */}
                    <div className="md:w-1/3 text-center">
                        <div className='border-l-4 pl-3 border-gold md:mt-0 mt-6 md:pl-4'>
                            <h2 className='text-2xl font-yeseva mb-8 font-yeseva text-white tracking-wide text-left'>Popular Links</h2>
                        </div>
                        <div className="grid md:grid-cols-1 grid-cols-2 gap-4 md:text-md text-sm md:ml-8">
                            {linkData.map((data, index) => (
                                <a key={index} href={data.href} className="font-quicksand flex items-center text-white text-md hover:text-yellow-500  text-left">
                                    <IoIosArrowForward className='mr-4' />
                                    {data.text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Left Section */}
                    <div className="md:w-1/3 ">
                        <div className='border-l-4 pl-3 border-gold md:pl-4 md:mt-0 mt-10'>
                            <h2 className='text-2xl font-yeseva md:mb-8 mb-6 font-yeseva text-white tracking-wide'>Our Head Office</h2>
                        </div>
                        <div className='block items-center md:text-md text-sm'>
                            <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-white">
                                <IoLocationSharp className='mr-4 md:h-6 h-4 w-4 mdw-6' />
                                Opposite VAG Hall - Ho, Volta Region
                            </p>
                            <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-white">
                                <MdOutlinePhoneMissed className='mr-4 m:h-6 md:w-6 h-4 w-4' />
                                +233 54 3826 606 / +233 20 6655 964
                            </p>
                            <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-white">
                                <MdAttachEmail className='mr-4 md:h-6 md:w-6 w-4 h-4' />
                                restorationfoundation@gmail.com
                            </p>
                        </div>
                        <div className='flex items-center md:mt-5 mt-1 md:mb-0 mb-10 text-white gap-6'>
                            <a href='#' className='p-2 border border-gold rounded-full inline-block'>
                                <BsFacebook className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>

                            <a href='#' className='p-2 border border-gold rounded-full inline-block'>
                                <BsInstagram className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>
                            <a href='#' className='p-2 border border-gold rounded-full inline-block'>
                                <BsLinkedin className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>
                            <a href='#' className='p-2 border border-gold rounded-full inline-block'>
                                <FaTiktok className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/3 text-right">
                        <div className='border-l-4 border-gold pl-4'>
                            <h2 className='text-2xl font-yeseva mb-8 font-yeseva text-white tracking-wide text-left'>Newsletter</h2>
                        </div>

                        <form onSubmit={handleSave} className='md:mr-0 mr-24'>
                            <input
                                className='p-4 border border-gold rounded-md border-b-2 focus:outline-none font-quicksand w-72 '
                                placeholder='Email Adress'
                                type='email'
                                required
                                name='email'
                                value={newletterInfo.email}
                                onChange={handleInputChange}
                            />
                            <button
                                type='submit'
                                className='p-4 bg-white hover:bg-gold hover:text-white mt-4 w-72 font-quicksand rounded-md text-center align-center justify-center items-center'
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className='justify-center items-center text-center md:mt-16 mt-10 mb-8 md:mb-8'>
                    <p className=' font-quicksand text-white md:text-md text-sm'
                    >© {getCurrentYear()} <span className='text-gold md:text-md'>Restoration Foundation Internation</span>  Developed by <a href='#' className='font-medium md:text-md text-sm hover:text-gold'>Michael Kabanda</a> </p>

                </div>
            </div>

        </section>
    );
}

export default Footer;

import { IoIosArrowForward } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { useState } from 'react';
import swal from "sweetalert";
import React from "react";
import { FaPhone } from 'react-icons/fa6';
// import Img1 from '../../assets/inauguration/1.jpg';
// import Img2 from '../../assets/inauguration/2.jpg';
// import Img3 from '../../assets/inauguration/3.jpg';
// import Img4 from '../../assets/inauguration/4.jpg';
// import { IoCameraOutline } from "react-icons/io5";
// import { IoMdClose } from "react-icons/io";

const Footer = () => {
    const [loading, setLoading] = React.useState(false);

    const [newletterInfo, setNewsLetterInfo] = useState({
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

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Destructure the donateInfo object for clarity
        const { email } = newletterInfo;

        try {
            // Assuming you are using fetch, I've corrected the code
            const res = await fetch('https://v1.nocodeapi.com/kpanti/google_sheets/yyCouxnLhvkpKRdz?tabId=NewsLetter', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([
                    [
                        new Date().toLocaleString(),
                        email,

                    ],
                ]),
            });

            // Check if the response is successful
            if (res.ok) {
                // Use SweetAlert to show success message
                swal("Restoration Foundation International", "Subscription Successful", "success");
                // Optionally, you can handle other actions after a successful submission here
            } else {
                // Handle errors if the response is not successful
                swal("Restoration Foundation International", "Error Subscribing", "error");
            }
        } catch (error) {
            // Handle errors in the fetch or other unexpected errors
            console.log(error);
            swal("Restoration Foundation International", "Error Subscribing", "error");
        }

        setLoading(false);
        handleClear();
    };

    // Create an array of link texts
    const linkData = [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
        { text: "Events", href: "/recent" },
        { text: "Gallery", href: "/gallery" },
        { text: "Blog", href: "/blog" },
    ];

    // const gallery = [
    //     {
    //         id: 1,
    //         image: Img1
    //     },
    //     {
    //         id: 1,
    //         image: Img2
    //     },
    //     {
    //         id: 1,
    //         image: Img3
    //     },
    //     {
    //         id: 1,
    //         image: Img4
    //     },
    // ]
    // const [isImageOpen, setIsImageOpen] = useState(false);
    // const [selectedImage, setSelectedImage] = useState(null);

    // const handleImageClick = (image) => {
    //     setSelectedImage(image);
    //     setIsImageOpen(true);
    // };

    // const handleCloseImage = () => {
    //     setIsImageOpen(false);
    // };
    // Function to get the current year
    const getCurrentYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
    };


    return (
        <section className='justify-center  items-center'>
            <div className="bg-blue1 p-4 ">
                <div className="container md:ml-0 ml-4 md:mx-auto md:flex md:justify-between md:mt-10 md:gap-6">
                    {/* Center Section */}
                    <div className="md:w-1/3 ">
                        <div className='border-l-4 pl-3 border-green md:pl-4 md:mt-0 mt-6'>
                            <h2 className='text-2xl font-yeseva mb-8 font-yeseva tracking-wide text-white'>About Us</h2>
                        </div>
                        <div >
                            <p className=" font-quicksand md:text-md text-sm pb-4 p-2 text-white">
                                {/* Restoration Foundation International is a Christian non-profit, charitable and humanitarian
                                organization incorporated in Ghana in 2006 with representatives in USA, Canada, UK and Germany */}
                                Welcome to Restoration Foundation Internationl. Our mandate is to train, educate, entertain, develop and nurture (TEEN) the youth in the areas of Health,
                                Environment, Education, Construction, Water and Sanitation to make them conscious and responsible leaders in their respective communities.
                            </p>
                        </div>
                    </div>

                    {/* Center Section */}
                    <div className="md:w-1/3 text-center">
                        <div className='border-l-4 pl-3 border-green md:mt-0 mt-6 md:pl-4'>
                            <h2 className='text-2xl font-yeseva mb-8 font-yeseva text-white tracking-wide text-left'>Popular Links</h2>
                        </div>
                        <div className="grid md:grid-cols-1 grid-cols-2 gap-4 md:text-md text-sm md:ml-8">
                            {linkData.map((data, index) => (
                                <a key={index} href={data.href} className="font-quicksand flex items-center text-white text-md hover:text-green  text-left">
                                    <IoIosArrowForward className='mr-4' />
                                    {data.text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Left Section */}
                    <div className="md:w-1/3 ">
                        <div className='border-l-4 pl-3 border-green md:pl-4 md:mt-0 mt-10'>
                            <h2 className='text-2xl font-yeseva md:mb-8 mb-6 font-yeseva text-white tracking-wide'>Our Head Office</h2>
                        </div>
                        <div className='block items-center md:text-md text-sm'>
                            <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-white">
                                <IoLocationSharp className='mr-4 w-4 h-4' />
                                Opposite VAG Hall - Ho, Volta Region
                            </p>
                            <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-white">
                                <FaPhone className='mr-4 h-4 w-4' />
                                +233 54 3826 606 / +233 20 6655 964
                            </p>
                            <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-white">
                                <MdEmail className='mr-4 w-4 h-4' />
                                restorationfoundation@gmail.com
                            </p>
                        </div>
                        <div className='flex items-center md:mt-5 mt-1 md:mb-0 mb-10 text-white gap-6'>
                            <a href='https://web.facebook.com/profile.php?id=61553867905255' className='p-2 border border-green rounded-full inline-block'>
                                <BsFacebook className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>

                            <a href='https://www.instagram.com/restorationfoundation_int' className='p-2 border border-green rounded-full inline-block'>
                                <BsInstagram className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>
                            <a href='#' className='p-2 border border-green rounded-full inline-block'>
                                <BsLinkedin className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>
                            <a href='#' className='p-2 border border-green rounded-full inline-block'>
                                <FaTiktok className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/3 text-right">
                        <div className='border-l-4 border-green pl-4'>
                            <h2 className='text-2xl font-yeseva mb-8 font-yeseva text-white tracking-wide text-left'>NewsLetter</h2>
                        </div>
                        {/* <div className="grid grid-cols-2 gap-4 md:mr-0 mr-12">
                            {gallery.map((item) => (
                                <div className="relative cursor-pointer" key={item.id} onClick={() => handleImageClick(item.image)}>
                                    <img className="w-full h-full object-cover" src={item.image} alt={`Image ${item.id}`} />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <IoCameraOutline className="text-white" />
                                    </div>
                                </div>
                            ))}
                            {isImageOpen && (
                                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 p-6">
                                    <img className="max-w-full max-h-full" src={selectedImage} alt="Enlarged Image" />
                                    <button className="absolute top-4 right-4 text-white" onClick={handleCloseImage}>
                                        <IoMdClose className='text-red h-6 w-6' />
                                    </button>
                                </div>
                            )}
                        </div> */}
                        <form onSubmit={handleSave} className='md:mr-0 mr-24'>
                            <input
                                className='p-4 border border-green rounded-md border-b-2 focus:outline-none font-quicksand w-72 '
                                placeholder='Email Adress'
                                type='email'
                                required
                                name='email'
                                value={newletterInfo.email}
                                onChange={handleInputChange}
                            />
                            <button
                                type='submit'
                                className='p-4 bg-green text-white hover:bg-primary hover:text-white mt-4 w-72 font-quicksand rounded-md text-center align-center justify-center items-center'
                            >
                                {!loading ? (
                                    "Submit"
                                ) : (
                                    "Submitting..."
                                )}
                            </button>
                        </form>
                    </div>
                </div>
                <div className='justify-center items-center text-center md:mt-16 mt-10 mb-6 md:mb-4'>
                    <p className=' font-quicksand text-white md:text-md text-sm'
                    >© {getCurrentYear()} <span className='text-green md:text-md'>Restoration Foundation Internation</span>  Developed by <a href='#' className='font-medium md:text-md text-sm hover:text-gold'>Michael Kabanda</a> </p>
                </div>
            </div>
        </section>
    );
}

export default Footer;

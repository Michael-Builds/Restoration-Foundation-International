import React, { useEffect } from 'react';
import { BiSolidDollarCircle, BiPlus } from 'react-icons/bi';
import Logo from '../../assets/logo.png';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const [openNav, setOpenNav] = React.useState(false);
    const [eventDropdownOpen, setEventDropdownOpen] = React.useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = React.useState(false);

    const showDonateButton = window.innerWidth >= 960;

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const handleEventMouseEnter = () => {
        if (!openNav) {
            setEventDropdownOpen(true);
        }
    };

    const handleEventMouseLeave = () => {
        if (!openNav) {
            setEventDropdownOpen(false);
        }
    };
    const handleAboutMouseEnter = () => {
        if (!openNav) {
            setAboutDropdownOpen(true);
        }
    };

    const handleAboutMouseLeave = () => {
        if (!openNav) {
            setAboutDropdownOpen(false);
        }
    };


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as='li'
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/" className="flex items-center font-medium md:text-lg text-md text-gray-500 lg:hover:text-green-700 lg:hover:border-b-2 lg:hover:border-gold font-quicksand">
                    Home
                </NavLink>
            </Typography>

            <li
                className="relative"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
            >
                <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className={`p-1 font-normal font-quicksand ${aboutDropdownOpen ? "text-gray-500" : "text-gray-500"
                        }`}
                >
                    <div className="flex items-center md:text-lg justify-between font-medium text-md cursor-pointer">
                        About
                        {openNav ? ( 
                            <span
                                className="ml-3 text-green-600 cursor-pointer"
                                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}

                            >
                                <BiPlus className='text-gold' />
                            </span>
                        ) : null}
                    </div>
                    {aboutDropdownOpen && (
                        <ul className={`absolute top-8 left-0 z-10 bg-white justify-center items-center text-gray-600 md:border-yellow-500 p-4 w-[10rem] md:border-b-4  rounded-md`}>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={`block p-2 hover:bg-white rounded-md  md:text-md border-yellow-500 font-medium text-md mt-4 hover:text-yellow-500`}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/founder"
                                    className={`block p-2 hover:bg-white  md:text-md  rounded-md border-yellow-500 font-medium text-md mt-4 hover:text-yellow-500`}
                                >
                                    About Founder
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </Typography>
            </li>

            <Typography
                as='li'
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/service" className="flex items-center font-medium md:text-lg text-md text-gray-500 lg:hover:text-green-700 lg:hover:border-b-2 lg:hover:border-gold font-quicksand">
                    Causes
                </NavLink>
            </Typography>

            <li
                className="relative"
                onMouseEnter={handleEventMouseEnter}
                onMouseLeave={handleEventMouseLeave}
            >
                <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className={`p-1 font-normal font-quicksand ${eventDropdownOpen ? "text-gray-500" : "text-gray-500"
                        }`}
                >
                    <div className="flex items-center justify-between font-medium md:text-lg text-md cursor-pointer">
                        Events
                        {openNav ? ( // Conditionally render the plus icon
                            <span
                                className="ml-3 text-green-600 cursor-pointer"
                                onClick={() => setEventDropdownOpen(!eventDropdownOpen)}
                            >
                                <BiPlus className='text-gold' />
                            </span>
                        ) : null}
                    </div>
                    {eventDropdownOpen && (
                        <ul className={`absolute top-8 left-0 z-10 bg-white justify-center items-center text-gray-600 md:border-yellow-500 p-4 w-[10rem] md:border-b-4  rounded-md`}>
                            <li>
                                <NavLink
                                    to="/recent"
                                    className={`block p-2 hover:bg-white  rounded-md border-yellow-500 font-medium text-md mt-4 hover:text-yellow-500`}
                                >
                                    Recent
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/upcoming"
                                    className={`block p-2 hover:bg-white  rounded-md border-yellow-500 font-medium text-md mt-4 hover:text-yellow-500`}
                                >
                                    Upcoming
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </Typography>
            </li>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal font-quicksand"
            >
                <NavLink to="/services" className="flex text-16 items-center font-medium md:text-lg text-md text-gray-500 lg:hover:text-green-700 lg:hover:border-b-2 lg:hover:border-gold font-quicksand">
                    Contact
                </NavLink>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal font-quicksand"
            >
                <NavLink to="/blogs" className="flex  items-center font-medium md:text-lg text-md text-gray-500 lg:hover:text-green-700 lg:hover:border-b-2 lg:hover:border-gold font-quicksand">
                    Blog
                </NavLink>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4 shadow-sm rounded-xs shadow-gray-200">
            <div className=" -mb-14 container mx-auto flex items-center justify-between text-blue-gray-900">
                <NavLink to="/" className='-ml-2'>
                    <img
                        src={Logo}
                        alt='Tamani Properties'
                        className="mt-16 mb-16 main-logo"
                    />
                </NavLink>
                <div className="hidden lg:block font-quicksand -mr-96">{navList}</div>
                {showDonateButton && (
                    //Conditionally render the donate button, when the screen is greater than 960 pixels, then the button is displayed else it is hidden
                    <Button variant="gradient" size="sm" className="mb-2 mt-2 mr-12 flex items-center text-gray-600 bg-gold text-white rounded-sm lg:hover:bg-gray-500">
                        <BiSolidDollarCircle className="mr-2" />
                        <span className="mr-1 font-quicksand text-sm font-medium capitalize">Donate</span>
                    </Button>
                )}
                <IconButton
                    variant="text"
                    className="ml-auto mr-2 h-6 w-6 text-blue-600 hover-bg-transparent focus-bg-transparent active-bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6 text-gold"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gold "
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto pb-2">
                    {navList}
                    <Button variant="gradient" size="sm" className="flex items-center rounded-sm capitalize lg:bg-green-500 bg-gold">
                        <BiSolidDollarCircle className="mr-2" />
                        <span className="mr-1">Donate</span>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
};
export default Navigation;

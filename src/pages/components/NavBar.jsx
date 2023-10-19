import React from 'react';
// import { IoIosArrowDown } from 'react-icons/io';
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
    const [aboutDropdownOpen, setAboutDropDownOpen] = React.useState(false);

    const showDonateButton = window.innerWidth >= 960; // Check screen width for mobile view

    const handleEventMouseEnter = () => {
        setEventDropdownOpen(true);
    };

    const handleAboutMouseEnter = () => {
        setAboutDropDownOpen(true);
    }

    const handleEventMouseLeave = () => {
        setEventDropdownOpen(false);
    };

    const handleAboutMouseLeave = () => {
        setAboutDropDownOpen(false);
    }

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as='li'
                variant="small"
                color="blue-gray"
                className="p-1 font-normal font-quicksand"
            >
                <NavLink to="/" className="flex items-center font-medium text-lg text-gray-500 hover:text-yellow-500 font-quicksand">
                    Home
                </NavLink>
            </Typography>
            <li
                className="relative"
                onMouseEnter={openNav ? null : handleAboutMouseEnter}
                onMouseLeave={openNav ? null : handleAboutMouseLeave}
            >
                <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className={`p-1 font-normal font-quicksand ${aboutDropdownOpen ? "text-gray-500" : "text-gray-500"
                        }`}
                >
                    <div className="flex items-center justify-between font-medium text-lg cursor-pointer">
                        About
                        {openNav ? ( // Conditionally render the plus icon
                            <span
                                className="ml-3 text-yellow-500 cursor-pointer"
                                onClick={() => setAboutDropDownOpen(!aboutDropdownOpen)}
                            >
                                <BiPlus />
                            </span>
                        ) : null}
                    </div>
                    {aboutDropdownOpen && (
                        <ul className={`absolute top-8 left-0 z-10 bg-white justify-center text-gray-600 p-4 w-[10rem] lg:border-b-4 lg:border-yellow-500 rounded-md ${openNav ? '' : 'pointer-events-none'}`}>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={`block p-2 lg:hover:bg-white lg:hover:border-b-2 rounded-md lg:border-yellow-500 font-medium text-md mt-4 ${openNav ? 'lg:hover:text-yellow-500' : ''}`}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/service2"
                                    className={`block p-2 lg:hover:bg-white lg:hover:border-b-2 rounded-md lg:border-yellow-500 font-medium text-md mt-4 ${openNav ? 'lg:hover:text-yellow-500' : ''}`}
                                >
                                    About Founder
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
                className="p-1 font-normal font-quicksand "
            >
                <NavLink to="/causes" className="flex items-center font-medium text-lg text-gray-500 hover:text-yellow-500 font-quicksand">
                    Causes
                </NavLink>
            </Typography>
            <li
                className="relative"
                onMouseEnter={openNav ? null : handleEventMouseEnter}
                onMouseLeave={openNav ? null : handleEventMouseLeave}
            >
                <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className={`p-1 font-normal font-quicksand ${eventDropdownOpen ? "text-gray-500" : "text-gray-500"
                        }`}
                >
                    <div className="flex items-center justify-between font-medium text-lg cursor-pointer">
                        Events
                        {openNav ? ( // Conditionally render the plus icon
                            <span
                                className="ml-3 text-yellow-500 cursor-pointer"
                                onClick={() => setEventDropdownOpen(!eventDropdownOpen)}
                            >
                                <BiPlus />
                            </span>
                        ) : null}
                    </div>
                    {eventDropdownOpen && (
                        <ul className={`absolute top-8 left-0 z-10 bg-white justify-center items-center text-gray-600 p-4 w-[10rem] border-b-4 border-yellow-500 rounded-md`}>
                            <li>
                                <NavLink
                                    to="/service1"
                                    className={`block p-2 hover:bg-white hover:border-b-2 rounded-md border-yellow-500 font-medium text-md mt-4 hover:text-yellow-500`}
                                >
                                    Recent
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/service2"
                                    className={`block p-2 hover:bg-white hover:border-b-2 rounded-md border-yellow-500 font-medium text-md mt-4 hover:text-yellow-500`}
                                >
                                    Upcoming ....
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
                className="p-1 font-normal font-quicksand flex items-center"
            >
                <NavLink to="/service" className="flex items-center font-medium text-lg text-gray-500 hover:text-yellow-500 font-quicksand">
                    Services
                </NavLink>
            </Typography>


            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal font-quicksand"
            >
                <NavLink to="/blogs" className="flex items-center font-medium text-lg text-gray-500 hover:text-yellow-500 font-quicksand">
                    Blogs
                </NavLink>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4 shadow-md shadow-gray-200">
            <div className=" -mb-14 container mx-auto flex items-center justify-between text-blue-gray-900">
                <NavLink to="/" className='-ml-2'>
                    <img
                        src={Logo}
                        alt='Restoration-Foundation'
                        className="h-32 w-32 mt-8 mb-6"
                    />
                </NavLink>
                <div className="hidden lg:block -mr-96 font-quicksand text-16">{navList}</div>
                {showDonateButton && (
                    //Conditionally render the donate button, when the screen is greater than 960 pixels, then the button is displayed else it is hidden
                    <Button variant="gradient" size="sm" className="mb-2 mt-2 flex items-center -ml-32 text-gray-600 bg-yellow-500 text-white rounded-lg hover:bg-gray-500">
                        <BiSolidDollarCircle className="mr-2" />
                        <span className="mr-1 font-quicksand text-sm font-medium capitalize">Donate</span>
                    </Button>
                )}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-blue-600 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6 text-yellow-500"
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
                            className="h-6 w-6 text-yellow-500 "
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
                <div className="container mx-auto pb-4 ">
                    {navList}
                    <Button variant="gradient" size="sm" className="flex items-center capitalize bg-yellow-500">
                        <BiSolidDollarCircle className="mr-2" />
                        <span className="mr-1">Donate</span>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
};
export default Navigation;

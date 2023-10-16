import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../../assets/carousel-1.jpg';
import Image2 from '../../../assets/carousel-2.jpg';
import Image3 from '../../../assets/carousel-3.jpg';
import React from "react";
import { GoArrowRight } from 'react-icons/go';
import { BiSolidVideos } from 'react-icons/bi';

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { AiOutlineClose } from 'react-icons/ai';

const carouselItems = [
    {
        image: Image1,
        title: "Let us be kind for children",
        description: "Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada",
    },
    {
        image: Image2,
        title: "Get Involved with helping hand",
        description: "Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis, orci sodales varius fermentum, tortor",
    },
    {
        image: Image3,
        title: "Bringing smiles to millions",
        description: "Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam. Proin pellentesque odio",
    },
];

const Slider = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div className="-mt-2 relative w-full min-h-[300px] bg-white mb-12">
            <Carousel
                autoPlay={true} // Auto play the carousel
                infiniteLoop={true} // Loop back to the first slide after reaching the last slide
                showArrows={true} // Show left and right navigation arrows
                showStatus={false} // Hide status indicators (dots)
                showThumbs={false} // Hide thumbnail images
            >
                {carouselItems.map((item, index) => (
                    <div key={index} className="relative w-full min-h-[400px] flex items-center justify-center flex-col">
                        <div className="carousel-img relative w-full h-full min-h-[300px] text-right overflow-hidden">
                            <img src={item.image} alt="Image" />
                        </div>
                        <div className="absolute carousel-text max-w-700 flex items-center justify-center flex-col z-10">
                            <h1 className="text-center font-quicksand text-white text-6xl font-bold mb-10">
                                {item.title}
                            </h1>
                            <p className="text-white text-center font-quicksand text-2xl mb-10">
                                {item.description}
                            </p>

                            <div className=" flex">

                                <button className="justify-center ml-6 flex items-center border border-yellow-500 hover:border-yellow-700 border-b-2 p-3 text-white font-quicksand mb-4 m-2 rounded-full cursor-pointer">
                                    Donate Now
                                    <GoArrowRight className="ml-2 mr-2" />
                                </button>
                                <a
                                    onClick={handleOpen}
                                    className="justify-center ml-6 flex items-center border border-yellow-500 hover:border-yellow-700 border-b-2 p-3 text-white font-quicksand mb-4 m-2 rounded-full cursor-pointer"
                                >
                                    Watch Video
                                    <BiSolidVideos className="ml-2 mr-2" />
                                </a>

                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
            <Dialog open={open} handler={handleOpen}
                className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
            >
                <DialogHeader onClick={handleOpen} className="justify-end cursor-pointer text-red-500">
                    <AiOutlineClose />
                </DialogHeader>
                <DialogBody divider className="font-quicksand text-1xl font-medium">
                    The key to more success is to have a lot of pillows. Put it this way,
                    it took me twenty five years to get these plants, twenty five years of
                    blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                    getting started. I&apos;m up to something. Fan luv.
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default Slider;

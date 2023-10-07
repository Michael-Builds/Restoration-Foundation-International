import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../../assets/carousel-1.jpg';
import Image2 from '../../../assets/carousel-2.jpg';
import Image3 from '../../../assets/carousel-3.jpg';
import React from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { AiOutlineClose } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';

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
                            <div className="carousel-btn text-white hover:text-gray-500">
                                <a className="text-white mr-6 hover:text-gray-500  hover:bg-yellow-500 hover:text-white border border-yellow-500 p-2 border-2 rounded-sm" href="">
                                    Donate Now
                                </a>
                                <a
                                    onClick={handleOpen}
                                    className="text-white hover:text-gray-500 border hover:bg-yellow-500 hover:text-white border-yellow-500 p-2 border-2 rounded-sm cursor-pointer"
                                    data-toggle="modal"
                                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                                    data-target="#videoModal"
                                >
                                    Watch Video
                                </a>

                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
            <Dialog open={open} handler={handleOpen}
                className="relative m-4 w-2/5 min-w-[50%] max-w-[50%] min-h-[60%] max-h-[60%] rounded-lg bg-black font-quicksand text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
            >
                <DialogHeader className="justify-end text-white cursor-pointer" onClick={handleOpen}>
                    <AiOutlineClose />
                </DialogHeader>
                <DialogBody divider className="justify-center align-center mt-[10%] text-white" >
                    The key to more success is to have a lot of pillows. Put it this way,
                    it took me twenty five years to get these plants, twenty five years of
                    blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                    getting started. I&apos;m up to something. Fan luv.
                </DialogBody>

                <DialogFooter>
                    <BiLogoYoutube onClick={handleOpen} className="text-white h-16 w-16 cursor-pointer -mb-[30%] " />
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default Slider;

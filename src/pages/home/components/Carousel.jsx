import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../../assets/carousel-1.jpg';
import Image2 from '../../../assets/carousel-2.jpg';
import Image3 from '../../../assets/carousel-3.jpg';

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
        </div>
    );
};

export default Slider;


import Image from '../../../assets/carousel-3.jpg';
import { IoIosArrowForward } from 'react-icons/io';


const App = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 mb-16 mt-14">
                <div className="lg:order-1">
                    {/* Left Section */}
                    <div className="left-section md:ml-6  ">
                        <div className="lg:order-2 relative z-2">
                            <div className="about-img relative overflow-hidden p-5 pe-0 ">
                                <div className="absolute top-0 left-0 w-full h-full transform -skew-x-20 z-1"></div>
                                <img className="w-96 md:w-full h-auto relative z-2" src={Image} alt="About Us" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:order-2">
                    {/* Right Section */}
                    <div className="right-section">
                        <div className="lg:order-1 ml-8" >
                            <div className=' border-l-4 border-gold md:-ml-1 -ml-8 max-w-full'>
                                <h1 className="mb-5 text-xl max-w-[95%] w-full lg:text-4xl ml-3 text-gray-600 font-semibold font-raleway">
                                    Learn About Us
                                </h1>
                            </div>
                            <h1 className="mb-4 md:p-0 text-sm lg:text-lg md:ml-0 -ml-8 font-quicksand">
                                Worldwide non-profit charity organization
                            </h1>

                            <p className="  mb-4  text-sm md:p-0 lg:text-lg md:ml-0 -ml-8 font-quicksand">
                                Our mandate is to train, educate, entertain, develop and nurture (TEEN) the youth in the areas of Health, Environment, Education, Construction,
                                Water and Sanitaion to make them conscious and responsible leaders in their respective communities.
                            </p>
                            <div className='md:p-3 p-2 bg-gold mt-8 md:ml-0 -ml-10 flex items-center text-white w-32 text-center hover:bg-blue hover:text-white rounded-md cursor-pointer '>
                                <a href="#" className=" text-center">Read More</a>
                                <IoIosArrowForward className='ml-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

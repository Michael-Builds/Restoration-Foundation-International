import Image from '../../../assets/carousel-3.jpg';
import { GoArrowRight } from 'react-icons/go';
import { BsClock } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { FaCalendarAlt } from 'react-icons/fa';

const eventsData = [
    {
        title: 'Lorem ipsum dolor',
        date: "22-Jun-23",
        time: "8:00 - 10:00",
        location: "Volta Region",
        buttonText: "Read More!",
        description: 'Lorem Ipsum is simply dummy text of the industry',
        image: Image,
    },
    {
        title: 'Lorem ipsum dolor ',
        date: "22-Jun-23",
        time: "8:00 - 10:00",
        location: "Volta Region",
        buttonText: "Join Now!",
        description: 'Lorem Ipsum is simply dummy text of the industry',
        image: Image,
    },
    {
        title: 'Lorem ipsum dolor ',
        date: "22-Jun-23",
        time: "8:00 - 10:00",
        location: "Volta Region",
        buttonText: "Join Now!",
        description: 'Lorem Ipsum is simply dummy text of the industry',
        image: Image,
    },
];

const Events = () => {
    return (
        <div className='justify-center align-center '>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-yellow-500 mb-2 ">
                        Upcoming Events
                    </p>
                    <h2 className=" font-quicksand font-bold md:text-5xl text-3xl text-gray-600 mb-4 md:max-w-[700px] md:ml-[25%] mt-6 md:p-0 p-2">
                        Be ready for our upcoming charity events
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:p-6">
                {eventsData.map((event, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                        <div className="image-container relative cursor-pointer">
                            <div className="image-overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-70"></div>
                            <img
                                src={event.image}
                                alt="Blog Image"
                                className="object-center object-cover"
                            />
                        </div>
                        <h3 className="text-sm md:text-lg hover:text-gold cursor-pointer text-center capitalize font-semibold font-quicksand mt-4 mb-2">{event.title}</h3>
                        <div className="container mx-auto mt-8 pl-4 mb-4 flex flex-wrap items-center">
                            {/* Left Content */}
                            <div className="w-full lg:w-1/2 lg:pr-10 ">
                                <p className='flex items-center gap-2 font-quicksand font-sm  pb-1'>
                                    <FaCalendarAlt className='text-blue-900 mr-2 h-4 w-4' />{event.date}
                                </p>
                                <p className='flex items-center gap-2 mt-3 font-quicksand font-sm  pb-1'>
                                    <BsClock className='text-blue-900 mr-2 h-4 w-4' />{event.time}
                                </p>
                                <p className='flex items-center gap-2 mt-3 font-quicksand font-sm  pb-1 '>
                                    <IoLocationSharp className='text-blue-900 mr-2 h-6 w-6 -ml-1' />{event.location}
                                </p>
                            </div>
                            {/* Right Content */}
                            <div className="w-full lg:w-1/2 md:border-l-4 border-gold pl-4 md:mt-0 mt-4 md:ml-0 -ml-4">
                                <p className=' text-sm font-quicksand'>{event.description}</p>
                                <button className='mt-4 border border-gold border-b-4 pl-2 pb-1 pt-1 pr-2 rounded-full flex items-center font-quicksand font-medium ml-2 hover:border-yellow-600'>
                                    {event.buttonText}
                                    <GoArrowRight className='ml-2 mr-2' />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}
export default Events;
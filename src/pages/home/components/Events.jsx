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
        author: 'Atmostech',
        image: Image,
    },
    {
        title: 'Lorem ipsum dolor ',
        date: "22-Jun-23",
        time: "8:00 - 10:00",
        location: "Volta Region",
        buttonText: "Join Now!",
        description: 'Lorem Ipsum is simply dummy text of the industry',
        author: 'Atmostech',
        image: Image,
    },
    {
        title: 'Lorem ipsum dolor ',
        date: "22-Jun-23",
        time: "8:00 - 10:00",
        location: "Volta Region",
        buttonText: "Join Now!",
        description: 'Lorem Ipsum is simply dummy text of the industry',
        author: 'Atmostech',
        image: Image,
    },
];

const Events = () => {
    return (
        <div className='justify-center align-center mt-8'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-yellow-500 mb-2 ">
                        Upcoming Events
                    </p>
                    <h2 className=" font-quicksand font-bold text-5xl text-blue-900 mb-4 max-w-[700px] ml-[25%] mt-6">
                        Be ready for our upcoming charity events
                    </h2>
                </div>
            </div>

            <div className="flex justify-center p-2 mt-8">
                {eventsData.map((event, index) => (
                    <div key={index} className="bg-gray-200 m-4 pb-4 rounded-md w-[35%] h-160 flex flex-col justify-start items-center">
                        <img src={event.image} alt={`Event-${index + 1}`} className="w-full" />

                        <div className="container mx-auto mt-8 pl-4 mb-4 flex flex-wrap items-center">
                            {/* Left Content */}
                            <div className="w-full lg:w-1/2 lg:pr-10 ">
                                <p className='flex items-center gap-2 font-quicksand font-sm border-b-2 border-gray-400 pb-1'>
                                    <FaCalendarAlt className='text-blue-900 mr-2 h-4 w-4' />{event.date}
                                </p>
                                <p className='flex items-center gap-2 mt-3 font-quicksand font-sm border-b-2 border-gray-400 pb-1'>
                                    <BsClock className='text-blue-900 mr-2 h-4 w-4' />{event.time}
                                </p>
                                <p className='flex items-center gap-2 mt-3 font-quicksand font-sm border-b-2 border-gray-400 pb-1 '>
                                    <IoLocationSharp className='text-blue-900 mr-2 h-6 w-6 -ml-1' />{event.location}
                                </p>

                            </div>

                            {/* Right Content */}

                            <div className="w-full lg:w-1/2 border-l-4 border-yellow-400 pl-4">
                                <h2 className=' font-quicksand text-blue-900 font-bold text-lg'> {event.title}</h2>
                                <p className='max-w-[100%] text-sm mt-2'>{event.description}</p>
                                <button className='mt-4 border border-yellow-500 border-b-4 pl-2 pb-1 pt-1 pr-2 rounded-full flex items-center font-quicksand font-medium ml-2 hover:border-yellow-600'>
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
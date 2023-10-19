import Image from '../../../assets/carousel-2.jpg';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';

const eventsData = [
    {
        title: 'Lorem ipsum dolor sit',
        comments: "15 comments",
        author: "Admin",
        description: 'Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor',
        image: Image,
        link: "/item1",
        adminlink: "admin.com"
    },
    {
        title: 'Lorem ipsum dolor sit',
        comments: "25 comments",
        author: "Admin",
        description: 'Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor',
        image: Image,
        link: "/item2",
        adminlink: "admin.com"

    },
    {
        title: 'Lorem ipsum dolor sit',
        comments: "30 comments",
        author: "Admin",
        description: 'Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor',
        image: Image,
        link: "/item3",
        adminlink: "admin.com"

    },
];


const Blog = () => {
    return (
        <div className='justify-center align-center mt-8'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-yellow-500 mb-2 ">
                        Our Blog
                    </p>
                    <h2 className=" font-quicksand font-bold text-5xl text-blue-900 mb-4 max-w-[700px] ml-[25%] mt-6">
                        Latest news & articles directly from our blog
                    </h2>
                </div>
            </div>

            <div className="flex justify-center p-2 mt-8">
                {eventsData.map((event, index) => (
                    <div key={index} className="bg-gray-200 m-4 pb-4 rounded-md w-[35%] h-160 flex flex-col justify-start items-center">
                        <img src={event.image} alt={`Event-${index + 1}`} className="w-full" />

                        <h2 className=' font-quicksand text-blue-900 font-bold text-lg mt-4'> {event.title}</h2>
                        <p className='text-md font-medium  p-4 font-quicksand text-blue-900'>{event.description}</p>

                        <div className="container mx-auto mt-4 pl-4 mb-4 flex flex-wrap items-center">
                            {/* Left Content */}
                            <div className="w-full lg:w-1/2 lg:pr-10 ">
                                <a href={event.adminlink} className='flex items-center gap-2 mt-3 font-quicksand font-sm  pb-1'>
                                    <FaUserAlt className='text-blue-900 mr-2 h-6 w-6' />{event.author}
                                </a>
                            </div>
                            {/* Right Content */}
                            <div className="w-full lg:w-1/2 border-l-4 border-blue-900 pl-4">
                                <a href={event.link} className='flex items-center gap-2 mt-3 font-quicksand font-sm  pb-1'>
                                    <TbMessageCircle2Filled className='text-blue-900 mr-2 h-6 w-6' />{event.comments}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}
export default Blog;
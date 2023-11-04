import card1 from "../../../assets/blog-1.jpg";
import card2 from "../../../assets/blog-2.jpg";
import card6 from "../../../assets/blog-3.jpg";
import { FaCalendarAlt } from 'react-icons/fa';
import { LuMessagesSquare } from 'react-icons/lu';

const Main = () => {

    const blogData = [
        {
            category: "Arts",
            image: card6,
            title: 'Searches at Lands Commission to Get Easier from 1st October, 2021',
            content: 'From 1st October, 2021, the Greater Accra Regional Office of the Lands Commission shall no longer issue separate search reports from its divisions.',
            author: 'John Doe',
            date: 'October 10, 2023',
        },
        {
            image: card1,
            category: "Article",
            title: 'Your 2022 property investment plan(12 - steps to Note)',
            content: '	It is a new year : 12 months lie ahead. With some discipline and focus you could be much closer to your investment goals this time next year: just follow',
            author: 'Jane Smith',
            date: 'October 15, 2023',
        },
        {
            image: card2,
            category: "Announcement",
            title: 'Why you Need a House in Ghana',
            content: 'There are a lot of reasons why you will want to buy a property in some specific part of the world. This may include safety reasons, availability of social centers',
            author: 'Alice Johnson',
            date: 'October 20, 2023',
        },
        {
            category: "Arts",
            image: card6,
            title: 'Searches at Lands Commission to Get Easier from 1st October, 2021',
            content: 'From 1st October, 2021, the Greater Accra Regional Office of the Lands Commission shall no longer issue separate search reports from its divisions.',
            author: 'John Doe',
            date: 'October 10, 2023',
        },
        {
            image: card1,
            category: "Article",
            title: 'Your 2022 property investment plan(12 - steps to Note)',
            content: '	It is a new year : 12 months lie ahead. With some discipline and focus you could be much closer to your investment goals this time next year: just follow',
            author: 'Jane Smith',
            date: 'October 15, 2023',
        },
        {
            image: card2,
            category: "Announcement",
            title: 'Why you Need a House in Ghana',
            content: 'There are a lot of reasons why you will want to buy a property in some specific part of the world. This may include safety reasons, availability of social centers',
            author: 'Alice Johnson',
            date: 'October 20, 2023',
        },
    ];

    return (
        <section className="p-6 md:mt-24">
            <div className="container mx-auto pb-8">
                <h2 className="md:text-4xl font-bold text-gray-600 text-2xl font-raleway mb-6 text-center md:mb-12">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {blogData.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                            <div className="image-container relative cursor-pointer">
                                <div className="image-overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-70"></div>
                                <img
                                    src={post.image}
                                    alt="Blog Image"
                                    className="object-center object-cover"
                                />
                                <div className="top-left-text bg-gold text-white text-center text-sm font-semibold font-quicksand absolute top-4 md:pt-2 md:pb-2 md:pr-8 md:pl-8 pl-4  pr-4 pb-2 pt-2 rounded-sm">
                                    {post.category}
                                </div>
                            </div>

                            <h3 className="text-sm md:text-lg hover:text-gold cursor-pointer font-medium font-quicksand mt-4 mb-2">{post.title}</h3>
                            <div className="text-sm text-gray-500 mb-4 mt-4 flex gap-4">
                                <div className="flex items-center">
                                    <FaCalendarAlt className="mr-2 md:h-4 md:w-4 text-blue cursor-pointer hover:text-gold" />
                                    <p className="font-quicksand">{post.date}</p>
                                </div>
                                <div className="flex items-center">
                                    <LuMessagesSquare className="mr-2 md:h-6 md:w-6 text-blue cursor-pointer hover:text-gold" />
                                    <p> {post.author}</p>
                                </div>
                            </div>
                            <p className="text-gray-900 mb-4 text-sm font-quicksand">{post.content}</p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Main;

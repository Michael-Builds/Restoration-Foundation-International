import Img1 from '../../assets/causes-1.jpg';
import Img2 from '../../assets/causes-2.jpg';
import Img3 from '../../assets/causes-3.jpg';
import { GoArrowRight } from 'react-icons/go';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const causesData = [
    {
        goal: "$50,000",
        raise: "$25,000",
        progress: 50,
        title: 'Providing Education for All',
        description: 'We aim to ensure that every child has access to quality education, regardless of their background. Your support helps us reach this goal.',
        author: 'Education Foundation',
        image: Img1,
        link: "/donate",
        join: "/about"


    },
    {
        goal: "$75,000",
        raise: "$60,000",
        progress: 80,
        title: 'Clean Water for Communities',
        description: 'Our mission is to bring clean and safe drinking water to underserved communities. Join us in making a significant impact.',
        author: 'Water Relief Organization',
        image: Img2,
        link: "/donate",
        join: "/about"

    },
    {
        goal: "$40,000",
        raise: "$12,000",
        progress: 30,
        title: 'Fighting Hunger Together',
        description: 'Together, we can combat hunger in our local neighborhoods. Your contribution helps feed those in need.',
        author: 'Community Food Drive',
        image: Img3,
        link: "/donate",
        join: "/about"
    },
];


const Causes = () => {
    return (
        <div className='justify-center align-center md:mt-8 -mt-4'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-yellow-500 mb-2 ">
                        Popular Causes
                    </p>
                    <h2 className=" font-quicksand font-bold md:text-5xl text-3xl text-gray-600 mb-4 md:max-w-[700px] md:ml-[25%] mt-6 md:p-0 p-2">
                        Let us know about charity causes around the world
                    </h2>
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-8 ">
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-2 md:p-0 p-4">
                    {causesData.map((cause, index) => (
                        <div key={index} className="bg-gray-200 m-4 rounded-lg flex flex-col justify-start items-center">
                            <div className="image-container relative overflow-hidden">
                                <img src={cause.image} alt={`Cause-${index + 1}`} className="w-full object-center object-cover cursor-pointer transition-transform transform hover:scale-110" />
                            </div>
                            <div className=' mt-6 w-full p-2 '>
                                <Progress percent={cause.progress} status="success" />
                            </div>

                            <div className='flex gap-16 mt-4'>
                                <p className='font-quicksand'> Goal : <span className='font-quicksand font-bold text-gold'>{cause.goal}</span></p>
                                <p className='font-quicksand'> Raised : <span className='font-quicksand font-bold text-gold'>{cause.raise}</span></p>
                            </div>
                            <h3 className="text-xl font-bold mb-2 mt-4 ml-4 font-quicksand">
                                {cause.title}
                            </h3>
                            <p className="ml-4 mt-4 font-quicksand pb-6">{cause.description}</p>
                            <div className="mb-4 justify-center flex items-center">
                                <a href={cause.join} className="justify-center border-b-4 font-semibold flex items-center border border-gold hover:border-yellow-700 border-b-2 p-3 text-gray-600 font-quicksand mb-4 m-2 rounded-md cursor-pointer">
                                    Learn More
                                    <GoArrowRight className="ml-2 mr-2" />
                                </a>
                                <a href={cause.link} className="flex items-center border-b-4 font-semibold border border-gold hover:border-yellow-700 border-b-2 p-3 text-gray-600 font-quicksand mb-4 m-2 rounded-md cursor-pointer">
                                    Donate Now
                                    <GoArrowRight className="ml-2 mr-2" />
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>




        </div>
    )
}
export default Causes;
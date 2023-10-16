import Image from '../../../assets/carousel-1.jpg';
import { GoArrowRight } from 'react-icons/go';
import ProgressBar from "@ramonak/react-progress-bar";

const causesData = [
    {
        goal: "$100,000",
        raise: "$20,000",
        progress: 50,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem Ipsum is simply dummy text of the industrys since the unknown.',
        author: 'Atmostech',
        image: Image,
    },
    {
        goal: "$100,000",
        raise: "$20,000",
        progress: 80,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem Ipsum is simply dummy text of the industrys since the unknown.',
        author: 'Atmostech',
        image: Image,
    },
    {
        goal: "$100,000",
        raise: "$20,000",
        progress: 30,
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem Ipsum is simply dummy text of the industrys since the unknown.',
        author: 'Atmostech',
        image: Image,
    },
];

const Causes = () => {
    return (
        <div className='justify-center align-center mt-8'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-yellow-500 mb-2 ">
                        Popular Causes
                    </p>
                    <h2 className=" font-quicksand font-bold text-5xl text-blue-900 mb-4 max-w-[850px] ml-[20%] mt-6">
                        Let us know about charity causes around the world
                    </h2>
                </div>
            </div>

            <div className="flex justify-center gap-4">
                {causesData.map((cause, index) => (
                    <div key={index} className="bg-gray-200 m-4 rounded-md w-[26%] h-160 flex flex-col justify-start items-center">
                        <img src={cause.image} alt={`Cause-${index + 1}`} className="w-full" />
                        <div className=' mt-6 w-full p-2'>
                            <ProgressBar completed={cause.progress} baseBgColor="gray" />
                        </div>
                        <div className='flex gap-16 mt-2'>
                            <p className='font-quicksand'> Goal : <span className='font-yeseva font-medium text-blue-900'>{cause.goal}</span></p>
                            <p className='font-quicksand'> Raised: <span className='font-yeseva font-medium text-blue-900'>{cause.raise}</span></p>
                        </div>
                        <h3 className="text-xl font-medium mb-2 mt-4 ml-4 font-yeseva">
                            {cause.title}
                        </h3>
                        <p className="ml-4 mt-4 font-quicksand pb-6">{cause.description}</p>
                        <div className="mb-4 justify-center flex items-center">
                            <button className="justify-center font-semibold flex items-center border border-yellow-500 hover:border-yellow-700 border-b-2 p-3 text-gray-600 font-quicksand mb-4 m-2 rounded-md cursor-pointer">
                                Learn More
                                <GoArrowRight className="ml-2 mr-2" />
                            </button>
                            <button className="justify-center font-semibold flex items-center border border-yellow-500 hover:border-yellow-700 border-b-2 p-3 text-gray-600 font-quicksand mb-4 m-2 rounded-md cursor-pointer">
                                Donate Now
                                <GoArrowRight className="ml-2 mr-2" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}
export default Causes;
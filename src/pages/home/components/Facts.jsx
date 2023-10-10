import { useEffect, useState } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import { LuGoal } from 'react-icons/lu';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function About() {
    const [factItems] = useState([
        {
            icon: <FaGlobeAmericas className='h-16 w-16 text-yellow-500' />,
            target: 50,
            text: 'Countries',
        },
        {
            icon: <FaHandsHelping className='h-16 w-16 text-yellow-500' />,
            target: 400,
            text: 'Volunteers',
        },
        {
            icon: <LuGoal className='h-16 w-16 text-yellow-500' />,
            target: 10000,
            text: 'Our Goal',
        },
        {
            icon: <BiSolidDonateHeart className='h-16 w-16 text-yellow-500' />,
            target: 5000,
            text: 'Raised',
        },
    ]);

    const [inViewRefs, inViews] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust this threshold as needed
    });


    useEffect(() => {
        // Check if any of the counters are in view and start the CountUp animation
        if (Object.values(inViews).some((view) => view)) {
            inViewRefs.forEach((ref, index) => {
                if (inViews[index]) {
                    ref.querySelector('.count-up').start();
                }
            });
        }
    }, [inViewRefs, inViews]);

    return (
        <div className="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
            <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
            />
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
                    <dl className="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {factItems.map((item, index) => (
                            <div key={index} className="flex items-center mb-4 gap-6">
                                {item.icon}
                                <div className="ml-2">
                                    <dt className="text-5xl font-semibold leading-9 tracking-tight text-white font-quicksand mb-4" ref={inViewRefs[index]}>
                                        <CountUp
                                            start={0}
                                            end={inViews[index] ? item.target : item.target}
                                            duration={1.0}
                                            separator=","
                                            className="count-up"
                                        />
                                    </dt>
                                    <dd className="text-base font-semibold font-quicksand ml-2 text-2xl text-white ">
                                        {item.text}
                                    </dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

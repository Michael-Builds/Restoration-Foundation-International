import React from "react";
import {
    Button,
} from "@material-tailwind/react";

import swal from "sweetalert";

const Volunteer = () => {

    const [donateInfo, setDonateInfo] = React.useState({
        email: "",
        fullname: "",
        reason: "",
    })


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDonateInfo((prevDonate) => ({
            ...prevDonate,
            [name]: value,
        }));
    };


    const handleSave = (e) => {
        e.preventDefault();
        swal("Donation", "Donation made", "success")
    }

    return (
        <div className="relative w-full py-12 mt-10">
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

            <div className="mx-auto flex flex-wrap items-center ml-12">
                <div className="w-full lg:w-1/2">
                    <div className=" -ml-6 mr-10 bg-gray-300 p-6 pt-10 pb-10 rounded-md">
                        <form
                            onSubmit={handleSave}
                            className="mt-5 flex flex-col gap-4">
                            <input
                                id="fullname"
                                name="fullname"
                                value={donateInfo.fullname}
                                onChange={handleInputChange}

                                placeholder="Full Name"
                                type="text"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-sm focus:outline-none border-b-2" />
                            <input
                                id="email"
                                name="email"
                                value={donateInfo.email}
                                onChange={handleInputChange}
                                placeholder="Email Address"
                                type="email"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-sm focus:outline-none border-b-2" />
                            <textarea
                                id="reason"
                                name="reason"
                                value={donateInfo.reason}
                                onChange={handleInputChange}
                                placeholder="Why do you want to become and Volunteer?"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-sm focus:outline-none border-b-2"
                                min="0"
                                rows="3" // Set the number of rows you want the text area to display
                            />

                            <Button type="submit" className="p-4 mt-2 justify-center text-lg bg-white text-yellow-500 border border-b-2 border-yellow-500 flex items-center font-quicksand">
                                Become a Volunteer
                            </Button>

                        </form>
                    </div>

                </div>
                <div className="w-full lg:w-1/2 lg:pr-10 mt-16">
                    <div className="border-l-4 border-yellow-500 pl-2">
                        <h2 className='text-white text-2xl font-quicksand text-yellow-500 font-medium'>Become A Volunteer</h2>
                    </div>
                    <h2 className='text-white text-5xl font-quicksand mt-6 font-bold'>
                        Let us make a difference in the lives of others
                    </h2>
                    <p className='mt-6 text-white font-quicksand max-w-[90%]'>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                        Curabitur facilisis ornare velit non. Aliquam metus tortor, auctor id gravida, viverra quis sem.
                        Curabitur non nisl nec nisi maximus. Aenean convallis porttitor. Aliquam interdum at lacus non blandit.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Volunteer;

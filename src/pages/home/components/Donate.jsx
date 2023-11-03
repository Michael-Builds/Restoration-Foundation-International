import React from "react";
import swal from "sweetalert";

const About = () => {

    const [donateInfo, setDonateInfo] = React.useState({
        email: "",
        fullname: "",
        contact: "",
    })
    const handleClear = () => {
        setDonateInfo({
            email: "",
            fullname: "",
            contact: "",
        })
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDonateInfo((prevDonate) => ({
            ...prevDonate,
            [name]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        swal("Restoration Foundation International", "Information Sent", "success")
        handleClear()
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
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10 mt-16">
                    <div className="border-l-4 border-yellow-500  pl-2">
                        <h2 className='text-white text-2xl font-quicksand text-yellow-500 font-medium ml-2'>Donate Now</h2>
                    </div>
                    <h2 className='text-white text-5xl font-quicksand mt-6 font-bold'>
                        Let us donate to needy people for better lives
                    </h2>
                    <p className='mt-6 text-white font-quicksand max-w-[90%]'>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                        Curabitur facilisis ornare velit non. Aliquam metus tortor, auctor id gravida, viverra quis sem.
                        Curabitur non nisl nec nisi maximus. Aenean convallis porttitor. Aliquam interdum at lacus non blandit.
                    </p>

                </div>
                {/* Right Column */}
                <div className="w-full lg:w-1/2 p-6">
                    <div className="ml-0">
                        <form onSubmit={handleSave} className="bg-white p-6 rounded-md">
                            <p className="font-quicksand mt-4 mb-4 text-center">
                                We appreciate your willingness to make a donation! Please fill out the form below,
                                and we will get in touch with you shortly to facilitate your generous contribution.
                            </p>
                            <div className="mb-4">
                                <label htmlFor="fullname" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Name</label>
                                <input
                                    required
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    value={donateInfo.fullname}
                                    onChange={handleInputChange}
                                    className="w-full font-quicksand text-sm border border-gray-300 rounded-sm focus:outline-none p-2"
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Email</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={donateInfo.email}
                                    onChange={handleInputChange}
                                    className="w-full border font-quicksand text-sm border-gray-300 focus:outline-none p-2"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="contact" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Contact</label>
                                <input
                                    required
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    value={donateInfo.contact}
                                    onChange={handleInputChange}
                                    className="w-full font-quicksand text-sm border border-gray-300 rounded-sm focus:outline-none p-2"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-gold w-full text-white font-medium rounded-sm font-quicksand px-4 py-2 hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

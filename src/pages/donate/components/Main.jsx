import React from "react";
import swal from "sweetalert";

const Donate = () => {

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
        <div className="relative w-full py-12 ">

            <div className="mx-auto flex flex-wrap items-center ml-12">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10 md:mt-4 -mt-2">
                    <div className="border-l-4 border-yellow-500 pl-2">
                        <h2 className='text-2xl font-quicksand text-yellow-500 font-medium ml-2'>Donate Now</h2>
                    </div>
                    <h2 className=' md:text-5xl text-3xl md:p-0 pr-1 font-quicksand mt-6 font-bold'>
                        Let us donate to needy people for better lives
                    </h2>
                    <p className='mt-6  font-quicksand max-w-[90%] md:text-lg text-sm'>
                        Your contribution has the power to transform lives. When you support our cause, you are making a significant impact.
                        Together, we can provide essential resources to those in need, ensuring a better future for all. Your generosity truly makes a difference.
                    </p>
                </div>
                {/* Right Column */}
                <div className="w-full lg:w-1/2 p-6">
                    <div className="ml-0 ">
                        <form onSubmit={handleSave} className="bg-gray-200 p-6 rounded-md md:ml-0 -ml-12">
                            <p className="font-quicksand mt-4 mb-4 text-center md:max-w-[90%]">
                                Please fill out the form below, and we will get in touch with you
                                shortly to facilitate your generous contribution.
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
                                    className="w-full border font-quicksand text-sm border-gray-300 rounded-sm focus:outline-none p-2"
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
                                className="bg-gold w-full text-white font-medium rounded-sm font-quicksand px-4 py-2 md:mt-6 mt-4 hover:bg-blue-600"
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

export default Donate;

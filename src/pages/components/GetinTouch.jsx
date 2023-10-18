import {
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import swal from "sweetalert";
import React from "react";

const GetinTouch = () => {

    const [contactInfo, setContactInfo] = React.useState({
        email: "",
        fullname: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContactInfo((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        swal("Restoration Foundation", "Query Sent", "success")
    }

    return (
        <div className="relative w-full py-12">
            <div className="container mx-auto flex flex-wrap items-center">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10 -ml-12">
                    <form
                        onSubmit={handleSave}
                        className="mt-6 mb-4 w-80 max-w-screen-lg sm:w-96 pt-4 pb-4 border border-gray-200 items-center  p-4 rounded-sm p-6 m-6 bg-gray-100">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-4 font-quicksand">
                                Full Name
                            </Typography>
                            <Input
                                id="fullname"
                                name="fullname"
                                value={contactInfo.fullname}
                                onChange={handleInputChange}
                                type="text"
                                required
                                placeholder="Enter your Full Name"
                                className="p-2 font-quicksand border border-b-4 border-gray-400 rounded-md focus:outline-none border-b-2  "

                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-4 font-quicksand">
                                Email Address
                            </Typography>
                            <Input
                                id="email"
                                name="email"
                                value={contactInfo.email}
                                onChange={handleInputChange}
                                type="email"
                                required
                                placeholder="Enter your Email Address"
                                className="p-2 font-quicksand border border-b-4 border-gray-400 rounded-md focus:outline-none border-b-2 "

                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-4 font-quicksand">
                                Subject
                            </Typography>
                            <Input
                                name="subject"
                                value={contactInfo.subject}
                                onChange={handleInputChange}
                                type="text"
                                required
                                placeholder="Subject"
                                className=" p-2 font-quicksand border border-b-4 border-gray-400 rounded-md focus:outline-none border-b-2 "

                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-4 font-quicksand">
                                Message
                            </Typography>
                            <textarea
                                id="message"
                                name="message"
                                value={contactInfo.message}
                                onChange={handleInputChange}
                                placeholder="Why do you want to become and Volunteer?"
                                required
                                className="p-2 font-quicksand border border-b-4 border-gray-400 rounded-md focus:outline-none border-b-2 bg-transparent"
                                min="0"
                                rows="3" // Set the number of rows you want the text area to display
                            />
                        </div>
                        <div className="flex items-center">
                            <Checkbox />
                            <Typography variant="small" className="font-quicksand text-gray-600 font-semibold">
                                I agree the
                            </Typography>
                            <a href="#" className="font-quicksand transition-colors hover:text-gray-900 ml-1 font-bold">
                                Terms and Conditions
                            </a>
                        </div>
                        <Button
                            type="submit"
                            className="mt-4 mb-4 p-4 font-quicksand font-medium border border-yellow-400 border-b-4 bg-transparent text-gray-800" fullWidth>
                            Get in touch
                        </Button>
                    </form>

                </div>
                {/* Right Column */}
                <div className="w-full lg:w-1/2 -mt-32">
                    <div className="mb-10 ml-0">
                        <div className="border-l-4 border-yellow-400 pl-2">
                            <p className='text-2xl mr-2 font-semibold text-yellow-400 font-quicksand' >Get In Touch</p>
                        </div>
                        <h2 className="text-5xl text-blue-900 font-quicksand mt-8 font-bold">
                            Contact for any query

                        </h2>
                        <p className="mt-12 font-quicksand">
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non. Aliquam metus tortor,
                            auctor id gravida, viverra quis sem. Curabitur non nisl nec nisi maximus. Aenean convallis porttitor.
                            Aliquam interdum at lacus non blandit.
                        </p>
                        <p className="mt-8 font-quicksand">
                            Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non. Aliquam metus tortor,
                            auctor id gravida, viverra quis sem. Curabitur non nisl nec nisi maximus. Aenean convallis porttitor.
                            Aliquam interdum at lacus non blandit.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetinTouch;

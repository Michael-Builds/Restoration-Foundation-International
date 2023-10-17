import React from "react";
import {
    Card,
    CardBody,
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    LockClosedIcon,
} from "@heroicons/react/24/solid";
import swal from "sweetalert";

const About = () => {
    const [type, setType] = React.useState("momo");

    const [donateInfo, setDonateInfo] = React.useState({
        email: "",
        fullname: "",
        number: "",
        amount: "",
        email2: "",
        fullname2: "",
        number2: "",
        amount2: "",
    })

    const handleClear = () => {
        setDonateInfo({
            email: "",
            fullname: "",
            number: "",
            amount: "",
            email2: "",
            fullname2: "",
            number2: "",
            amount2: "",

        })
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDonateInfo((prevDonate) => ({
            ...prevDonate,
            [name]: value,
        }));
    };

    const handleCancel = () => {
        swal({
            title: "Are you sure?",
            text: "Once canceled, you will not be able to do this again!",
            icon: "warning",
            buttons: ["No", "Yes"],
            dangerMode: true,
        }).then((willCancel) => {
            if (willCancel) {
                swal("Donation", "Donate withrawn", "warning")
                handleClear();
            }
        });
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
            {/* <div
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
            </div> */}
            <div className="mx-auto flex flex-wrap items-center ml-12">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10 mt-16">
                    <div className="border-l-4 border-yellow-500  pl-2">
                        <h2 className='text-white text-2xl font-quicksand text-yellow-500 font-medium'>Donate Now</h2>
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
                <div className="w-full lg:w-1/2 ">
                    <div className=" ml-0">
                        <Card className="w-full max-w-[24rem] rounded-lg p-2">
                            <CardBody>
                                <Tabs value={type} className="overflow-visible">
                                    <TabsHeader className="relative z-0 p-2 bg-gray-200 mt-4">
                                        <Tab value="momo" onClick={() => setType("momo")} className="font-quicksand p-1 ">
                                            Pay with MoMo
                                        </Tab>
                                        <Tab value="bank" onClick={() => setType("bank")} className="font-quicksand p-1  ">
                                            Pay with Bank
                                        </Tab>
                                    </TabsHeader>
                                    <TabsBody
                                        className="!overflow-x-hidden !overflow-y-visible"
                                        animate={{
                                            initial: {
                                                x: type === "momo" ? 400 : -400,
                                            },
                                            mount: {
                                                x: 0,
                                            },
                                            unmount: {
                                                x: type === "bank" ? 400 : -400,
                                            },
                                        }}
                                    >
                                        <TabPanel value="momo" className="p-2">
                                            <p className="text-center font-quicksand font-medium mt-4">Who is Donating Today?</p>
                                            <form
                                                onSubmit={handleSave}
                                                className="mt-5 flex flex-col gap-4">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    value={donateInfo.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Email Address"
                                                    type="email"
                                                    required
                                                    className="p-2 font-quicksand border border-gray-600 rounded-sm focus:outline-none border-b-2" />
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
                                                    id="number"
                                                    name="number"
                                                    value={donateInfo.number}
                                                    onChange={handleInputChange}

                                                    placeholder="MoMo Number"
                                                    type="tel"
                                                    required
                                                    className="p-2 font-quicksand border border-gray-600 rounded-sm focus:outline-none border-b-2" min="10" />
                                                <input
                                                    id="amount"
                                                    name="amount"
                                                    value={donateInfo.amount}
                                                    onChange={handleInputChange}

                                                    placeholder="Amount"
                                                    type="number"
                                                    required
                                                    className="p-2 font-quicksand border border-gray-600 rounded-sm focus:outline-none border-b-2" min="0" />

                                                <div className="flex items-center justify-center gap-x-6">
                                                    <Button type="submit" size="lg" className="p-4 bg-yellow-500 mt-2 justify-center flex items-center font-quicksand">
                                                        Donate
                                                    </Button>
                                                    <Button
                                                        onClick={handleCancel}
                                                        type="submit" size="lg" className="p-4 bg-gray-500 mt-2 justify-center flex items-center font-quicksand">
                                                        Cancel
                                                    </Button>
                                                </div>

                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                                                >
                                                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                                                    secure and encrypted
                                                </Typography>
                                            </form>
                                        </TabPanel>

                                        <TabPanel value="bank" className="p-2">
                                            <p className="text-center font-quicksand mb-4 mt-4 font-medium">
                                                Who is Donating Today?
                                            </p>
                                            <form
                                                onSubmit={handleSave}
                                                className="mt-5 flex flex-col gap-4">
                                                <input
                                                    id="email2"
                                                    name="email2"
                                                    value={donateInfo.email2}
                                                    onChange={handleInputChange}
                                                    placeholder="Email Address"
                                                    type="email"
                                                    className="p-2 font-quicksand border border-gray-600 rounded-sm focus:outline-none border-b-2" />
                                                <input
                                                    id="fullname2"
                                                    name="fullname2"
                                                    value={donateInfo.fullname2}
                                                    onChange={handleInputChange}
                                                    placeholder="Full Name"
                                                    type="text"
                                                    className="p-2 font-quicksand border border-gray-600 rounded-sm focus:outline-none border-b-2" />
                                                <input
                                                    id="number2"
                                                    name="number2"
                                                    value={donateInfo.number2}
                                                    onChange={handleInputChange}
                                                    placeholder="Bank Number"
                                                    type="tel"
                                                    className="p-2 font-quicksand border border-gray-600 rounded-sm focus:outline-none border-b-2" min="10" />
                                                <input
                                                    id="amount2"
                                                    name="amount2"
                                                    value={donateInfo.amount2}
                                                    onChange={handleInputChange}
                                                    placeholder="Amount"
                                                    type="number"
                                                    className="p-2 font-quicksand border border-gray-600 rounded-sm focus:outline-none border-b-2" min="0" />
                                                <div className="flex items-center justify-center gap-x-6">
                                                    <Button type="submit" size="lg" className="p-4 bg-yellow-500 mt-2 justify-center flex items-center font-quicksand">
                                                        Donate
                                                    </Button>
                                                    <Button
                                                        onClick={handleCancel}
                                                        type="submit" size="lg" className="p-4 bg-gray-500 mt-2 justify-center flex items-center font-quicksand">
                                                        Cancel
                                                    </Button>
                                                </div>

                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                                                >
                                                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                                                    secure and encrypted
                                                </Typography>
                                            </form>
                                        </TabPanel>
                                    </TabsBody>
                                </Tabs>
                            </CardBody>
                        </Card>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;

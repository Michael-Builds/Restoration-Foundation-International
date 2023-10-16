
import React from "react";
import { BiSolidDollarCircle } from 'react-icons/bi';
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


const About = () => {

    const [type, setType] = React.useState("momo");


    return (
        <div className="relative w-full py-12">
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
            <div className="container mx-auto flex flex-wrap items-center">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10 mt-16">
                    <div className="border-l-4 border-white  pl-2">
                        <h2 className='text-white text-2xl font-quicksand'>Donate Now</h2>
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
                        <Card className="w-full max-w-[24rem] rounded-lg">
                            <CardBody>
                                <Tabs value={type} className="overflow-visible">
                                    <TabsHeader className="relative z-0 p-2 bg-gray-300 ">
                                        <Tab value="momo" onClick={() => setType("momo")} >
                                            Pay with MoMo
                                        </Tab>
                                        <Tab value="bank" onClick={() => setType("bank")}>
                                            Pay with Bank
                                        </Tab>
                                    </TabsHeader>
                                    <TabsBody
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
                                            <form className="mt-12 flex flex-col gap-4">

                                                <p className="text-center font-quicksand mb-4">Mobile Details</p>
                                                <Button size="lg" className="p-2 bg-yellow-600 justify-center flex items-center">
                                                    <BiSolidDollarCircle className="mr-2 ml-2" />
                                                    Donate</Button>
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
                                            <form className="mt-12 flex flex-col gap-4">

                                                <p className="text-center font-quicksand mb-4">Bank Details</p>
                                                <Button size="lg" className="p-2 bg-yellow-600 justify-center flex items-center">
                                                    <BiSolidDollarCircle className="mr-2 ml-2" />
                                                    Donate</Button>
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

import React from "react";
import Image from '../../../assets/carousel-3.jpg';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const About = () => {

    const [activeTab, setActiveTab] = React.useState("mission");

    const data = [
        {
            label: "Mission",
            value: "mission",
            desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Vision",
            value: "vision",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Values",
            value: "core-values",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
    ];

    return (
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 mb-16 mt-14">
                <div className="lg:order-1">
                    {/* Left Section */}
                    <div className="left-section md:ml-6  ">
                        <div className="lg:order-2 relative z-2">
                            <div className="about-img relative overflow-hidden p-5 pe-0 ">
                                <div className="absolute top-0 left-0 w-full h-full transform -skew-x-20 z-1"></div>
                                <img className="w-96 md:w-full h-auto relative z-2" src={Image} alt="About Us" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:order-2">
                    {/* Right Section */}
                    <div className="right-section">
                        <div className="lg:order-1 ml-8" >
                            <div className=' border-l-4 border-gold md:-ml-1 -ml-8 max-w-full'>
                                <h1 className="mb-5 text-xl  max-w-[95%] w-full lg:text-2xl ml-3 text-gray-600 font-semibold font-raleway">
                                    Learn About Us
                                </h1>
                            </div>
                            <h1 className="mb-4 md:p-0 md:mb-8 text-3xl lg:text-5xl font-semibold md:ml-0 -ml-8 font-quicksand">
                                Worldwide non-profit charity organization
                            </h1>

                            <p className=" mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                                Our mandate is to train, educate, entertain, develop and nurture (TEEN) the youth in the areas of Health, Environment, Education, Construction,
                                Water and Sanitaion to make them conscious and responsible leaders in their respective communities.
                            </p>

                            <Tabs value={activeTab} className='md:ml-0 -ml-8 md:mb-0 -mb-14'>
                                <TabsHeader
                                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mt-4"
                                    indicatorProps={{
                                        className:
                                            "bg-transparent border-b-2 border-gold shadow-none rounded-none",
                                    }}
                                >
                                    {data.map(({ label, value }) => (
                                        <Tab
                                            key={value}
                                            value={value}
                                            onClick={() => setActiveTab(value)}
                                            className={activeTab === value ? "text-gray-900 md:text-lg text-lg font-quicksand font-semibold text-gold" : "font-quicksand text-lg font-semibold"}
                                        >
                                            {label}
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody>
                                    {data.map(({ value, desc }) => (
                                        <TabPanel key={value} value={value} className="font-quicksand md:text-md text-sm">
                                            {desc}
                                        </TabPanel>
                                    ))}
                                </TabsBody>
                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

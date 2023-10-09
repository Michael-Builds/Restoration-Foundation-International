
import AboutImage from '../../../assets/about.jpg';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import React from 'react'

const About = () => {

    const [activeTab, setActiveTab] = React.useState("about");

    const data = [
        {
            label: "About",
            value: "about",
            desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In vitae pellentesque turpis. Donec in hendrerit dui, vel blandit massa.
            Ut vestibulum suscipit cursus. Cras quis porta nulla, ut placerat risus.
            Aliquam nec magna eget velit luctus dictum. Phasellus et felis sed purus
            tristique dignissim. Morbi sit amet leo at purus accumsan pellentesque.
            Vivamus fermentum nisi vel dapibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        },
        {
            label: "Mission",
            value: "mission",
            desc: ` Sed tincidunt, magna ut vehicula volutpat, turpis diam condimentum justo,
            posuere congue turpis massa in mi. Proin ornare at massa at fermentum.
            Nunc aliquet sed nisi iaculis ornare. Nam semper tortor eget est egestas,
            eu sagittis nunc sodales. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Praesent bibendum sapien sed purus molestie malesuada.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        },
        {
            label: "Vision",
            value: "vision",
            desc: ` Aliquam dolor odio, mollis sed feugiat sit amet, feugiat ut sapien.
            Nunc eu dignissim lorem. Suspendisse at hendrerit enim. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Sed condimentum
            semper turpis vel facilisis. Nunc vel faucibus orci. Mauris ut mauris
            rhoncus, efficitur nisi at, venenatis quam. Praesent egestas pretium
            enim sit amet finibus. Curabitur at erat molestie, tincidunt lorem eget,
            consequat ligula.`,
        },
    ];
    return (
        <div className="relative w-full py-12">
            <div className="container mx-auto flex flex-wrap items-center">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10">
                    <img
                        data-parallax="scroll"
                        src={AboutImage}
                        alt="About Us"
                        width={500}
                        height={110}
                    />
                </div>
                {/* Right Column */}
                <div className="w-full lg:w-1/2 -mt-32">
                    <div className="mb-10 ml-0">
                        <p
                            className='text-2xl font-semibold text-yellow-400 font-quicksand'
                        >Learn About Us</p>
                        <h2 className="text-5xl text-blue-900 font-quicksand mt-6 font-bold">
                            Worldwide non-profit charity organization
                        </h2>
                    </div>
                    <Tabs value={activeTab}>
                        <TabsHeader
                            className="rounded-none border-b border-blue-gray-50 font-quicksand bg-transparent p-0 mb-4"
                            indicatorProps={{
                                className:
                                    "bg-transparent border-b-2 border-yellow-400 shadow-none rounded-none font-quicksand",
                            }}
                        >
                            {data.map(({ label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    className={activeTab === value ? "text-yellow-400 font-quicksand font-semibold " : "font-quicksand text-1xl font-semibold"}
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody >
                            {data.map(({ value, desc }) => (
                                <TabPanel key={value} value={value} className='font-quicksand text-1xl'>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default About;

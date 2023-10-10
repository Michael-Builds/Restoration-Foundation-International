import { GiFruitBowl, GiWaterBottle, GiHealthCapsule, GiTeacher } from 'react-icons/gi';
import { MdMapsHomeWork } from 'react-icons/md';
import { FaPeopleCarry } from 'react-icons/fa';

const services = [
    {
        icon: <GiFruitBowl className='h-14 w-14 text-yellow-500' />,
        title: 'Healthy Food',
        description: 'Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor',
    },
    {
        icon: <GiWaterBottle className='h-14 w-14 text-yellow-500' />,
        title: 'Pure Water',
        description: 'Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor',
    },
    {
        icon: <GiHealthCapsule className='h-14 w-14 text-yellow-500' />,
        title: 'Health Care',
        description: 'Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor',
    },
    {
        icon: <GiTeacher className='h-14 w-14 text-yellow-500' />,
        title: 'Primary Education',
        description: 'Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor',
    },
    {
        icon: <MdMapsHomeWork className='h-14 w-14 text-yellow-500' />,
        title: 'Residence Facilities',
        description: 'Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor',
    },
    {
        icon: <FaPeopleCarry className='h-14 w-14 text-yellow-500' />,
        title: 'Social Care',
        description: 'Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor',
    },
];

const Service = () => {
    return (
        <div className="justify-center align-center mt-6 pb-32">
            <div className="container">
                <div className="text-center mx-auto mb-4">
                    <p className="font-quicksand font-bold text-2xl text-yellow-500 mb-2 ml-[8%]">
                        What We Do?
                    </p>
                    <h2 className=" font-quicksand font-bold text-5xl text-blue-900 mb-4 max-w-[700px] ml-[25%] mt-6">
                        We believe that we can save more lives with you
                    </h2>
                </div>
                <div className="services mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 ml-[6%]">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="service-item flex items-center">
                                <div className="service-icon mb-2">
                                    {service.icon}
                                </div>
                                <div className="border-l-4 border-gray-500 rounded-lg ml-4 pl-4">
                                    <h3 className='font-quicksand font-bold text-2xl text-blue-900 mb-2 '>
                                        {service.title}
                                    </h3>
                                    <p className='mt-2 font-quicksand'>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;

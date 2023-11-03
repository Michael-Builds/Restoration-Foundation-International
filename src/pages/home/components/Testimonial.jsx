import Image from '../../../assets/team.jpeg';

const teamData = [
    {
        name: 'Kabanda Michael',
        role: "Medical Assistant",
        image: Image,
        description: "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."
    },
    {
        name: 'Kabanda Michael',
        role: "Director",
        image: Image,
        description: "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."
    },
    {
        name: 'Kabanda Michael',
        role: "Accountant",
        image: Image,
        description: "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."
    },
    {
        name: 'Kabanda Michael',
        role: "Medical Assistant",
        image: Image,
        description: "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non."
    },
];

const Testimonial = () => {
    return (
        <div className='justify-center align-center mt-2 pb-16'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-yellow-500 mb-2 ">
                        Testimonial
                    </p>
                    <h2 className=" font-quicksand font-bold md:text-5xl text-3xl text-gray-600 mb-4 md:max-w-[700px] md:ml-[25%] mt-6 md:p-0 p-2">
                        What people are talking about our charity activities
                    </h2>
                </div>
            </div>
            <div className="flex justify-center p-2 mt-8">
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                    {teamData.map((team, index) => (
                        <div key={index} className="m-4 rounded-md relative pb-16 flex items-center border border-gold border-b-4 p-6">
                            <div className="w-1/2 pb-2 border-gray-300 flex items-center">
                                <img src={team.image} alt={`Team-${index + 1}`} className="w-24 rounded-xl h-24 object-cover object-center" />
                            </div>
                            <div className="w-1/2 pl-2">
                                <h2 className='text-blue-900 font-quicksand text-sm font-semibold'>{team.name}</h2>
                                <p className='mt-2 font-quicksand text-sm font-medium text-gray-600'>{team.role}</p>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

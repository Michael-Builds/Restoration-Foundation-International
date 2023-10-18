import Image from '../../../assets/carousel-2.jpg';

const teamData = [
    {
        name: 'Bernard Tay',
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
        name: 'Chris Seshie',
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
        <div className='justify-center align-center mt-8 pb-16'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-yellow-500 mb-2 ">
                        Testimonial
                    </p>
                    <h2 className="font-quicksand font-bold text-5xl text-blue-900 mb-4 max-w-[800px] ml-[25%] mt-6">
                        What people are talking about our charity activities
                    </h2>
                </div>
            </div>

            <div className="flex justify-center p-2 mt-8 relative">
                {teamData.map((team, index) => (
                    <div key={index} className="m-4 rounded-md relative pb-16  w-[20rem] flex items-center border border-gray-400 border-b-4 p-6">
                        <div className="w-1/2 border-b-2 pb-2 border-gray-300 flex itemz-center">
                            <img src={team.image} alt={`Team-${index + 1}`} className="w-24 rounded-xl h-24 object-cover object-center" />
                        </div>
                        <div className="w-1/2 pl-2">
                            <h2 className='text-blue-900 font-quicksand text-sm font-semibold '>{team.name}</h2>
                            <p className='mt-2 font-quicksand text-sm font-medium text-gray-600'>{team.role}</p>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    );
};

export default Testimonial;

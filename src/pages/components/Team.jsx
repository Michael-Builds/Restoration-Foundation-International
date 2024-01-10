import { HiBadgeCheck } from "react-icons/hi";
import React from 'react';
import Michael from '../../assets/team/Michael.png';
import Christopher from '../../assets/team/Christopher.png';
import Doris from '../../assets/team/Doris.png';
import Elorm from '../../assets/team/Elorm.png';
import Enam from '../../assets/team/Enam.png';
import Franklin from '../../assets/team/Franklin.png';
import Katahene from '../../assets/team/Katahene.png';
import Martha from '../../assets/team/Martha.png';
import Sitsofe from '../../assets/team/Sitsofe.png';
import William from '../../assets/team/William.png';
import George from '../../assets/team/George.png';
import Vincent from '../../assets/team/Vincent.png';
import Isaac from '../../assets/team/Isaac.png';
    
const teamData = [
    {
        name: 'Dr. George Tesilimi Banji ',
        role: "Librarian and Lecturer at HTU",
        role2: "Board Member",
        image: George,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Vincent Kwasi Agbi',
        role: "Banker with Cal Bank, ",
        role2: "Board Member",
        image: Vincent,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Christopher Kwame Heletsi',
        role: "Educationist at E.P Church",
        role2: "Board Member",
        image: Christopher,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Isaac Kwasi Nyampong ',
        role: "Metallurgist in the Mining Industry",
        role2: "Board Member",
        image: Isaac,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'William Kojo Amoabeng',
        role: "Founder and President of RFI",
        role2: "Board Member",
        image: William,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Doris Esinam Amoabeng',
        role: "CEO of Ambassadors Academy",
        role2: "Board Member",
        image: Doris,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Mrs. Sitsofe Kumoji',
        role: "Lecturer at Taviefe S.H.S",
        role2: "Board Member",
        image: Sitsofe,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Mrs. Martha Gato-Lagle',
        role: "Enterpreneur and Political Activist",
        role2: "Board Member",
        image: Martha,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Mr. Mawuli Katahene',
        role: "Cheer Leader for MTN Ghana",
        role2: "Board Member",
        image: Katahene,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Kabanda Kpanti Michael',
        role: "IT Specialist / Software developer",
        role2: "Admin Team",
        image: Michael,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Pastor Franklin Wunake',
        role: "Programmes and Events Speclialist",
        role2: "Admin Team",
        image: Franklin,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Elorm Amoabeng',
        role: "Logistics Specialist",
        role2: "Admin Team",
        image: Elorm,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Enam Amoabeng',
        role: "Protocol Specialist",
        role2: "Admin Team",
        image: Enam,
        badge: <HiBadgeCheck />,
    },
];

const Team = () => {

    const initialDisplayCount = 4;
    const [displayCount, setDisplayCount] = React.useState(initialDisplayCount);

    const handleViewMore = () => {
        setDisplayCount(displayCount + initialDisplayCount);
    };

    return (
        <div className='justify-center align-center mt-8 pb-16'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-green mb-2 ">
                        Meet Our Team
                    </p>
                    <h2 className=" font-quicksand font-bold md:text-5xl text-3xl text-gray-600 mb-4 md:max-w-[700px] md:ml-[25%] mt-6 md:p-0 p-2">
                        Awesome guys behind our charity activities
                    </h2>
                </div>
            </div>
            <div className="flex justify-center p-2 mt-8 relative">
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                    {teamData.slice(0, displayCount).map((team, index) => (
                        <div key={index} className="m-4 rounded-md relative pb-16">
                            <img src={team.image} alt={`Team-${index + 1}`} className="w-full h-full object-cover object-center" />
                            <div className="w-[70%] h-32 absolute bottom-0 left-1/2 pb-8 transform -translate-x-1/2 bg-white border-green border-b-4 rounded-md text-center">
                                <h2 className=' font-quicksand mt-4 text-sm font-bold'>{team.name}</h2>
                                <div className='flex items-center justify-center mt-3'>
                                    <p className='font-quicksand font-medium text-sm text-gray-600'>{team.role2}</p>
                                    <p className='ml-4 items-center text-green'>{team.badge}</p>
                                </div>
                                <p className='mt-3 font-quicksand text-xs font-medium text-gray-600'>{team.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {displayCount < teamData.length && (
                <div className='flex justify-center mt-4'>
                    <button
                        className='px-4 py-2 bg-green hover:bg-primary text-white rounded-sm font-quicksand'
                        onClick={handleViewMore}
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Team;

import Image from '../../../assets/team.jpeg';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';

const teamData = [
    {
        name: 'Kabanda Michael',
        role: "Software Developer",
        image: Image,
        socialLinks: {
            facebook: 'https://www.facebook.com/michael.kabanda',
            instagram: 'https://www.instagram.com/michael.kabanda',
            linkedin: 'https://www.linkedin.com/in/michael-kabanda',
            twitter: 'https://twitter.com/michaelkabanda',
        },
    },
    {
        name: 'Kabanda Daniel',
        role: "Director",
        image: Image,
        socialLinks: {
            facebook: 'https://www.facebook.com/daniel.kabanda',
            instagram: 'https://www.instagram.com/daniel.kabanda',
            linkedin: 'https://www.linkedin.com/in/daniel-kabanda',
            twitter: 'https://twitter.com/danielkabanda',
        },
    },
    {
        name: 'Kabanda Suzzy',
        role: "Accountant",
        image: Image,
        socialLinks: {
            facebook: 'https://www.facebook.com/suzzy.kabanda',
            instagram: 'https://www.instagram.com/suzzy.kabanda',
            linkedin: 'https://www.linkedin.com/in/suzzy-kabanda',
            twitter: 'https://twitter.com/suzzykabanda',
        },
    },
    {
        name: 'Kabanda Blessing',
        role: "Medical Assistant",
        image: Image,
        socialLinks: {
            facebook: 'https://www.facebook.com/blessing.kabanda',
            instagram: 'https://www.instagram.com/blessing.kabanda',
            linkedin: 'https://www.linkedin.com/in/blessing-kabanda',
            twitter: 'https://twitter.com/blessingkabanda',
        },
    },
];

const Team = () => {
    return (
        <div className='justify-center align-center mt-8 pb-16'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-yellow-500 mb-2 ">
                        Meet Our Team
                    </p>
                    <h2 className=" font-quicksand font-bold text-5xl text-blue-900 mb-4 max-w-[700px] ml-[25%] mt-6">
                        Awesome guys behind our charity activities
                    </h2>
                </div>
            </div>

            <div className="flex justify-center p-2 mt-8 relative ">
                {teamData.map((team, index) => (
                    <div key={index} className="m-4 rounded-md relative pb-16  ">
                        <img src={team.image} alt={`Team-${index + 1}`} className="w-full h-full object-cover object-center" />
                        <div className="w-[60%] h-32 absolute bottom-0 left-1/2 pb-8 transform -translate-x-1/2 bg-white border-yellow-500 border-b-4 rounded-md text-center">
                            <h2 className='text-blue-900 font-quicksand mt-4 text-md font-semibold'>{team.name}</h2>
                            <p className='mt-2 font-quicksand font-medium text-gray-600'>{team.role}</p>
                            <div className="flex justify-center mt-5">
                                <a href={team.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                                    <BiLogoFacebook className="text-blue-500 mx-2 text-lg hover:text-gray-500 " />
                                </a>
                                <a href={team.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                    <BiLogoInstagram className="text-pink-500 mx-2 text-lg hover:text-gray-500" />
                                </a>
                                <a href={team.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                    <BiLogoLinkedin className="text-blue-600 mx-2 text-lg hover:text-gray-500 " />
                                </a>
                                <a href={team.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                    <BiLogoTwitter className="text-blue-400 mx-2 text-lg hover:text-gray-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;

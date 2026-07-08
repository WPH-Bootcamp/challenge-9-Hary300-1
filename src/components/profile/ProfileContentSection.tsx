import Image from 'next/image';
import avatar from '@/assets/icons/avatar-icon.svg';
import { Button } from '../ui/button';
import { ProfileData } from '@/features/profile/types';

const ProfileContent = ({ profileData }: { profileData: ProfileData }) => {
  const profileContent = [
    {
      id: 1,
      title: 'Name',
      content: profileData.name,
    },
    {
      id: 2,
      title: 'Email',
      content: profileData.email,
    },
    {
      id: 3,
      title: 'Nomor Handphone',
      content: profileData.phone,
    },
  ];

  return (
    <section
      id='profile-content'
      className='flex flex-col gap-4 lg:gap-6 w-full'
    >
      <h1 className='font-extrabold text-display-xs lg:text-display-md'>
        Profile
      </h1>
      <div className='flex flex-col gap-6 rounded-2xl p-4 w-full lg:max-w-131 bg-white shadow-[0_0_20px_0_#CBCACA40]'>
        <div className='relative size-[64px]'>
          <Image
            src={avatar}
            alt='avatar'
            fill
            className='object-cover object-center'
          />
        </div>
        {profileContent.map((item) => (
          <div key={item.id} className='flex justify-between'>
            <p className='font-medium text-sm lg:text-md'>{item.title}</p>
            <p className='font-bold text-sm lg:text-md'>{item.content}</p>
          </div>
        ))}

        <Button>Update Profile</Button>
      </div>
    </section>
  );
};

export default ProfileContent;

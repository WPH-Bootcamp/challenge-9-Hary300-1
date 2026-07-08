import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import avatar from '@/assets/icons/avatar-icon.svg';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { authStore } from '@/features/auth/store/auth-store';
import Link from 'next/link';

const UserMenuContent = ({ useLightNavbar }: { useLightNavbar: boolean }) => {
  const user = authStore((state) => state.user);
  const router = useRouter();
  const logout = authStore((state) => state.logout);
  const handleLogoutClick = () => {
    router.push('/auth');
    toast.success('Logout successfully');
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center gap-4 cursor-pointer'>
          <Image src={avatar} alt='avatar' loading='eager' />
          <p
            className={`hidden md:block font-semibold leading-lg lg:text-lg ${useLightNavbar ? '' : 'text-white'}`}
          >
            {user?.name}
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex flex-col gap-3 p-4'>
        <DropdownMenuItem>
          <div
            className='flex items-center gap-4 cursor-pointer'
            onClick={() => router.push('/profile')}
          >
            <Image src={avatar} alt='avatar' loading='eager' />
            <p className={`font-bold leading-md text-md`}>{user?.name}</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href={'/profile?page=address'}
            className='cursor-pointer flex gap-2'
          >
            <svg
              width='15'
              height='19'
              viewBox='0 0 15 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.49992 9.99992C8.88063 9.99992 9.99992 8.88063 9.99992 7.49992C9.99992 6.11921 8.88063 4.99992 7.49992 4.99992C6.11921 4.99992 4.99992 6.11921 4.99992 7.49992C4.99992 8.88063 6.11921 9.99992 7.49992 9.99992Z'
                stroke='currentColor'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M7.49992 17.4999C10.8333 14.1666 14.1666 11.1818 14.1666 7.49992C14.1666 3.81802 11.1818 0.833252 7.49992 0.833252C3.81802 0.833252 0.833252 3.81802 0.833252 7.49992C0.833252 11.1818 4.16659 14.1666 7.49992 17.4999Z'
                stroke='currentColor'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span className='font-medium text-sm '>Delivery Address</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={'/profile?page=orders'}
            className='cursor-pointer flex gap-2'
          >
            <svg
              width='15'
              height='19'
              viewBox='0 0 15 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.16659 1.05811V4.50022C9.16659 4.96693 9.16659 5.20029 9.25741 5.37855C9.33731 5.53535 9.46479 5.66283 9.62159 5.74273C9.79985 5.83356 10.0332 5.83356 10.4999 5.83356H13.942M9.16659 13.3335H4.16659M10.8333 10.0002H4.16659M14.1666 7.49035V13.5002C14.1666 14.9003 14.1666 15.6004 13.8941 16.1351C13.6544 16.6055 13.272 16.988 12.8016 17.2277C12.2668 17.5002 11.5667 17.5002 10.1666 17.5002H4.83325C3.43312 17.5002 2.73306 17.5002 2.19828 17.2277C1.72787 16.988 1.34542 16.6055 1.10574 16.1351C0.833252 15.6004 0.833252 14.9003 0.833252 13.5002V4.8335C0.833252 3.43336 0.833252 2.7333 1.10574 2.19852C1.34542 1.72811 1.72787 1.34566 2.19828 1.10598C2.73306 0.833496 3.43312 0.833496 4.83325 0.833496H7.50973C8.12121 0.833496 8.42695 0.833496 8.71466 0.902571C8.96975 0.963813 9.21362 1.06482 9.4373 1.2019C9.68959 1.3565 9.90578 1.57269 10.3382 2.00507L12.995 4.66192C13.4274 5.0943 13.6436 5.31049 13.7982 5.56278C13.9353 5.78646 14.0363 6.03033 14.0975 6.28542C14.1666 6.57314 14.1666 6.87887 14.1666 7.49035Z'
                stroke='currentColor'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span className='font-medium text-sm '>My Orders</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem variant='destructive' onClick={handleLogoutClick}>
          <svg
            width='19'
            height='19'
            viewBox='0 0 19 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.3851 13.3333C14.9442 15.8241 12.2511 17.4999 9.16658 17.4999C4.56421 17.4999 0.833252 13.769 0.833252 9.16659C0.833252 4.56421 4.56421 0.833252 9.16658 0.833252C12.2511 0.833252 14.9442 2.50908 16.3851 4.99992M9.16664 12.4999L5.83331 9.16659L9.16664 5.83325M5.83331 9.16659H17.5'
              stroke='currentColor'
              strokeWidth='1.66667'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='font-medium text-sm '>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenuContent;

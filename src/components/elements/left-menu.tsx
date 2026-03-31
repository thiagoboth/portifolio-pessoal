import Image from 'next/image';
import githubLogo from '../../../public/github-logo.svg';

export const LeftMenu = () => {
  return (
    <div
      className={
        'hidden lg:flex fixed w-[106px] z-50 top-0 left-0 h-screen bg-white border-r border-gray/20 flex-col justify-between items-center'
      }
    >
      <Image src="/logo.svg" alt="Logo" width={13} height={23} className="w-12 mt-5" />

      <div className={'mb-13 flex flex-col justify-between items-center gap-7'}>
        <Image src="/linkedin-logo.svg" alt="Linkedin" width={13} height={23} className="w-6" />
        <Image src="/instagram-logo.svg" alt="Instagram" width={13} height={23} className="w-6" />
        <Image src="/github-logo.svg" alt="GitHub" width={13} height={23} className="w-6" />
      </div>
    </div>
  );
};

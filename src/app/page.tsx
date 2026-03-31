import { TopNav } from '@/components/TopNav';
import { Home } from '@/components/Home';
import { Navbar } from '@/components/NavbarTest';
import { LeftMenu } from '@/components/elements/left-menu';

export default function Page() {
  return (
    <>
      {/*<Navbar />*/}
      <LeftMenu />
      <div className={'lg:ml-[106px]'}>
        <TopNav />
        <Home />
      </div>
    </>
  );
}

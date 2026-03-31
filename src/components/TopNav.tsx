'use client';
import Image from 'next/image';
import { MenuIcon } from '@/components/icons/menu-icon';
import { LeftMenu } from '@/components/elements/left-menu';
import { useState } from 'react';
import { text } from 'node:stream/consumers';

type NavItem = {
  href: '#' | '#sobre-mim' | '#projetos' | '#contato' | undefined;
  text: 'início' | 'sobre mim' | 'projetos' | 'contato' | undefined;
};

const navItems: NavItem[] = [
  { href: '#', text: 'início' },
  { href: '#sobre-mim', text: 'sobre mim' },
  { href: '#projetos', text: 'projetos' },
  { href: '#contato', text: 'contato' },
];

export function TopNav() {
  const [isNavItemSelected, setIsNavItemSelected] = useState<NavItem['href']>(undefined);

  return (
    <nav className="w-full sticky top-0 z-50 flex justify-between items-center p-2">
      <div className={'flex items-center lg:hidden'}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={13}
          height={23}
          className="w-8 h-10 object-contain"
        />

        <div className={'ml-1'}>
          <p className="font-gothic text-lg">Thiago Botelho</p>
          <p className="font-calibri text-xs">DESENVOLVEDOR, UX/UI DESIGNER</p>
        </div>
      </div>

      <div className={'flex items-center gap-1 bg-red cursor-pointer group lg:hidden'}>
        <p className="font-calibri text-lg text-gray group-active:text-gray-light transition-colors">
          Menu
        </p>
        <MenuIcon />
      </div>

      <div className={'hidden lg:flex justify-center items-center w-full mt-4'}>
        <ul className="flex gap-24">
          {navItems.map(item => (
            <li key={item.text}>
              <a
                href={item.href}
                className={
                  isNavItemSelected === item.href ? 'underline font-bold underline-offset-4' : ''
                }
                onClick={() => setIsNavItemSelected(item.href)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

"use client"
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b px-4 py-2 flex items-center justify-between">
      {/* Logo (igual em todos) */}
      <div className="font-bold text-lg">MinhaLogo</div>

      {/* Botão de menu (hamburger) - só aparece no MOBILE */}
      <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        {/* Ícone sandwich */}
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      {/* Mobile menu (vertical) */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center 
          gap-8 text-xl font-semibold
          transition-all
          ${open ? 'block' : 'hidden'}
          lg:hidden
        `}
      >
        <button className="absolute top-8 right-8 text-3xl" onClick={() => setOpen(false)}>
          ×
        </button>
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </div>

      {/* Menu DESKTOP (horizontal) - só aparece no desktop */}
      <div className="hidden lg:flex gap-8 text-base font-semibold">
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </div>
    </nav>
  );
}

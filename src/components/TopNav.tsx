"use client";
import Image from "next/image";

export default function TopNav() {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray/20 bg-white/80 flex items-center p-2">
            <Image
                src="/logo.svg"
               alt="Logo"
               width={13}
               height={23}
               className="w-4 h-6 object-contain"
            />

            <div className={"ml-1"}>
                <p className="font-gothic [font-size:8px]">Thiago Botelho</p>
                <p className="font-calibri [font-size:10px]">DESENVOLVEDOR, UX/UI DESIGNER</p>
            </div>
        </nav>
    );
}

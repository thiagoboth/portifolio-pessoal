"use client";
import Image from "next/image";
import {MenuIcon} from "@/components/icons/menu-icon";

export default function TopNav() {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray/20 bg-white/80 flex justify-between items-center p-2">
            <div className={"flex items-center"}>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={13}
                    height={23}
                    className="w-8 h-10 object-contain"
                />

                <div className={"ml-1"}>
                    <p className="font-gothic text-lg">Thiago Botelho</p>
                    <p className="font-calibri text-xs">DESENVOLVEDOR, UX/UI DESIGNER</p>
                </div>
            </div>

            <div className={"flex items-center gap-1 bg-red cursor-pointer group"}>
                <p className="font-calibri text-lg text-gray group-active:text-gray-light transition-colors">Menu</p>
                <MenuIcon />
            </div>
        </nav>
    );
}

"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import adofLogo from "@/assets/adof_logo.png";

export function NavbarMenu() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full flex items-center justify-between px-4 md:px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={adofLogo} alt="ADOF Logo" className="h-6 md:h-8 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <Menu setActive={setActive}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="System"
            href="#system"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Solutions"
            href="#solutions"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Results"
            href="#results"
          ></MenuItem>
        </Menu>
      </div>

      {/* Mobile Menu Button */}
      {/* <div className="md:hidden">
        <button className="text-white p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div> */}

      {/* CTA Button */}
      <a
        href="https://wa.me/message/JNSZQCPLZ4KNM1 "
        className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-200"
      >
        Schedule Call
      </a>
    </div>
  );
}

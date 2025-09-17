"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,

  item,
  children,
  href,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.a
        href={href}
        transition={{ duration: 0.3 }}
        onClick={(e) => {
          e.preventDefault();

          const targetId = href.replace("#", ""); // href="#system" => "system"

          if (window.location.pathname !== "/") {
            // ✅ Agar dusre page pe ho to pehle "/" pe bhej do aur hash set karo
            window.location.href = `/#${targetId}`;
          } else {
            // ✅ Agar already home page pe ho to smooth scroll karo
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
              history.pushState(null, "", `#${targetId}`);
            }
          }
        }}
        className="cursor-pointer text-white/90 hover:text-white text-sm font-medium"
      >
        {item}
      </motion.a>

     
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-white/10 bg-black/20 backdrop-blur-sm shadow-lg flex justify-center space-x-8 px-6 py-3"
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({
  children,
  to,
  ...rest
}: {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}) => {
  return (
    <Link
      to={to}
      {...rest}
      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
    >
      {children}
    </Link>
  );
};

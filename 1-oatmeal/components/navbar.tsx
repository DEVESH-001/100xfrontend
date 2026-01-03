"use client";

import Link from "next/link";
import Container from "./container";
import { Button } from "./ui/button";
import { IconMenu, IconX } from "@tabler/icons-react";
import { useState } from "react";

export const Navbar = () => {
  return (
    <div>
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export const DesktopNavbar = () => {
  const navlinks = [
    {
      name: "Pricing",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Docs",
      href: "#",
    },
  ];
  return (
    <Container className="hidden items-center justify-between py-6 md:flex lg:flex">
      <div className="flex items-center gap-6">
        {navlinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="cursor-pointer text-sm text-neutral-950 dark:text-neutral-100"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* logo */}
      <h1 className="cursor-pointer text-2xl font-semibold tracking-tight">
        Oatmeal.
      </h1>

      <div className="flex items-center gap-6 text-sm">
        <button className="cursor-pointer">Log in</button>
        <Button className="cursor-pointer">Get Started</Button>
      </div>
    </Container>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const navlinks = [
    { name: "Pricing", href: "#" },
    { name: "About", href: "#" },
    { name: "Docs", href: "#" },
  ];

  return (
    <>
      {/* Top navbar */}
      <Container className="py-4 md:hidden">
        <div className="flex items-center justify-between">
          <h1 className="cursor-pointer text-xl font-semibold tracking-tight">
            Oatmeal.
          </h1>

          {!open && (
            <div className="flex items-center gap-6 text-sm">
              <button className="text-neutral-600 dark:text-neutral-300">
                Log in
              </button>
              <Button>Get Started</Button>
              <button onClick={() => setOpen(true)}>
                <IconMenu className="size-5 cursor-pointer" />
              </button>
            </div>
          )}
        </div>
      </Container>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-neutral-950 text-white">
          <Container className="py-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="cursor-pointer text-xl font-semibold tracking-tight">
                Oatmeal.
              </h1>
              <button onClick={() => setOpen(false)}>
                <IconX className="size-6 cursor-pointer" />
              </button>
            </div>

            {/* Links */}
            <nav className="mt-16 flex flex-col gap-8">
              {navlinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="cursor-pointer text-3xl font-medium tracking-tight transition hover:opacity-80"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </>
  );
};

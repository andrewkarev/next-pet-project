'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(({ href, label }) => {
        const isActive = href === pathname;

        return (
          <Link key={label} href={href} className={isActive ? 'active' : ''}>
            {label}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;

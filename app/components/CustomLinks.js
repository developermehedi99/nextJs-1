"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const CustomLinks = ({path, children}) => {
    const pathName = usePathname();
    const active = pathName === path;
    return (
        <Link className={active ? "text-red-400" : ""} href={path}>{children}</Link>
    );
};

export default CustomLinks;
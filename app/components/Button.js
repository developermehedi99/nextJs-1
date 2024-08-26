"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Button = () => {
    const router = useRouter();
    const handleClick=()=>{
        router.push("/dashboard/analysis")
    }
    return (
        <button className='bg-blue-400 py-2 px-3 rounded-md mt-4' onClick={handleClick}>Go to analysis</button>
    );
};

export default Button;
import Button from '@/app/components/Button';
import Link from 'next/link';
import React from 'react';

const Setting = ({children}) => {
    return (
        <div>
            <h1 className="text-5xl">Setting page</h1>
            <p className="mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum cumque doloremque quibusdam, laboriosam harum, ratione explicabo magni dolorem ipsa, quae obcaecati maiores?</p>

        <Button >{children}</Button>
            {/* <button className='bg-blue-400 py-2 px-3 rounded-md mt-4'><Link href="/dashboard/analysis">go to analysis</Link></button> */}
        </div>
    );
};

export default Setting;
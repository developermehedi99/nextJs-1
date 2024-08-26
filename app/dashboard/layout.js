import React from 'react';
export const metadata = {
    title: "Dashboard page",
    description: "dashboard page description",
  };
const layout = ({children}) => {
    return (
        <div>
            <ul className='flex gap-3 mb-6'>
                <li>Setting</li>
                <li>analysis</li>
            </ul>
            {children}
        </div>
    );
};

export default layout;
import Image from "next/image";
import React, { ReactElement } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = (): ReactElement => {
    return (
        <div>
            {/* Left */}
            <div className='flex items-center'>
                <Image
                    width={40}
                    height={40}
                    alt='facebook logo'
                    src='https://links.papareact.com/5me'
                />

                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <MagnifyingGlassIcon className='h-6 text-gray-600' />

                    <input
                        type='text'
                        placeholder='Search Facebook'
                        className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500'
                    />
                </div>
            </div>

            {/* Center */}

            {/* Right */}
        </div>
    );
};

export default Header;

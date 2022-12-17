import Image from "next/image";
import { ReactElement } from "react";

import {
    FlagIcon,
    MagnifyingGlassIcon,
    PlayIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/24/solid";

import HeaderIcon from "./HeaderIcon";

const Header = (): ReactElement => {
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
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
                        className='flex ml-2 flex-shrink items-center bg-transparent outline-none placeholder-gray-500'
                    />
                </div>
            </div>

            {/* Center */}
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Right */}
        </div>
    );
};

export default Header;

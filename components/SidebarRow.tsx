import Image from "next/image";
import { ReactElement } from "react";
import { HeroIcon } from "typings";

type Props = {
    title: string;
    Icon?: HeroIcon;
    src?: string | null;
};
const SidebarRow = ({ Icon, src, title }: Props): ReactElement => {
    if (src && Icon) {
        throw new Error(
            "One of Icon or src should pass, @SidebarRow Component, Remove src or Icon"
        );
    }

    return (
        <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
            {src && (
                <Image
                    src={src}
                    width={30}
                    height={30}
                    alt={title}
                    className='rounded-full'
                />
            )}

            {Icon && <Icon className='h-8 w-8 text-blue-500' />}

            <p className='hidden sm:inline-flex font-medium'>{title}</p>
        </div>
    );
};

export default SidebarRow;

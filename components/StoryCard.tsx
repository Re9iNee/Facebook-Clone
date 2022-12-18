import Image from "next/image";
import { ReactElement } from "react";

type Props = {
    src: string;
    name: string;
    profile: string;
};
const StoryCard = ({ src, name, profile }: Props): ReactElement => {
    return (
        <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-36 cursor-pointer overflow-x p-3 transition-duration-200 transform ease-in hover:scale-105 hover:animate-pulse grid'>
            <Image
                width={40}
                height={40}
                src={profile}
                alt='story owner profile picture'
                className='w-16 h-16 absolute opacity-0 lg:opacity-100 rounded-full z-50 top-2 border-blue-500 border-4 ml-2'
            />
            <Image
                fill
                src={src}
                alt='story content image'
                className='object-cover filter brightness-75 rounded-xl lg:rounded-3xl'
            />

            <h4 className='hidden lg:inline absolute z-50 bottom-2 text-center text-white justify-self-center'>
                {name}
            </h4>
        </div>
    );
};

export default StoryCard;

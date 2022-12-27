import Image from "next/image";
import React, { ReactElement } from "react";

type Props = {
    src: string;
    name: string;
};
const Contact = ({ src, name }: Props): ReactElement => {
    return (
        <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
            <Image
                src={src}
                width={50}
                height={50}
                alt='contact image'
                className='rounded-full'
                style={{ objectFit: "cover" }}
            />

            <p>{name}</p>

            <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full'></div>
        </div>
    );
};

export default Contact;

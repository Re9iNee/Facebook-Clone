import { useSession } from "next-auth/react";
import Image from "next/image";
import { FormEvent, ReactElement } from "react";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

const InputBox = (): ReactElement => {
    const { data } = useSession();

    const sendPost = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted");
    };

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image
                    width={40}
                    height={40}
                    alt={"user profile"}
                    className='rounded-full'
                    src={data?.user?.image ?? ""}
                />
                <form className='flex flex-1' onSubmit={(e) => sendPost(e)}>
                    <input
                        type='text'
                        placeholder={`What's going on your mind, ${data?.user?.name}`}
                        className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                    />
                </form>
            </div>

            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500' />
                    <p className='text-xs sm:text-sm xl:text-base'>
                        Live Video
                    </p>
                </div>

                <div className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400' />
                    <p className='text-xs sm:text-sm xl:text-base'>
                        Photo/Video
                    </p>
                </div>

                <div className='inputIcon'>
                    <FaceSmileIcon className='h-7 text-yellow-300' />
                    <p className='text-xs sm:text-sm xl:text-base'>
                        Feeling/Activity
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InputBox;

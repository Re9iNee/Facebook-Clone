import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {
    ChangeEventHandler,
    FormEvent,
    ReactElement,
    useRef,
    useState,
} from "react";

import {
    addDoc,
    collection,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import {
    getStorage,
    ref,
    uploadString,
    getDownloadURL,
} from "firebase/storage";
import { db } from "../firebase";

const InputBox = (): ReactElement => {
    const { data } = useSession();

    const inputRef = useRef<HTMLInputElement>(null);
    const filePickerRef = useRef<HTMLInputElement>(null);

    const [image, setImage] = useState<
        ArrayBuffer | string | null | undefined
    >();

    const sendPost = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const inputValue = inputRef.current?.value;
        if (!inputValue) return;

        const postsRef = collection(db, "posts");
        const doc = await addDoc(postsRef, {
            message: inputValue,
            name: data?.user?.name,
            email: data?.user?.email,
            image: data?.user?.image,
            timestamp: serverTimestamp(),
        });

        inputRef.current.value = "";
        console.log("Post inserted into database with the id of ", doc.id, doc);
    };

    const addImageToPost: ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = (readerEvent) => {
            const result = readerEvent.target?.result;

            setImage(result);
        };
    };

    const removeImage = () => {
        setImage(null);
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
                        ref={inputRef}
                        placeholder={`What's going on your mind, ${data?.user?.name}`}
                        className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                    />
                </form>

                {image && (
                    <div
                        onClick={() => removeImage()}
                        className='flex flex-col filter hover:brightness-110 transition-duration-150 transform hover:scale-105 cursor-pointer'
                    >
                        <picture>
                            <img
                                src={String(image)}
                                alt='Image to be upload'
                                className='h-10 object-contain'
                            />
                        </picture>
                        <p className='text-xs text-red-500 text-center'>
                            Remove
                        </p>
                    </div>
                )}
            </div>

            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500' />
                    <p className='text-xs sm:text-sm xl:text-base'>
                        Live Video
                    </p>
                </div>

                <div
                    className='inputIcon'
                    onClick={() => filePickerRef.current?.click()}
                >
                    <CameraIcon className='h-7 text-green-400' />
                    <p className='text-xs sm:text-sm xl:text-base'>
                        Photo/Video
                    </p>
                    <input
                        hidden
                        type='file'
                        ref={filePickerRef}
                        onChange={(ev) => addImageToPost(ev)}
                    />
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
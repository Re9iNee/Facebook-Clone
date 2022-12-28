import Image from "next/image";
import { ReactElement } from "react";
import { Post } from "typings";

import {
    ShareIcon,
    HandThumbUpIcon,
    ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const Post = ({
    authorImage,
    timestamp,
    name,
    message,
    postImage,
}: Post): ReactElement => {
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-xl'>
                <div className='flex items-center space-x-2'>
                    <Image
                        className='rounded-full'
                        src={authorImage}
                        width={40}
                        height={40}
                        alt='Author '
                    />
                    <div>
                        <p>{name}</p>

                        <p className='text-xs text-gray-400'>
                            {timestamp
                                ? new Date(timestamp?.toDate()).toLocaleString()
                                : "-"}
                        </p>
                    </div>
                </div>

                <p className='pt-4'>{message}</p>
            </div>

            {postImage && (
                <div className='relative h-56 md:h-96 bg-white'>
                    <Image src={postImage ?? ""} fill alt='Post Image' />
                </div>
            )}

            {/* Footer of post */}
            <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <HandThumbUpIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Like</p>
                </div>

                <div className='inputIcon rounded-none'>
                    <ChatBubbleBottomCenterTextIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>

                <div className='inputIcon rounded-none rounded-br-2xl'>
                    <ShareIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </div>
        </div>
    );
};

export default Post;

import { ReactElement } from "react";
import { Post } from "typings";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

type Props = {
    posts: Post[];
};
const Feed = ({ posts }: Props): ReactElement => {
    return (
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                <Stories />
                <InputBox />
                <Posts posts={posts} />
            </div>
        </div>
    );
};

export default Feed;

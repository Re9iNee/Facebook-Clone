import { db } from "@firebaseConfig";
import { collection, Query, query } from "firebase/firestore";
import { ReactElement } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Post as PostModel } from "typings";
import Post from "./Post";

const Posts = (): ReactElement => {
    const [realTimePosts, loading, error] = useCollectionData<PostModel>(
        collection(db, "posts")
    );

    return (
        <div>
            {realTimePosts?.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    );
};

export default Posts;

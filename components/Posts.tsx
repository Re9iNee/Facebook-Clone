import { db } from "@firebaseConfig";
import { collection, orderBy, query } from "firebase/firestore";
import { ReactElement } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Post as PostModel } from "typings";
import Post from "./Post";

type Props = {
    posts: PostModel[];
};
const Posts = ({ posts }: Props): ReactElement => {
    const q = query<PostModel>(
        collection(db, "posts"),
        orderBy("timestamp", "desc")
    );
    const [realTimePosts, loading, error] = useCollectionData<PostModel>(q);

    return (
        <div>
            {realTimePosts
                ? realTimePosts.map((post) => <Post key={post.id} {...post} />)
                : posts.map((post) => <Post key={post.id} {...post} />)}
        </div>
    );
};

export default Posts;

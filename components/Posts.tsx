import { db } from "@firebaseConfig";
import { collection, query } from "firebase/firestore";
import { ReactElement } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Post as PostModel } from "typings";
import Post from "./Post";

type Props = {
    posts: PostModel[];
};
const Posts = ({ posts }: Props): ReactElement => {
    const [realTimePosts, loading, error] = useCollectionData(
        query(collection(db, "posts"))
    );

    return (
        <div>
            {realTimePosts
                ? realTimePosts.map((post) => (
                      // React useCollectionData doesn't support typings thats why i used as
                      <Post key={post.id} {...(post as PostModel)} />
                  ))
                : posts.map((post) => <Post key={post.id} {...post} />)}
        </div>
    );
};

export default Posts;

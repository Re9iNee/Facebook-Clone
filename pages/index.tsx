import Feed from "@components/Feed";
import Header from "@components/Header";
import Login from "@components/Login";
import Sidebar from "@components/Sidebar";
import Widgets from "@components/Widgets";
import { db } from "@firebaseConfig";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    where,
} from "firebase/firestore";

import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { ReactElement } from "react";
import { Post } from "typings";

type Props = {
    posts: Post[];
    session: Session;
};
const Home = ({ session, posts }: Props): ReactElement => {
    if (!session) return <Login />;

    return (
        <div className='h-screen bg-gray-100 overflow-hidden'>
            <Head>
                <title>Facebook</title>
            </Head>

            <Header />

            <main className='flex'>
                <Sidebar />
                <Feed posts={posts} />
                <Widgets />
            </main>
        </div>
    );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // Get the user
    const session = await getSession(context);

    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);

    const docs = querySnapshot.docs.map((post) => ({
        id: post.id,
        ...post.data(),
        timestamp: null,
    }));

    return {
        props: {
            session,
            posts: docs,
        },
    };
}

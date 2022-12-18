import Feed from "@components/Feed";
import Header from "@components/Header";
import Login from "@components/Login";
import Sidebar from "@components/Sidebar";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { ReactElement } from "react";

type Props = {
    session: Session;
};
const Home = ({ session }: Props): ReactElement => {
    if (!session) return <Login />;

    return (
        <div className='h-screen bg-gray-100 overflow-hidden'>
            <Head>
                <title>Facebook</title>
            </Head>

            <Header />

            <main className='flex'>
                <Sidebar />
                <Feed />

                {/* Widgets */}
            </main>
        </div>
    );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // Get the user
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}

import Header from "@components/Header";
import Head from "next/head";
import { ReactElement } from "react";

const Home = (): ReactElement => {
    return (
        <>
            <Head>
                <title>Facebook</title>
            </Head>

            <Header />

            <main>
                {/* Sidebar */}
                {/* Feed */}
                {/* Widgets */}
            </main>
        </>
    );
};

export default Home;

import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { ReactElement } from "react";

function Login(): ReactElement {
    return (
        <div className='grid place-items-center'>
            <Image
                width={400}
                height={400}
                alt='Facebook Logo'
                style={{ objectFit: "contain" }}
                src='https://links.papareact.com/t4i'
            />

            <h1
                onClick={() => signIn()}
                className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'
            >
                Login with Facebook
            </h1>
        </div>
    );
}

export default Login;

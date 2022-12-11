import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-between flex-col min-h-screen">
        <header>
            <nav className="flex justify-between h-12 items-center px-4 shadow-md">
                <Link href="/">
                    <span className="text-lg font-bold">
                        Amazona
                    </span>
                </Link>
                <div>
                    <Link href="/cart">
                    <span className="p-2">Cart</span>
                    </Link>
                    <Link href="/login">
                    <span className="p-2">Login</span>
                    </Link>
                </div>
            </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex justify-center items-center h-10 shadow-inner">
            Copyright  © 2022 Amazona
        </footer>
      </div>
    </> 
  );
}

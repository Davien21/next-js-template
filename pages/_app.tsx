import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";

import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

import "../index.css";
import Head from "next/head";

import React from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} />
      <Head>
        <link rel="icon" href="./favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Dummy Next JS Template App."
        />
        <meta
          name="keywords"
          content="NextJs, Template"
        ></meta>
        <title>Next JS Template APP </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

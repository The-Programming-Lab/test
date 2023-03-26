import { useState } from "react";

interface Data {
    message: string;
}


export async function getStaticProps() {
    const res = await fetch('https://api.example.com/posts');
    const data: Data = await res.json();
  
    return {
      props: {
        posts: data,
      },
    };
  }
  
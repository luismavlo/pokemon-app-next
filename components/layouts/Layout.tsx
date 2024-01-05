import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
    title?: string;
    children: any
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
          <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Luis Miguel Avendaño"/>
            <meta name="description" content={`Información sobre el pokemon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>

            <meta property="og:title" content={`Información sobre el pokemon ${title}`}/>
            <meta property="og:description" content={`Esta es la página sobre ${title} `}/>
            <meta property="og:image"
                  content="http://localhost:3000/imgs/banner.jpg"/>
          </Head>

          <Navbar/>

          <main style={{
            padding: "0px 20px"
          }}>
            {children}
          </main>
        </>
    )
}
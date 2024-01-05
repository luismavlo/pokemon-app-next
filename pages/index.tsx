import type { NextPage } from 'next'
import { GetStaticProps } from "next";

import { Layout } from "../components/layouts";
import { pokeApi } from "../api";

import { PokemonListResponse, SmallPokemon } from './../interfaces'
import {Card, Grid, Image, Row, Text} from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon';

interface Props {
    pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {

    return (
        <Layout title="Listado de Pokemons" >

            <Image src="/imgs/banner.jpg" width={200} height={150} />

            <Grid.Container gap={2} justify='flex-start'>
                {
                    pokemons.map((pokemon) => (
                        <PokemonCard pokemon={pokemon} key={pokemon.id} />
                    ))
                }

            </Grid.Container>
        </Layout>
    )
}



export const getStaticProps: GetStaticProps = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

    const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
        ...poke,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }))

    return {
        props: {
            pokemons: pokemons
        }
    }
}

export default Home

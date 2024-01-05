import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import {useEffect, useState} from "react";
import {localFavorites} from "../../utils";
import { FavoritePokemons } from "../../components/pokemon";


const FavoritesPage = () => {

  const [favoritePokemons, setFevoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFevoritesPokemons( localFavorites.pokemons );
  }, [])

  return (
    <Layout title='Pokémons - Favoritos'>
      {
        favoritePokemons.length === 0
            ? ( <NoFavorites /> )
            : ( <FavoritePokemons pokemons={favoritePokemons} />)
      }
    </Layout>
  )
}

export default FavoritesPage
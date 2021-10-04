import { FlatList } from 'native-base'
import React from 'react'
import MovieCard from '../listItem/MovieCard'

const MoviesList = ({ navigation, data }) => {
  
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <MovieCard
          id={item.id}
          image={item.poster_path}
          title={item.title}
          popularity={item.popularity}
          release_date={item.release_date}
          navigation={navigation}
        />
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default MoviesList

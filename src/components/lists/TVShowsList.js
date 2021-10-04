import { FlatList } from 'native-base'
import React from 'react'
import TVShowCard from '../listItem/TVShowCard'

const TVShowsList = ({navigation, data }) => {
  
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TVShowCard
          id={item.id}
          image={item.poster_path}
          title={item.name}
          popularity={item.popularity}
          release_date={item.first_air_date}
          navigation={navigation}
        />
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default TVShowsList

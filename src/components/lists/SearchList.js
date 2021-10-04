import { FlatList } from 'native-base'
import React from 'react'
import SearchCard from '../listItem/SearchCard'

const SearchList = ({ navigation, data }) => {
  
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <SearchCard
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

export default SearchList

import { Container, FormControl, Select, CheckIcon, VStack, 
  Input, Heading, Icon, Button } from 'native-base'
import { StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Loading from '../layout/Loading'
import SearchList from '../lists/SearchList'
import { searchMovies, searchTVShows, searchMulti } from '../services/api'

const SearchContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [searchResult, setSearchResult] = useState([])
  const [searchType, setSearchType] = useState('movie')
  const [searchQuery, setSearchQuery] = useState()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    if(searchQuery !='' && searchQuery != undefined){
    
    setIsLoading(true)

    switch (searchType) {
        case 'movie':
            console.log('movie selected ' + searchQuery)
            searchMovies(searchQuery).then(
                resultData => {
                  setSearchResult(resultData)
                  setIsLoading(false)
                },
                error => {
                  alert('Error', `Something went wrong! ${error}`)
                }
              )
            break;

            case 'tv':
                console.log('tv selected '+ searchQuery)
                searchTVShows(searchQuery).then(
                    resultData => {
                    setSearchResult(resultData)
                    setIsLoading(false)
                    },
                    error => {
                    alert('Error', `Something went wrong! ${error}`)
                    }
                )
            break;
            
            case 'multi':
                console.log('multi selected '+ searchQuery)
                searchMulti(searchQuery).then(
                    tvShowsData => {
                        console.log('multi result - '+ tvShowsData);
                        setSearchResult(resultData)
                        setIsLoading(false)
                    },
                    error => {
                        alert('Error', `Something went wrong! ${error}`)
                    }
                )
            break;

        default:
            break;
      }
    }
    
  }

  return (
    <Container style={styles.basecontainer}>
        <VStack width="90%" space={5} alignItems="center">
          <Heading fontSize="sm" pt={4} textAlign="left">Search Movie/Tv Show Name</Heading>
          <Input width="90%" minHeight={50}
            placeholder="Search"
            variant="filled"
            bg="gray.100"
            borderRadius="5"
            py="1"
            px="2"
            onChangeText={ val => { setSearchQuery(val) }}
            placeholderTextColor="gray.500"
            _hover={{ bg: 'gray.200', borderWidth: 0 }}
            borderWidth="0"
            _web={{
              _focus: { style: { boxShadow: 'none' } },
            }}
            InputLeftElement={
              <Icon
                ml="2"
                size="5"
                color="gray.500"
                as={<Ionicons name="ios-search" />}
              />
            }
          />
      </VStack>

      <VStack width="90%" space={5} alignItems="center">
            <Heading fontSize="sm" pt={4} textAlign="left">Choose Search Type</Heading>
            
            <Container width="90%" style={styles.searchType}>
              <Select width="60%" onValueChange={(itemValue) => setSearchType(itemValue)}
                  _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size={5} />,
                  }}  defaultValue="movie">
                  <Select.Item label="Movie" value="movie" />
                  <Select.Item label="TV" value="tv" />
                  <Select.Item label="Multi" value="multi" />
              </Select>

              <Button width="40%" ml={5}
                  onPress={() => {
                    fetchData()
                  }}
                  >View</Button>
            </Container>
      </VStack>
      <VStack style={styles.tvShowcontainer}>
          {isLoading ? 
          <Heading fontSize="lg" pt={4} textAlign="left">Please initiate Search</Heading> 
          : <SearchList data={searchResult} navigation={ navigation }/>}
      </VStack>
        
    </Container>
  )
}

export default SearchContainer


const styles = StyleSheet.create({
      basecontainer: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        maxWidth: 'auto',
        maxHeight: 'auto',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      tvShowcontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        maxWidth: 'auto',
        justifyContent: 'flex-start',
        marginTop: 10

      },
      dropdowncontainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
      },
      searchType: {
        maxWidth: "auto",
        maxHeight: 'auto',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }
      
});
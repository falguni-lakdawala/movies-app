import { Container, FormControl, Select, CheckIcon } from 'native-base'
import { StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import TVShowsList from '../lists/TVShowsList'
import { getTopRatedTVShows, getOntheAirTVShows, getAiringTodayTVShows, getPopularTVShows
} from '../services/api'

const TVShowsContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [tvShows, setTVShows] = useState([])
  const [tvShowType, setTVShowType] = useState('top_rated')

  useEffect(() => {
    fetchData();
  }, [tvShowType]);

  const fetchData = () => {
    setIsLoading(true)

    switch (tvShowType) {
        case 'top_rated':
            console.log('top_rated selected')
            getTopRatedTVShows().then(
                tvShowsData => {
                  setTVShows(tvShowsData)
                  setIsLoading(false)
                },
                error => {
                  alert('Error', `Something went wrong! ${error}`)
                }
              )
            break;

            case 'airing_today':
                console.log('upcoming selected')
                getAiringTodayTVShows().then(
                    tvShowsData => {
                    setTVShows(tvShowsData)
                    setIsLoading(false)
                    },
                    error => {
                    alert('Error', `Something went wrong! ${error}`)
                    }
                )
            break;
            
            case 'popular':
                console.log('popular selected')
                getPopularTVShows().then(
                    tvShowsData => {
                        setTVShows(tvShowsData)
                        setIsLoading(false)
                    },
                    error => {
                        alert('Error', `Something went wrong! ${error}`)
                    }
                )
            break;

            case 'on_the_air':
                console.log('now_playing selected')
                getOntheAirTVShows().then(
                    tvShowsData => {
                    setTVShows(tvShowsData)
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

  return (
    <Container style={styles.basecontainer}>
        <Container style={styles.dropdowncontainer}>
            <FormControl>
                    <Select onValueChange={(itemValue) => setTVShowType(itemValue)}
                        minWidth="100"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />,
                        }} mt="1" defaultValue="popular"
                    >
                        <Select.Item label="Popular" value="popular" />
                        <Select.Item label="Top Rated" value="top_rated" />
                        <Select.Item label="Airing Today" value="airing_today" />
                        <Select.Item label="On The Air" value="on_the_air" />
                </Select>
            </FormControl>
        </Container>
        <Container style={styles.tvShowcontainer}>
            {isLoading ? <Loading /> : <TVShowsList data={tvShows} navigation={navigation}/>}
        </Container>
        
    </Container>
  )
}

export default TVShowsContainer


const styles = StyleSheet.create({
      basecontainer: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        maxWidth: 'auto',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      tvShowcontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        maxWidth: 'auto',
        justifyContent: 'flex-start'
      },
      dropdowncontainer: {
        flex: 0,
        flexDirection: 'row',
        marginBottom: 20,
        maxWidth: 250,
      }
      
});
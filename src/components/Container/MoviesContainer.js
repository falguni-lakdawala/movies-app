import { Center, Container, FormControl, Select, CheckIcon } from 'native-base'
import { StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import MoviesList from '../lists/MoviesList'
import { getTopRatedMovies, getNowPlayingMovies, getUpcomingMovies, 
  getPopularMovies } from '../services/api'

const MoviesContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [movieType, setMovieType] = useState('top_rated')

  useEffect(() => {
    fetchData();
  }, [movieType]);

  const fetchData = () => {
    setIsLoading(true)

    switch (movieType) {
        case 'top_rated':
            console.log('top_rated selected')
            getTopRatedMovies().then(
                moviesData => {
                  setMovies(moviesData)
                  setIsLoading(false)
                },
                error => {
                  alert('Error', `Something went wrong! ${error}`)
                }
              )
            break;

            case 'upcoming':
                console.log('upcoming selected')
                getUpcomingMovies().then(
                    moviesData => {
                    setMovies(moviesData)
                    setIsLoading(false)
                    },
                    error => {
                    alert('Error', `Something went wrong! ${error}`)
                    }
                )
            break;
            
            case 'popular':
                console.log('popular selected')
                getPopularMovies().then(
                    moviesData => {
                        setMovies(moviesData)
                        setIsLoading(false)
                    },
                    error => {
                        alert('Error', `Something went wrong! ${error}`)
                    }
                )
            break;

            case 'now_playing':
                console.log('now_playing selected')
                getNowPlayingMovies().then(
                    moviesData => {
                    setMovies(moviesData)
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
                    <Select onValueChange={(itemValue) => setMovieType(itemValue)}
                        minWidth="100"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />,
                        }} mt="1" defaultValue="popular"
                    >
                        <Select.Item label="Popular" value="popular" />
                        <Select.Item label="Top Rated" value="top_rated" />
                        <Select.Item label="Now Playing" value="now_playing" />
                        <Select.Item label="Upcoming" value="upcoming" />
                </Select>
            </FormControl>
        </Container>
        <Container style={styles.moviecontainer}>
            {isLoading ? <Loading /> : <MoviesList data={movies} navigation={navigation}/>}
        </Container>
        
    </Container>
  )
}

export default MoviesContainer


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
      moviecontainer: {
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
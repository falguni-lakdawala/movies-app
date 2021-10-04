import { Center, Box, Text, Heading, Image, Container, NativeBaseProvider } from 'native-base'
import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import {getMovieById, getTVShowById} from '../services/api'
import Loading from '../layout/Loading'
import {IMAGE_BASE_URL} from '../config/api_config'
import { marginBottom } from 'styled-system'
import { padding } from 'styled-system'
import { alignItems } from 'styled-system'


const MediaDetails = ({navigation, route}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movieObj, setMovieObj] = useState();
    let popularity = '';

    const {label, mid, mtype, query} = route.params;

    useEffect(() => {
        if (isLoading == true) {
            fetchData(route.params.mid, route.params.mtype);
        }

    }, [isLoading])


    const fetchData = () => {

        switch (mtype) {
            case 'movie':
              
                getMovieById(mid).then(movie => {
                    console.log(movie);
                    setMovieObj(movie);
                    setIsLoading(false);
                }, error => {
                    alert('Error', `Something went wrong! ${error}`)
                })
                break;

            case 'tv':
              
                getTVShowById(mid).then(tv => {
                    setMovieObj(tv);
                    setIsLoading(false);
                }, error => {
                    alert('Error', `Something went wrong! ${error}`)
                })
                break;

                case 'multi':
              
                  getTVShowById(mid).then(tv => {
                      setMovieObj(tv);
                      setIsLoading(false);
                  }, error => {
                      alert('Error', `Something went wrong! ${error}`)
                  })
                  break;
        }
    }

    return (
        <NativeBaseProvider style={styles.native}> 
            
            { isLoading ? <Loading/> : 
                
                  <Container style={styles.basecontainer}>
                    <Center>
                      <Heading mt={4} mb={4} size='lg' textAlign="center">{label}</Heading>
                      <Box style={styles.imageBox}>
                        <Image alt={ movieObj.title } 
                          source={{ uri: IMAGE_BASE_URL + movieObj.poster_path }} 
                          size={'2xl'} resizeMode="cover" />
                      </Box>
                    </Center>

                     <Container mt={3}>
                        <Text style={styles.textbox}> { movieObj.overview }</Text>
                        
                        {
                          mtype == 'movie' ? <Text style={styles.textbox}>{ 
                            'Popularity: ' + movieObj.popularity + ' | ' + 'Release Date: ' 
                                  + movieObj.release_date + ' '
                            }</Text>
                          : mtype == 'multi' ? <Text style={styles.textbox}>{ 
                            'Popularity: ' + movieObj.popularity + ' | ' + 'Release Date: ' 
                                  + movieObj.release_date + ' '
                            }</Text> :  
                          <Text style={styles.textbox}>{ 
                            'Popularity: ' + movieObj.popularity + ' | ' + 'Release Date: ' 
                                + movieObj.first_air_date + ' ' 
                            }</Text>
                          
                        }
                     </Container>
                  
                </Container>
      }
    </NativeBaseProvider>

    )
}

export default MediaDetails

const styles = StyleSheet.create({
  
  basecontainer: {
    backgroundColor: '#fff',
    maxWidth: 'auto',
    padding: 3,
    flex: 1,
    flexGrow: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  native: {
    backgroundColor: '#fff',
    maxWidth: 'auto',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  imageBox: {
    height: 'auto',
    marginBottom: 3,
  },
  
  textbox: {
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 15,
    textAlign: 'left',
    alignItems: 'stretch'
  }

  
});

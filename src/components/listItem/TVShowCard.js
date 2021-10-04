import { Box, Button, Heading, Image, Text, Container } from 'native-base'
import React from 'react'
import { IMAGE_BASE_URL } from '../config/api_config'
import SearchContainer from '../Container/SearchContainer'

const TVShowCard = props => {

  const { id, image, title, popularity, release_date, navigation } = props

  return (
    <Container id={{ id }} style={styles.container} >
        {/* <Flex direction="row"> */}
            <Box style={styles.imageBox}>
                <Image alt={ title } source={{ uri: IMAGE_BASE_URL + image }} size={'lg'} resizeMode="cover" />
            </Box>
            
            <Container paddingLeft={2} style={styles.detailsContainer}>
                <Heading size='xs'>{title}</Heading>
                <Text>Populatiry: {popularity}</Text>
                <Text>Release Date: {release_date}</Text>
                <Box>
                    <Button mt={1} maxW={200} 
                     onPress={() => {
                        navigation.navigate('More Details', {
                            label: title,
                            mid : id,
                            mtype: 'tv',
                        });
                    }}
                    >View</Button>
                </Box>
            </Container>
        {/* </Flex> */}
          
    </Container>
  )
}

export default TVShowCard

const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      flexDirection: 'row',
      maxWidth: 'auto',
      marginBottom: 30,
    },
    detailsContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        maxWidth: 'auto',
        flexDirection: 'column'
    },
    imageBox: {
        height: 'auto'
    }

}
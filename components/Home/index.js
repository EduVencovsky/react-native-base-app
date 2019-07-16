import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text onPress={() => navigation.toggleDrawer()}>
                HEY asd aas s adasdaa
            </Text>
        </View>
    )
}

Home.propTypes = {
    navigation: PropTypes.object
}

export default Home

import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { DrawerActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

Home.propTypes = {
    navigation: PropTypes.object
}

Home.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home',
    headerLeft: (
        <Icon.Button
            name="bars"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
    )
})

export default Home

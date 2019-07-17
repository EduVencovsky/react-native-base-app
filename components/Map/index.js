import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { View, StyleSheet } from 'react-native'

const Map = () => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        >
            <Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324
                }}
                title="hey"
                description="this is a marker"
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    }
})

export default Map

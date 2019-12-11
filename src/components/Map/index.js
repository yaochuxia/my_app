import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView } from 'react-native-amap3d';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customInfoWindow: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 4,
  },
});

class Map extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      coordinate: {
        latitude: 39.91095,
        longitude: 116.37296,
      },
      needLocate: true,
    };
  }

  _points = Array(100).fill(0).map(() => {
    const random1 = Math.random();
    const random2 = Math.random();
    let random3 = Math.random();
    let random4 = Math.random();
    random3 = parseInt(random3 * 10) % 2 === 0;
    random4 = parseInt(random4 * 10) % 2 === 0;
    const num1 = random3 ? random1 : -random1;
    const num2 = random4 ? random2 : -random2;
    return {
      latitude: 31.1 + num1,
      longitude: 121.2 + num2,
    };
  })

  _onItemPress = coordinate => {
    this.mapView.animateTo({
      zoomLevel: 18,
      coordinate,
    });
  }

  render() {
    const { coordinate, needLocate } = this.state;
    const { mapType } = this.props;
    return (
      <View style={styles.container}>
        <MapView
          locationEnabled
          showsZoomControls
          showsScale
          showsLocationButton
          showsLabels
          showsTraffic
          zoomEnabled
          showsBuildings
          scrollEnabled
          rotateEnabled
          mapType={mapType}
          zoomLevel={15}
          tilt={20}
          coordinate={coordinate}
          style={styles.container}
          ref={(ele) => { this.mapView = ele; }}
          onLocation={(e) => {
            const { nativeEvent } = e;
            const { longitude, latitude } = nativeEvent;
            if (!needLocate || !longitude || !latitude) return;
            this.setState({ coordinate: { longitude, latitude }, needLocate: false });
          }}
        >
          <MapView.MultiPoint
            image="point"
            points={this._points}
            onItemPress={this._onItemPress}
          />
        </MapView>
      </View>
    );
  }
}

export default Map;
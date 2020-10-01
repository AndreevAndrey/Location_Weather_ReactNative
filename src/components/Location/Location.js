import React, { Component } from 'react';
import { PermissionsAndroid, StyleSheet, View, ActivityIndicator } from 'react-native';
import ViewLocation from './ViewLocation/ViewLocation';
import Weather from './Weather/Weather';
import fetchWeather from './Weather/weatherAction';
import { connect } from 'react-redux';
import { setHistory, setLocation } from './appReducer';
import ErrorMessage from '../Error/Error';


class MyLocation extends Component {
  async componentDidMount() {
    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      'title': 'Location Permission',
      'message': 'This App needs access to your location ' +
        'so we can know where you are.',
      buttonPositive: "OK"
    });

    if (status !== PermissionsAndroid.RESULTS.GRANTED) {
      alert(`You haven't granted access to geolocation`)
    }

    this.watchID = navigator.geolocation.watchPosition((position) => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.00922 * 1.5,
          longitudeDelta: 0.00421 * 1.5
        };
        this.props.setLocation(region, region.latitude, region.longitude);
        this.props.setHistory({
          lat: region.latitude,
          long: region.longitude,
          date: new Date().toString(),
          mapRegion: region
        });
        const { lastLat, lastLong } = this.props.app;
        if (!!lastLat && !!lastLong) {
          this.props.fetchWeather(lastLat, lastLong);
        }
      },
      error => {
        alert(error.message);
      },
      { enableHighAccuracy: true, maximumAge: 100, timeout: 60000 }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onMapPress = (e) => {
    let region = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.00922 * 1.5,
      longitudeDelta: 0.00421 * 1.5
    };
    this.props.setLocation(region, region.latitude, region.longitude);
    this.props.setHistory({
      lat: region.latitude,
      long: region.longitude,
      date: new Date().toString(),
      mapRegion: region
    });
  };

  render() {
    const { mapRegion, lastLat, lastLong, temperature, weather, isFetching, error } = this.props.app;
    return (
      <View style={styles.main}>
        <ViewLocation region={mapRegion}
                      onRegionChange={setLocation}
                      onMapPress={this.onMapPress}
                      lat={lastLat}
                      long={lastLong}
        />
        {isFetching && <ActivityIndicator />}
        {!!weather && <Weather
          temperature={temperature}
          weather={weather}/>}
        {!!error && <ErrorMessage error={error}/>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 4,
  }
});

const mapStateToProps = ({ app }) => ({
  app
});

export default connect(mapStateToProps, { fetchWeather, setLocation, setHistory })(MyLocation);


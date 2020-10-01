import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const History = ({ history, setLocation, navigation }) => {
  const tableData = history.map(record => ([`${record.lat}/${record.long}`, record.date]));
  const regions = history.map(val => val.mapRegion);
  const tableHead = ['Location', 'Time and date'];
  const widthArr = [180, 180];

  const onPress = (rowData) => {
    const location = rowData[0].split('/');
    const locObj = { lasLat: +location[0], lastLong: +location[1] };
    const mapRegion = regions.find(val => val.latitude === locObj.lasLat);
    setLocation(mapRegion, locObj.lasLat, locObj.lastLong);
    navigation.navigate('Location')
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
            <Row data={tableHead} widthArr={widthArr} style={styles.header}
                 textStyle={styles.text}/>
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              {
                tableData.map((rowData, index) => (
                  <TouchableOpacity key={index} onPress={() => onPress(rowData)}>
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={[180, 180]}
                      style={[styles.row, { backgroundColor: '#F7F6E7' }]}
                      textStyle={styles.text}
                    />
                  </TouchableOpacity>
                ))
              }
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center' },
  dataWrapper: { marginTop: -1 },
  row: { backgroundColor: '#E7E6E1',height:80, marginTop: 10 }
});

export default History;



import React from 'react';
import History from './History';
import { connect } from 'react-redux';
import { setLocation } from '../Location/appReducer';

const HistoryContainer = ({ history, setLocation, navigation }) => (
  <History history={history} setLocation={setLocation} navigation={navigation}/>
);

const mapStateToProps = ({ app: { history } }) => ({
  history
});

export default connect(mapStateToProps, { setLocation })(HistoryContainer);

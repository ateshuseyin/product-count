import React from 'react';
import {connect} from 'react-redux';
import ActiveView from '../constants/ActiveView';
import SearchPage from '../containers/SearchPage';
import ProductPage from '../containers/ProductPage';

const App = ({activeView}) => {
  switch (activeView) {
    case ActiveView.SEARCH:
      return <SearchPage/>;
    case ActiveView.PRODUCT:
      return <ProductPage/>;
    default:
      return <SearchPage/>;
  }
};

const mapStateToProps = (state) => {
  return {
    activeView: state.app.activeView
  };
};

export default connect(mapStateToProps)(App);



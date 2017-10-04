import React from 'react';
import {connect} from 'react-redux';
import {search} from '../actions';
import SearchPanel from '../components/SearchPanel';

const mapStateToProps = (state) => ({
  error: state.product.error.message
});

const mapDispatchToProps = {
  onSearch: search
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);


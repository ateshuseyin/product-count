import React from 'react';
import {connect} from 'react-redux';
import {search} from '../actions';
import SearchPanel from '../components/SearchPanel';

const mapDispatchToProps = {
  onSearch: search
};

export default connect(() => ({}), mapDispatchToProps)(SearchPanel);


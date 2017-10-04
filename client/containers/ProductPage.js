import React from 'react';
import {connect} from 'react-redux';
import ProductPanel from '../components/ProductPanel';
import {backToSearch, updateProduct} from '../actions';

const mapStateToProps = (state) => ({
  product: state.product.founded
});

const mapDispatchToProps = {
  onBack: backToSearch,
  onUpdate: updateProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPanel);
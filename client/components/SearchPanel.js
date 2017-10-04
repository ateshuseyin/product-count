import './SearchPanel.css';
import React from 'react';
import PropTypes from 'prop-types';

function isFromBarcodeReader(barcode) {
  return barcode.length > 2 && barcode.startsWith('*') && barcode.endsWith('*');
}

function cleanBarcode(barcode) {
  if (isFromBarcodeReader(barcode)) {
    return barcode.substr(1, barcode.length - 2);
  }
  return barcode;
}

export default class SearchPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      barcode: ''
    };
  }

  handleChange(event) {
    let value = event.target.value;
    if (isFromBarcodeReader(value)) {
      this.props.onSearch(cleanBarcode(value));
    }
    this.setState({barcode: value});
  }

  handleSearch() {
    let barcode = cleanBarcode(this.state.barcode);
    this.props.onSearch(barcode);
  }

  componentDidMount() {
    this.input.focus();
  }

  render() {

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <div className="row">
          <span className="error">{this.props.error}</span>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <h5>Aramak istediğiniz ürünün barkodunu giriniz</h5>
        </div>
        <div className="row">
          <input className="u-full-width"
                 type="text"
                 placeholder="barkod"
                 value={this.state.barcode}
                 onChange={event => this.handleChange(event)}
                 ref={(input) => {
                   this.input = input
                 }}/>
        </div>
        {errorMessage}
        <div className="row">
          <button className="button-primary u-full-width" onClick={() => this.handleSearch()}>Ara</button>
        </div>
      </div>
    );
  }
}

SearchPanel.propTypes = {
  onSearch: PropTypes.func.isRequired,
  error: PropTypes.string
};

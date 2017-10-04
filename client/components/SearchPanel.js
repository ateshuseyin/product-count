import './SearchPanel.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class SearchPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      barcode: ''
    };
  }

  handleChange(event) {
    let newBarcode = event.target.value;
    if (newBarcode.length > 2 && newBarcode.startsWith('*') && newBarcode.endsWith('*')) {
      this.props.onSearch(newBarcode);
    }
    this.setState({barcode: newBarcode});
  }

  handleSearch() {
    this.props.onSearch(this.state.barcode);
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
          <h5>Aramak istediğiniz ürünüz barkodunu giriniz</h5>
        </div>
        <div className="row">
          <input className="u-full-width"
                 type="text"
                 placeholder="barkod"
                 value={this.state.barcode}
                 onChange={event => this.handleChange(event)}/>
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

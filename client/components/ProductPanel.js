import './ProductPanel.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class ProductPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: this.props.product.quantity_count || 0
    };
  }

  handleUpdate() {
    this.props.onUpdate(this.props.product.barcode, this.state.count);
  }

  handleInput(event) {
    this.setState({count: event.target.value});
  }

  render() {
    const product = this.props.product;
    return (
      <div className="container">
        <h4>Bulunan Ürün</h4>
        <div>
          <div className="p-label">
            Barkod:
          </div>
          <div className="p-field">
            {product.barcode}
          </div>
        </div>
        <div>
          <div className="p-label">
            Parça No:
          </div>
          <div className="p-field">
            {product.part_no}
          </div>
        </div>
        <div>
          <div className="p-label">
            Mevcut Miktar:
          </div>
          <div className="p-field">
            <span>{product.quantity}</span>
          </div>
        </div>

        <div>
          <div className="p-label">
            Sayılan:
          </div>
          <div className="p-field">
            <input type="number"
                   className="u-width-full"
                   value={this.state.count}
                   onChange={(event) => this.handleInput(event)}
            />
          </div>
        </div>
        <div>
          <div className="sec50">
            <button className="full-width" onClick={() => this.props.onBack()}>Geri Dön</button>
          </div>
          <div className="sec50">
            <button className="button-primary full-width" onClick={() => this.handleUpdate()}>Güncelle</button>
          </div>
        </div>
      </div>
    );
  }
}

ProductPanel.propTypes = {
  onBack: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};
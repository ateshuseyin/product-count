import './ProductPanel.css';
import React from 'react';

export default class ProductPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="container">
        <h4>Bulunan Ürün</h4>
        <div>
          <div className="p-label">
            Barkod:
          </div>
          <div className="p-field">
            efefrfrr
          </div>
        </div>
        <div>
          <div className="p-label">
            Parça No:
          </div>
          <div className="p-field">
            trthththth
          </div>
        </div>
        <div>
          <div className="p-label">
            Mevcut Miktar:
          </div>
          <div className="p-field">
            <span>46</span>
          </div>
        </div>

        <div>
          <div className="p-label">
            Sayılan:
          </div>
          <div className="p-field">
            <input type="number" className="u-width-full"/>
          </div>
        </div>
        <div>
          <div className="sec50">
            <button className="full-width">Geri Dön</button>
          </div>
          <div className="sec50">
            <button className="button-primary full-width">Güncelle</button>
          </div>
        </div>
      </div>
    );
  }
}
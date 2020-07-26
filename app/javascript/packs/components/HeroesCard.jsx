import React from 'react';
import PropTypes from 'prop-types';

const HeroesCard = ({ heroe, displayModal }) => (
  <div key={heroe.name} className="card m-4" style={{ width: '17rem' }}>
    <img src={`https://${heroe.url_image}`} className="card-img-top" alt={heroe.name} />
    <div className="card-body">
      <h5 className="card-title">{heroe.name}</h5>
      <button type="button" className="btn btn-primary w-100" onClick={() => { displayModal(heroe); }}>Check participation in other events</button>
    </div>
  </div>
);

HeroesCard.propTypes = {
  displayModal: PropTypes.func.isRequired,
  heroe: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default HeroesCard;

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const ModalHeroe = ({ handleClose, heroeModal, show }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{heroeModal.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="d-flex justify-content-center">
        <img src={heroeModal.url_image} style={{ height: '30vh' }} alt={heroeModal.name} />
      </div>
      <h4 className="my-2">{"Events' Participation"}</h4>
      <ul className="list-group">
        {heroeModal.events.map((event, index) => (
          <li className="list-group-item" key={`${event}${String(index)}`}>{event}</li>
        ))}
      </ul>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={handleClose}>
        Close
      </Button>
      <Button href={heroeModal.url_link} target="_blank" variant="primary" onClick={handleClose}>
        Check all the commics
      </Button>
    </Modal.Footer>
  </Modal>
);

ModalHeroe.propTypes = {
  handleClose: PropTypes.func.isRequired,
  heroeModal: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  show: PropTypes.bool.isRequired,
};

export default ModalHeroe;

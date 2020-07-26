import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from "react-bootstrap";

const ModalHeroe = ({handleClose, heroeModal, show}) => {
  console.log(heroeModal);
  
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




    // <Modal show={show} >
    //   <Modal.Header closeButton>
    //     <Modal.Title>
    //       {heroeModal.name}
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //       <div>
    //         <img src={heroeModal.url_image} className="card-img-top" alt={heroeModal.name}/>
    //        <ul class="list-group">
    //           {/* {heroeModal.events.map((event) => (
    //           <li class="list-group-item" key={event} >{event}</li>
    //           ))} */}
    //         </ul>
    //       </div>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="secondary" onClick={handleClose}>
    //       Close
    //     </Button>
    //     <Button variant="primary" onClick={handleClose}>
    //       Submit
    //     </Button>
    //   </Modal.Footer>
    // </Modal>
    
    );
}

ModalHeroe.propTypes = {
  handleClose: PropTypes.func.isRequired,
  // heroeModal: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired
};
 
export default ModalHeroe;
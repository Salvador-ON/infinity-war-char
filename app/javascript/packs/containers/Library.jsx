import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateHeroes } from '../actions/index';
import axiosCalls from '../services/axiosCalls';
import NavBar from '../components/NavBar';
import ModalHeroe from '../components/ModalHeroe';

const Library = () => {
  const [show, setShow] = React.useState(false);
  const [heroeModal, setHeroeModal] = React.useState({});
  const heroesData = useSelector(state => state.heroesData);

  const dispatch = useDispatch();

  const checkHeroes = () => {
    axiosCalls.getHeroes()
      .then(response => {
        if ((response.data.heroes).length > 0) {
          dispatch(UpdateHeroes(response.data.heroes));
        }
      })
      .catch(error => {}); // eslint-disable-line no-unused-vars
  };

  const handleShow = () => setShow(true);
  
  const handleClose = () => setShow(false);

  const displayModal = (data) => {
    handleShow()
    setHeroeModal(data)
  }

  useEffect(() => {
    if(heroesData.length === 0){
      checkHeroes()
    };}, []);
  
  return (
    <React.Fragment>
      
      <div className="lib-cont">
        <NavBar/>
        <h1 className="text-white text-center">Characters</h1>

        <div className="d-flex flex-row flex-wrap justify-content-center">
          {heroesData.map((heroe) => (
          <div key={heroe.name} className="card m-4" style={{width: "17rem"}}>
            <img src={heroe.url_image} className="card-img-top" alt={heroe.name}/>
            <div className="card-body">
              <h5 className="card-title">{heroe.name}</h5>
              <button className="btn btn-primary" onClick={()=>{displayModal(heroe)}}>Check More Participations</button>
            </div>
          </div>  
          ))}          
        </div>
      </div>

      {show && heroeModal ? <ModalHeroe handleClose={handleClose} heroeModal={heroeModal} show={show}/> : null}
    </React.Fragment>

  );
};

export default Library;

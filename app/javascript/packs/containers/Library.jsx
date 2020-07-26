import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateHeroes } from '../actions/index';
import axiosCalls from '../services/axiosCalls';
import NavBar from '../components/NavBar';
import ModalHeroe from '../components/ModalHeroe';
import HeroesCard from '../components/HeroesCard';

const Library = () => {
  const [show, setShow] = React.useState(false);
  const [heroeModal, setHeroeModal] = React.useState({});

  const heroesData = useSelector(state => state.heroesData);
  const filter = useSelector(state => state.filter);

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

  const handleClose = () => {
    setShow(false);
    setHeroeModal('');
  };

  const displayModal = data => {
    setHeroeModal(data);
    handleShow();
  };

  const filterCharacters = () => {
    if (filter === '0') {
      return heroesData;
    }

    return heroesData.filter(heroe => heroe.name.charAt(0) === filter);
  };

  useEffect(() => {
    if (heroesData.length === 0) {
      checkHeroes();
    }
  }, []);

  return (
    <>

      <div className="lib-cont">
        <NavBar />
        <h1 className="text-white text-center mt-2">Characters</h1>
        {filterCharacters().length === 0 ? <h3 className="text-white text-center mt-2">No Characters Found</h3> : null }
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {filterCharacters().map(heroe => (
            <HeroesCard heroe={heroe} displayModal={displayModal}/>
          ))}
        </div>
      </div>

      {show && heroeModal ? (
        <ModalHeroe
          handleClose={handleClose}
          heroeModal={heroeModal}
          show={show}
        />
      ) : null}
    </>

  );
};

export default Library;

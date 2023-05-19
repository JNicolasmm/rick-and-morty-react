import { Link } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = (props) => {
  const { name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites } = props

  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {

    // isFav ? removeFav(id) : addFav({name, status, species, gender, origin, image, id})
    // setIsFav(!isFav)

    if (isFav) {
      setIsFav(false)
      removeFav(id)
    } else {
      setIsFav(true)
      addFav({name, status, species, gender, origin, image, onClose, id})
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div>
      <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
      <img src={image} alt='' />
      <Link to={`/detail/${id}`}>
        <h2>Personaje: {name}</h2>
      </Link>
      <h2>Status: {status}</h2>
      <h2>Especie: {species}</h2>
      <h2>Genero: {gender}</h2>
      <h2>Origen: {origin}</h2>
      <button onClick={() => { onClose(id) }}>X</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
  }
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
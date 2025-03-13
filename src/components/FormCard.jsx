import { useState} from 'react';
import axios from 'axios';

// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"

const FormCard = ({movie_id, realoadReview}) => {

    const inizialValue = {name: "", text: "", vote: 1 };

    const [formData, setFormData] = useState(inizialValue);

    // funzione di creazione oggetto valori form
    const setFieldValue = (e) => {
        const { value, name} = e.target;
        setFormData({ ...formData, [name]: value})
    }

    const urlEndpoint = `http://localhost:4000/movie/${movie_id}/review`
// funzione di invio richiesta al submit del form
    const submitReview = (e) => {
        e.preventDefault();

        axios.post(urlEndpoint, formData, { headers: {'Content-Type': 'application/json' }})
        .then(
            () => {
            setFormData(inizialValue)
            realoadReview()
    })
        .catch(err=> console.log(err)
        )
    }

    return (
        <div className="form-card">
            <h4 className="title-form">Add your review</h4>
            <form onSubmit={submitReview} id='formarticolo' action="#" >
                {/* valore nome piatto */}
                <span>Name</span>
                <input
                    type="text"
                    name="name"
                    onChange={setFieldValue}
                    value={formData.name}
                    placeholder='Nome & cognome'
                />
                {/* valore descrizione */}
                <span>Review</span>
                <textarea
                    name="text"
                    onChange={setFieldValue}
                    value={formData.text}
                    placeholder='Descrizione'
                ></textarea>
                <span>Voto</span>
                <input
                    type="number"
                    min='1'
                    max='5'
                    name="vote"
                    onChange={setFieldValue}
                    value={formData.vote}
                    placeholder='Voto film'
                />

            
                <button>Aggiungi</button>
            </form>
             <div className="botton">
                 <Link className="" to="/movie">Back to home</Link>
             </div>
        </div>
    )
}

export default FormCard
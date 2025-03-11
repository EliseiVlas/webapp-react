// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"

const FormCard = () => {
    return (
        <div>
            <h4 className="title-form">Add your review</h4>
            <form id='formarticolo' action="#" >
                {/* valore nome piatto */}
                <span>Name</span>
                <input
                    type="text"
                    name="title"
                    // onChange={handlenuovoArticolo}
                    // value={nuovoArticolo.title}
                    placeholder='Nome & cognome'
                />
                {/* valore descrizione */}
                <span>Review</span>
                <textarea
                    name="content"
                    // onChange={handlenuovoArticolo}
                    // value={nuovoArticolo.content}
                    placeholder='Descrizione'
                ></textarea>
                <span>Voto</span>
                <input
                    type="number"
                    name="title"
                    // onChange={handlenuovoArticolo}
                    // value={nuovoArticolo.title}
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
import axios from "axios";
 // importiamo parte LInk del modulo react-router
 import { Link, useNavigate } from "react-router-dom"
 // importiamo lo useState
 import { useState } from "react";
 
 const initialData = {
     title: "",
     director: "",
     image: null,
     abstract: ""
 };
 
 const endpointApi = "http://localhost:4000/movie";
 
 
 const CreateMoviePage = () => {
 
     // navigazione
     const navigate = useNavigate();
 
 
     // states iniziali
     const [formDataOgj, setFormDataOgj] = useState(initialData);
 
 
 
     const setFieldValue = (e) => {
         const { value, name } = e.target;
         if (name === "image") setFormDataOgj({ ...formDataOgj, image: e.target.files[0] });
         else setFormDataOgj({ ...formDataOgj, [name]: value });
     }
 
 
 
     const handleSubmit = (e) => {
         e.preventDefault();
 
         // // Inviamo i dati al backend con axios e reindirizziamo alla home
         axios.post(endpointApi, formDataOgj, { headers: { "Content-Type": "multipart/form-data" } })
             .then(
                 () => { navigate("/") }
             )
             .catch((err) => {
                 console.log(err);
             });
     }
 
     return (
         <main className="home">
             <div>
             <h1>Add a new movie</h1>
             </div>
           
 
             <section id="book-form">
 
                 <form onSubmit={handleSubmit}>
                     <div className="mb-4">
                         <label>Title:</label>
                         <input
                             className="form-control"
                             name="title"
                             type="text"
                             value={formDataOgj.title}
                             onChange={setFieldValue}
                             required
                         />
                     </div>
                     <div className="mb-4">
                         <label>Director:</label>
                         <input
                             className="form-control"
                             name="director"
                             type="text"
                             value={formDataOgj.director}
                             onChange={setFieldValue}
                             required
                         />
                     </div>
                     <div className="mb-4">
                         <label>Image:</label>
                         <input
                             className="form-control"
                             name="image"
                             type="file"
                             onChange={setFieldValue}
                             required
                         />
                     </div>
                     <div className="mb-4">
                         <label>Abstract:</label>
                         <textarea
                             value={formDataOgj.abstract}
                             className="form-control"
                             name="abstract"
                             onChange={setFieldValue}
                             required
                         ></textarea>
                     </div>
                     <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                         <Link className="btn btn-secondary" to="/">Back</Link>
                         <button className="btn btn-success" type="submit">
                             Add Movie
                         </button>
                     </div>
                 </form>
             </section>
         </main>
 
     )
 }
 
 export default CreateMoviePage
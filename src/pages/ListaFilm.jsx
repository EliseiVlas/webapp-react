import CreazioneCard from './../components/CreazioneCard';

export default function ListaFilm() {
    return (
        <main>
           <h1>Detagio tutti i film</h1>

           <div className='lista'>
                <CreazioneCard/>
                <CreazioneCard/>
                <CreazioneCard/>
                <CreazioneCard/>
                <CreazioneCard/>
           </div>
        </main>
    );
}
import NoteList from "./NoteList";
import useFetch from "./useFetch";
import CreateNewNote from "./CreateNewNote"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Home = () => {
    const {data: notes, loading} = useFetch("http://localhost:8000/notes")
    return ( 
        <div className="home">
            {loading && <div className="loading">Getting your notes....</div>}
            {notes &&<NoteList notes={notes} />}
            <div className="footer-home">
            <Link to="/create">
                <button className="add">+</button>
            </Link>
        </div>
        </div>
     );
}
 
export default Home;
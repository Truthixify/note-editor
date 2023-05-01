import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";


const NotePage = () => {
    const {id} = useParams()
    const {data: note, loading} = useFetch("http://localhost:8000/notes/"+id)
    const history = useHistory()
    const [deleting, setDeleting] = useState(false)
    
    const handleDelete = () => {
        setDeleting(true)

        setTimeout(() => {
            fetch("http://localhost:8000/notes/"+id, {
            method: "DELETE"
            })
            .then(() => {
            history.push("/")
            setDeleting(false)
            })
        },1000)
    }

    return ( 
        <div className="note-page">
            {loading && <div className="loading">Your Note Is Loading...</div>}
            {note && <div>{note.content}</div>}
            <footer>
                <Link to={`/edit-note/${id}`}>
                    <button>Edit note</button>
                </Link>
                {!deleting && <button onClick={handleDelete}>Delete Note</button>}
                {deleting && <button disabled>Deleting note</button>}
            </footer>
        </div>
     );
}
 
export default NotePage;
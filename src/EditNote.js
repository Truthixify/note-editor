import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const EditNote = () => {
    const { id } = useParams()
    const [save, setSave] = useState(false)
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const history = useHistory()
    let [date, setDate] = useState("")

    useEffect(() => {
        fetch("http://localhost:8000/notes/"+id)
        .then(res => {
        return res.json()
        })
    .then(data => {
        setContent(data.content)
        setTitle(data.title)
        setCategory(data.category)
        let time = new Date()
        time = `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}`
        setDate(time)
    })
    }, [])

    const handleCancel = () => {
        history.go("-1")
    }
    const handleSave = (e) => {
        e.preventDefault()
        setSave(true)

        const note = { title, content, category, date }

        setTimeout(() => {
            fetch("http://localhost:8000/notes/"+id, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(note)
            })
            .then(() => {
                history.go("-1")
            })
        },1000)
    }
    return ( 
        <div className="edit-note">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <footer>
                <button onClick={handleCancel}>Cancel</button>
                {!save && <button onClick={handleSave}>Save</button>}
                {save && <button disabled>Saving</button>}
            </footer>
        </div>
     );
}
 
export default EditNote;
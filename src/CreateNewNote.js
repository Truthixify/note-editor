import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";


const CreateNewNote = () => {
    let time = new Date()
    time = `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}`

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("personal")
    let [date, setDate] = useState(time)
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const addNewNote = (e) => {
        e.preventDefault()
        const note = {title, content, category, date}
        setLoading(true)

        setTimeout(() => {
            fetch("http://localhost:8000/notes", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(note)
                })
            .then(() => {
                setLoading(false)
                history.push("/")
            })
            }, 1000)
    }

    return ( 
        <div className="create">
            <form onSubmit={addNewNote}>
                <div className="title">
                <label>Note Title</label>
                <input type="text"
                    required
                    value={title}
                    onChange={ (e) => setTitle(e.target.value)}
                />
                </div>
                <div className="note-content">
                <label>Note Content</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                </div>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="personal">personal</option>
                    <option value="work">work</option>
                    <option value="study">study</option>
                    <option value="other">other</option>
                </select>
                {!loading && <button>Add Note</button>}
                {loading && <button disabled>Adding Note...</button>}
            </form>
        </div>
     );
}
 
export default CreateNewNote;
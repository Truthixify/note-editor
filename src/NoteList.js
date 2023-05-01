import { useEffect } from "react";
import { Link } from "react-router-dom";

const NoteList = ({notes}) => {
    const color = "#000"
    let bar = document.querySelectorAll(".category")
    let text = document.querySelectorAll(".text")

    text.forEach((text,index) => {
        if(text.textContent === "work") {
            bar[index].style.backgroundColor = "rgb(82, 214, 82)"
        }
        else if(text.textContent === "personal") {
            bar[index].style.backgroundColor = "rgb(230, 80, 105)"
        }
        else if(text.textContent === "study") {
            bar[index].style.backgroundColor = "rgb(97, 208, 241)"
        }
        else  {
            bar[index].style.backgroundColor = "rgb(202, 106, 211)"
        }
    })
    return ( 
        <div className="note-list">
            {!notes.length && <h2 className="empty">Seems you don't have any note, click the icon below to add new notes</h2>}
            {notes.map(note=> (
                    <div className="note" key={note.id}>
                        
                        <Link to={`/notes/${note.id}`}>
                        <div className="note-left-div">
                        <hr className="category" style={{backgroundColor: color}}/>
                        <h2>{note.title}</h2>
                        <p className="text">{note.category}</p>
                        </div>
                        <div className="note-right-div">
                            <h3>{note.date}</h3>
                        </div>
                        </Link>
                </div>
            ))}
        </div>
     );
}
 
export default NoteList;
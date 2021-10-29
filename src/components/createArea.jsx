import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';


function CreateArea(props) {

  const [isClicked,setClick]=useState(false);

  function handleClick(){
    setClick(true);
  }


  const [note,setNote]=useState({
    title:"",
    content:""
  });

  function handleChange(event){

    const {value,name}=event.target;

    setNote( prevValue => {
        return {
          ...prevValue,
          [name]: value
        }
    });
  }

  function submitNote(event){
    props.onAddNote(note);
    setNote({ title:"", content:""});
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isClicked && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
        <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={isClicked?3:1} value={note.content} />
        <Zoom in={isClicked}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

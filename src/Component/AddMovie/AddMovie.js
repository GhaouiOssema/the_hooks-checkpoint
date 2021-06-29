import React , {useState} from 'react'
import './AddMovie.css'
import {Button} from 'react-bootstrap'

function AddMovie({setShow , addNewMovie }) {

    const show = () => {
        setShow(false)
    }

    const [newObject , setNewObject] = useState({})

    const getInput = (e) => {
        setNewObject({...newObject , [e.target.name]:e.target.value})
      }

    return (
            <div className="form-popup"  > 
                <div className="form-container">
                    <div className="tagclose">
                    <h1 className="card-name"> New Movie </h1>
                    </div>
                    <div className="form-group"> 
                        <label><b>Title :</b></label>
                        <input type="text" placeholder="Enter Title" name="title" onChange={getInput} required/>
                        <label><b>Description : </b></label>
                        <input type="text" placeholder="Enter Description" name="description" onChange={getInput} required/>
                        <label><b>Poster Url : </b></label>
                        <input type="text" placeholder="Enter Post Url" name="posterUrl" onChange={getInput} required/>
                        <label><b>Rating : </b></label>
                        <input type="text" placeholder="Enter Rating" name="rating" onChange={getInput} required/>
                        <Button variant="success" type="submit" className="btn" onClick={()=>addNewMovie(newObject)}>Add</Button>
                        <Button variant="danger" type="submit" className="btn" onClick={show} >Cancel</Button>
                    </div>
                </div>
            </div>
    )
}

export default AddMovie

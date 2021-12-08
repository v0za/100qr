import '../App.css';
import React from "react";
import { BigHead } from '@bigheads/core'

const CreateRoom = (props) => {
  function create() {
    props.history.push(`/room/100qr`);
  }
  return (
    <div className="body">
    <div className="profile">
    <BigHead /> 
    </div>
    <button className='button rounded centre' onClick={create}> Join Room </button>
    <h1 className= "text-centre">100QR</h1>
    </div> 
  )
};

export default CreateRoom;



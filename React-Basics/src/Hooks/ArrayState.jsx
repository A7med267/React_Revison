import React, { useState } from 'react'

function ArrayState() {

 let nextId = 5;   
const [devicesNameInput , setDevicesNameInput] = useState ("")
const [inputList, setInputList] = useState([
  {
    id: 1,
    name: "iphone",
  },
  {
    id: 2,
    name: "Mac",
  },
  {
    id: 3,
    name: "Windows",
  },
]);
    const devices = inputList.map((device) => {
      return (
        <li key={device.id}>
          {device.name} <button className="btn edit-btn"
          onClick={()=>{handelEdit(device.id)}}>Edit</button>
          <button className="btn delete-btn"
          onClick={()=>{handelDelete(device.id)}}>Delete</button>
        </li>
      );
    });

    function handelDelete (id){
         const newDevices = inputList.filter((device)=>{
           return device.id !== id;
        }) ;
        setInputList(newDevices);
        }


    function handelEdit(id){
        const editDevice = inputList.find((device)=>{
            return device.id === id;
        })
        // console.log(editDevice);
        setDevicesNameInput(editDevice.name);
    }




function handelAddClick() {
    if (devicesNameInput === ""){
        return alert("Please Enter Value ")

    }else{
        
    // const newList = [...inputList];
    // newList.push(devicesNameInput);
    // setInputList(newList);
    // setDevicesNameInput("");
    setInputList([...inputList, {id:nextId , name:devicesNameInput}])
    setDevicesNameInput("")
    nextId +=1
    }
}


    return (
    <div className="array-card">
        <h2>Devices List</h2>

        <ul>
            {devices}
        </ul>
            
        <input
        className="array-input"
        type="text"
        placeholder="Enter device..."
        value={devicesNameInput}
        onChange={(e)=>setDevicesNameInput(e.target.value)}
        />

        <button className="btn add-btn"
        onClick = {handelAddClick}>
        Add Device
        </button>



    </div>
);}

export default ArrayState
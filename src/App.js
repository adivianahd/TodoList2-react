import React, {useState} from 'react';

function Todolist() {
  const [data, setData] = useState([]);
  let [newData, setNewData] = useState("");
  return (
   <div>
     <input type="text" value={newData} onChange={(e) => {
       setNewData(e.target.value);
     }}></input>
     <button onClick={()=>{
       if(newData === "") return;
        setData([newData, ...data]);
        setNewData("");
     }}>Add</button>
     <div>
     <List data={data}/>
     </div>
   </div>
  );
}

function List(props){
  return(
    <ul>
      {props.data.map((e, i)=>
      <li key={i}>{e}
        <input type="checkbox" checked={true} />    
      </li>
      )}
    </ul>
  )
}


export default Todolist;

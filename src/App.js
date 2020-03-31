import React, { useState } from 'react';

function Todolist() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");
  return (
    <div>
      <input type="text" value={newData} onChange={(e) => {
        setNewData(e.target.value);
      }} />
      <button onClick={() => {
        if (newData === "") return;
        setData([{ str: newData, boolean: true }, ...data]);
        setNewData("");
      }}>Add</button>
      <div>
        <List data={data} onUpdate={(pos, val) => {
          
          const _data = data.concat();
          _data[pos] = val;
          setData(_data);
        }}/>
      </div>
    </div>
  );
}

function List(props) {
  return (
    <ul>
      {props.data.map((e, i) =>
        <li key={i}>{e.str}
          <input
            type="checkbox"
            checked={e.boolean}
            onChange={chkbox => {
              props.onUpdate(i, { str: e.str, boolean: chkbox.target.checked });
            }}
          />
        </li>
      )}
    </ul>
  )
}


export default Todolist;

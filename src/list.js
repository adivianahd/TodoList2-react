import React from 'react';

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

export default List;

import React from 'react';

function List(props) {
  return (
    <ul>
      {props.data.map((e, i) =>
        <li key={i}>{e.str}
          <input
            type="checkbox"
            checked={e.boolean}
            onChange={() => props.onUpdate(i)}
          />
        </li>
      )}
    </ul>
  )
}

export default List;

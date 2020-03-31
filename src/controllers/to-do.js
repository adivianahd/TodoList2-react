import { useState } from 'react';


export default function () {
	const [toDoList, setToDoList] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	const add = () => {
		if (newTodo === "") return;
		setToDoList([{ str: newTodo, boolean: false }, ...toDoList]);
		setNewTodo("");
	}

	const update = (pos, val) => {
		const _toDoList = toDoList.concat();
		_toDoList[pos] = val;
		setToDoList(_toDoList);
	}

	const updateNewTodo = (e) => {
		setNewTodo(e.target.value);
	}

	return ({
		toDoList,
		newTodo,
		add,
		update,
		updateNewTodo,
	})
}

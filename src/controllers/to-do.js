import { useState, useEffect } from 'react';
import axios from "axios";

const API_URL = "http://192.168.0.29:2000/ToDo";
// const API_URL = "http://localhost:2000/ToDo";


export default function () {
	const [toDoList, setToDoList] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	const add = () => {
		if (newTodo === "") return;
		axios.post(API_URL, { str: newTodo }).then(refresh)
		setNewTodo("");
	}

	const refresh = () => {
		axios.get(API_URL).then(r => {
			setToDoList(r.data);
		});
	}

	const update = (pos) => {
		const item = toDoList[pos];
		axios.put(`${API_URL}/${item._id}/toggle`).then(refresh)
	}

	const updateNewTodo = (e) => {
		setNewTodo(e.target.value);
	}


	useEffect(() => {
		refresh();
	}, []);



	return ({
		toDoList,
		newTodo,
		add,
		refresh,
		update,
		updateNewTodo,
	})
}

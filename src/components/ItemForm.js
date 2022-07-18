import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
	const [inputObject, setInputObject] = useState({
		id: uuid(),
		name: "",
		category: "Produce",
	});

	function handleChange(event) {
		setInputObject({ ...inputObject, [event.target.name]: event.target.value });
	}
	function handleSubmit(event) {
		event.preventDefault();
		onItemFormSubmit(inputObject);
	}
	return (
		<form className="NewItem" onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={inputObject.name}
					onChange={handleChange}
				/>
			</label>

			<label>
				Category:
				<select
					name="category"
					value={inputObject.category}
					onChange={handleChange}
				>
					<option value="Produce">Produce</option>
					<option value="Dairy">Dairy</option>
					<option value="Dessert">Dessert</option>
				</select>
			</label>

			<button type="submit">Add to List</button>
		</form>
	);
}

export default ItemForm;

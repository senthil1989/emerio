import React, { useState } from 'react'

const AddFlight = props => {
    const initialState = { id: null, name: '', origin:'', destination:'', price:0, rating:'' }
	const [ user, setUser ] = useState(initialState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	return (
		<form 
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.origin || !user.destination || !user.price || !user.rating) return
				props.addUser(user)
				setUser(initialState)
			}}
		>
			<div class="form-group">
			<label>Name</label>
			<input class="form-control" type="text" name="name" value={user.name} onChange={handleInputChange} />
			</div>
			<div class="form-group"><label>Origin</label>
			<input class="form-control" type="text" name="origin" value={user.origin} onChange={handleInputChange} /></div>
			
			<div class="form-group"><label>Destination</label>
			<input  class="form-control"type="text" name="destination" value={user.destination} onChange={handleInputChange} /></div>
            
			<div class="form-group"><label>Price</label>
			<input class="form-control" type="number" name="price" value={user.price} onChange={handleInputChange} /></div>
			
			<div class="form-group">
			<label>Rating</label>
			<input class="form-control" type="text" name="rating" value={user.rating} onChange={handleInputChange} />
			</div>
			<div class="form-btn">
			<button class="btn btn-primary">Add new user</button>
			</div>
			
		</form>
	)
}
export default AddFlight;
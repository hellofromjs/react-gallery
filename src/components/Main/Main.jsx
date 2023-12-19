import Search from "../Search/Search";
import Gallery from "../Gallery/Gallery";
import AddPhoto from "../AddPhotoForm/AddPhotoForm";
import { useState } from "react";

const Main = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [photos, setPhotos] = useState([
		{
			title: 'Mountain',
			url: 'https://images.unsplash.com/photo-1590305840790-4a8c70c67d43?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'Mist',
			url: 'https://images.unsplash.com/photo-1477948879622-5f16e220fa42?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'Forest',
			url: 'https://images.unsplash.com/photo-1611252871536-305c663777ab?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		}
	]);
	const [displayAddPhotoForm, setDisplayAddPhotoForm] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const filteredPhotos = photos.filter((photo) => {
		return photo.title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	const switchObjects = (firstIndex, secondIndex) => {

		setPhotos(prevState => {
			let data = [...prevState];
		
			let temp = data[firstIndex];
			data[firstIndex] = data[secondIndex];
			data[secondIndex] = temp;

			const toRef = setTimeout(() => {
				setShowAlert(false)
				clearTimeout(toRef);
			  }, 3000);
		
			return data;
		})

		setShowAlert(true)
	}

	return (
		<div>
			<div className="row my-2">
				<Search
					className="col"
					onSearch={handleInputChange}
					value={searchTerm}
				/>

				<div className="col-auto align-self-center">
					<a
						className="btn btn-primary"
						type="button"
						onClick={() => setDisplayAddPhotoForm((prevData) => !prevData)}
					>
						Add Photo
					</a>
				</div>
			</div>

			{showAlert && <div className="alert alert-success" role="alert">
				Photo switched!
			</div>}

			{displayAddPhotoForm && <AddPhoto onAdd={setPhotos} />}

			<Gallery items={filteredPhotos} onSwitch={switchObjects} />
		</div>
	);
};

export default Main;

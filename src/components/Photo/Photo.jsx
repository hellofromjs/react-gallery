const Photo = ({ title, url, id, onSwitch }) => {

	function onDragOver(e)
	{
		e.preventDefault()
	}

	function onDragStart(e, id)
	{
		e.dataTransfer.setData('id', id)
	}

	function onDrop(e, status)
	{
		let otherId = e.dataTransfer.getData('id')

		onSwitch(otherId, id)
	}

	return (
		<div 
		className="col-6 col-md-4" 
		draggable={true} 
		onDrop={(e) => onDrop(e, 'complete')} 
		onDragStart={(e) => onDragStart(e, id)} 
		onDragOver={onDragOver} 
		>
			<img className="img-fluid photo" src={url} />
			<h3 className="title">{title}</h3>
		</div>
	);
};

export default Photo;

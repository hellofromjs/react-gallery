import Photo from "../Photo/Photo";

const Posts = ({ items, onSwitch }) => {
	return (
		<div className="row">
			{items.map((item, i) => {
				return <Photo key={i} id={i} title={item.title} url={item.url} onSwitch={onSwitch} />;
			})}
		</div>
	);
};

export default Posts;

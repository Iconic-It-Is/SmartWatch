import React, { useState } from "react";
import "./Body.css";
import Product from "./Product";
import { Icon } from "@iconify/react";
function Body() {
	const [img, setImg] = useState(0);
	const [ImgBorderIndex, setImgBorderIndex] = useState(0);
	function handleImg(index) {
		setImg(index);
		setImgBorderIndex(index);
	}

	const [time, setTime] = useState(new Date().toLocaleTimeString());
	function updateTime() {
		setTime(new Date().toLocaleTimeString());
	}
	setInterval(updateTime, 1000);

	const [showTime, setShowTime] = useState(true);
	function handleButton(event) {
		const name = event.target.name;
		let time = name === "time" ? true : false;
		setShowTime(time);
	}
	let styles = {
		border: "2px solid teal",
		borderRadius: "8px",
	};
	let btnStyle = {
		color: "white",
		backgroundColor: "grey",
	};
	return (
		<div className="flex-container">
			<div className="flex-child left">
				{/* <center> */}
				<img
					src={Product.colorOptions[img].imageUrl}
					alt={Product.colorOptions[img].styleName}
					height="600"
					width="500"
				/>
				{/* </center> */}
				<div className="data-left">
					{showTime ? (
						<h1>{time}</h1>
					) : (
						<span>
							<Icon icon="mdi:heart-pulse" className="logo" />
						</span>
					)}
				</div>
			</div>
			<div className="flex-child right">
				<h1>{Product.title}</h1>
				<p>{Product.description}</p>
				<h3>Select Color</h3>
				<div className="row">
					{Product.colorOptions.map((item, index) => {
						return (
							<div className="column">
								<img
									className="product-img"
									key={Product.colorOptions[index].id}
									src={item.imageUrl}
									alt={item.styleName}
									onClick={() => {
										return handleImg(index);
									}}
									style={index === ImgBorderIndex ? styles : null}
								/>
							</div>
						);
					})}
				</div>
				<h3>Features</h3>
				<div className="btn row">
					<button
						name="time"
						className="features"
						onClick={(props) => {
							handleButton(props);
						}}
						style={showTime ? btnStyle : null}
					>
						{Product.featureList[0]}
					</button>
					<button
						name="heartbeat"
						className="features"
						onClick={(props) => {
							handleButton(props);
						}}
						style={!showTime ? btnStyle : null}
					>
						{Product.featureList[1]}
					</button>
				</div>
				<button className="primary-btn">Buy Now</button>
			</div>
		</div>
	);
}
export default Body;

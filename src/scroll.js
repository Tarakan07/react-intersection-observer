import React, { useState } from "react";
import { useInView, InView } from "react-intersection-observer";
import "./scroll.css";
const data = [
	{
		id: 1,
		title: "1",
	},
	{
		id: 2,
		title: "2",
	},
	{
		id: 3,
		title: "3",
	},
	{
		id: 4,
		title: "4",
	},
	{
		id: 5,
		title: "5",
	},
	{
		id: 6,
		title: "6",
	},
	{
		id: 7,
		title: "7",
	},
	{
		id: 8,
		title: "8",
	},
	{
		id: 9,
		title: "9",
	},
	{
		id: 10,
		title: "10",
	},
	{
		id: 11,
		title: "11",
	},
];

const Scroll = () => {
	const [active, setActive] = useState(1);
	return (
		<div className="container">
			<div className="list_cat">
				<ul>
					{data.map((cat) => {
						return (
							<li
								style={{ background: active === cat.id ? "red" : "" }}
								key={cat.id}
							>
								{cat.title}
							</li>
						);
					})}
				</ul>
			</div>
			<div className="list_post">
				{data.map((post) => {
					return (
						<InView
							key={post.id}
							// root={document.querySelector(".list_post")}
							rootMargin={"0px 0px 0px 0px"}
							threshold={1}
							onChange={(inView, entry) => {
								console.log("start");
								if (inView) {
									console.log(post.id);
									setActive(post.id);
								}
							}}
						>
							{post.title}
						</InView>
					);
				})}
			</div>
		</div>
	);
};
export default Scroll;

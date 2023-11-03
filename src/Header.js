import React, { useEffect, useRef, useState } from "react";
import { useInView, InView } from "react-intersection-observer";
import "./header.css";

const data = [
	{
		id: 1,
		title: "Section 1",
	},
	{
		id: 2,
		title: "Section 2",
	},
	{
		id: 3,
		title: "Section 3",
	},
];
const Header = () => {
	const [active, setActive] = useState(1);

	return (
		<div>
			<div className="header">
				<ul>
					{data.map((section) => {
						return (
							<li
								key={section.id}
								className={section.id === active ? `active` : ""}
							>
								{section.title}
							</li>
						);
					})}
				</ul>
			</div>
			{data.map((section) => {
				return (
					<InView
						key={section.id}
						threshold={0.5}
						onChange={(inView, entry) => {
							if (inView) {
								setActive(section.id);
							}
						}}
					>
						<div className={`section section_${section.id}`}>
							<h1>{section.title}</h1>
						</div>
					</InView>
				);
			})}
		</div>
	);
};

export default Header;

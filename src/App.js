import React, { useState } from "react";
import Header from "./Header";
import Scroll from "./scroll";
const App = () => {
	const [comp, setComp] = useState(true);
	return (
		<>
			<div
				style={{
					position: "fixed",
					zIndex: 999,
					top: "50%",
				}}
			>
				<button
					onClick={() => setComp((prev) => !prev)}
					style={{
						border: "none",
						outline: "none",
						background: "#000",
						color: "#fff",
						padding: "10px 15px",
						borderRadius: "20px",
						cursor: "pointer",
					}}
				>
					Change component
				</button>
			</div>
			{comp ? <Header /> : <Scroll />}
		</>
	);
};

export default App;

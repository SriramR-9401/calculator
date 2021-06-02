import "./App.css";
import { useState } from "react";
import "animate.css";
import { useForm } from "react-hook-form";
function App() {
	const [Ans, setAns] = useState("");
	const [ch, setch] = useState("");
	const [first, setFirst] = useState("");
	const [second, setSecond] = useState("");
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm();
	return (
		<div className="App pt-5 bg-info" style={{ height: "100vh" }}>
			<div
				className="w-50 p-5 shadow bg-light"
				style={{ minWidth: "325px", margin: "auto" }}
			>
				<h4 className="p-3">Simple Calculator using React</h4>
				<form onSubmit={handleSubmit((data) => console.log(data))}>
					<div className="mb-3">
						<label className="form-label">First Operand</label>
						<br />
						<input
							type="number"
							name="first"
							id="1"
							placeholder="Enter operand"
							{...register("first", { required: "Enter first operand" })}
						/>
						<div id="emailHelp" className="form-text" style={{ color: "red" }}>
							{errors.first && errors.first.message}
						</div>
					</div>
					<div className="mb-3">
						<label className="form-label">Second Operand</label>
						<br />
						<input
							type="number"
							name="second"
							id="2"
							placeholder="Enter operand"
							{...register("second", { required: "Enter second operand" })}
						/>
						<div id="emailHelp" className="form-text" style={{ color: "red" }}>
							{errors.second && errors.second.message}
						</div>
					</div>

					<br />
					<h5>select the operator </h5>
					<button
						type="submit"
						className="btn btn-info m-2"
						onClick={() => {
							setAns(
								parseInt(getValues("first")) + parseInt(getValues("second"))
							);
							setch("+");
							setFirst(getValues("first"));
							setSecond(getValues("second"));
						}}
					>
						<b>+</b>
					</button>
					<button
						type="submit"
						className="btn btn-info m-2"
						onClick={() => {
							setAns(
								parseInt(getValues("first")) - parseInt(getValues("second"))
							);
							setch("-");
							setFirst(getValues("first"));
							setSecond(getValues("second"));
						}}
					>
						<b>-</b>
					</button>
					<button
						type="submit"
						className="btn btn-info m-2"
						onClick={() => {
							setAns(
								parseInt(getValues("first")) * parseInt(getValues("second"))
							);
							setch("*");
							setFirst(getValues("first"));
							setSecond(getValues("second"));
						}}
					>
						<b>*</b>
					</button>
					<button
						type="submit"
						className="btn btn-info m-2"
						onClick={() => {
							setAns(
								parseInt(getValues("first")) / parseInt(getValues("second"))
							);
							setch("/");
							setFirst(getValues("first"));
							setSecond(getValues("second"));
						}}
					>
						<b>/</b>
					</button>
					{second || first || Ans ? (
						<div className="p-3 m-3 bg-secondary text-white fs-5 text-center animate__animated animate__rubberBand">
							{first} {ch} {second} = {isNaN(Ans) ? "Invalid Operation" : Ans}
						</div>
					) : (
						""
					)}
				</form>
			</div>
		</div>
	);
}

export default App;

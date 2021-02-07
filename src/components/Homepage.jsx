import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Homepage.css";

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			obj: [],
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.removeElement = this.removeElement.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const inputs = event.target.getElementsByTagName("input");
		if (!inputs.name.value) {
			alert("no name");
		} else {
			var new_obj = this.state.obj.concat({
				name: inputs.name.value,
				key: this.state.obj.length,
				m: inputs.monday.checked,
				t: inputs.tuesday.checked,
				w: inputs.wednesday.checked,
				th: inputs.thursday.checked,
				f: inputs.friday.checked,
				from: inputs.from.value,
				to: inputs.to.value,
			});
			this.setState({ obj: new_obj });
			event.target.reset();
		}
	}

	removeElement(key) {
		var new_obj = this.state.obj.filter((data) => data.key !== key);
		this.setState({ obj: new_obj });
	}

	render() {
		let list = this.state.obj.map((data) => {
			var mon = data.m ? `${data.from} - ${data.to}` : "";
			var tues = data.t ? `${data.from} - ${data.to}` : "";
			var weds = data.w ? `${data.from} - ${data.to}` : "";
			var thurs = data.th ? `${data.from} - ${data.to}` : "";
			var fri = data.f ? `${data.from} - ${data.to}` : "";
			return (
				<tr>
					<th>{data.name}</th>
					<td>{mon}</td>
					<td>{tues}</td>
					<td>{weds}</td>
					<td>{thurs}</td>
					<td>{fri}</td>
				</tr>
			);
		});
		return (
			<div className="container-fluid">
				<h1 className="mx-auto">Schedule Planner</h1>
				<div className="row">
					<div className="col-lg-8 col-sm-8">
						<table className="table">
							<tbody>
								<tr>
									<th>Class Name</th>
									<th>Monday</th>
									<th>Tuesday</th>
									<th>Wednesday</th>
									<th>Thursday</th>
									<th>Friday</th>
								</tr>
								{list}
							</tbody>
						</table>
					</div>

					<div className="col-lg-2 col-md-4">
						<h6>Class Form</h6>
						<hr />
						<form onSubmit={this.onSubmit} id="form">
							<div className="form-group">
								<input className="form-control" type="text" name="name" placeholder="Class Name" />
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" name="monday" id="flexCheckDefault"></input>
								<label className="form-check-label" forhtml="flexCheckDefault">
									Monday
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" name="tuesday" id="flexCheckDefault"></input>
								<label className="form-check-label" forhtml="flexCheckDefault">
									Tuesday
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" name="wednesday" id="flexCheckDefault"></input>
								<label className="form-check-label" forhtmlr="flexCheckDefault">
									Wednesday
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" name="thursday" id="flexCheckDefault"></input>
								<label className="form-check-label" forhtml="flexCheckDefault">
									Thursday
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" name="friday" id="flexCheckDefault"></input>
								<label className="form-check-label" forhtml="flexCheckDefault">
									Friday
								</label>
							</div>

							<label htmlFor="">From: </label>
							<input type="time" name="from" />
							<br />
							<label htmlFor="">To: </label>
							<input type="time" name="to" />

							<button className="btn btn-primary" type="submit">
								Add Class
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;

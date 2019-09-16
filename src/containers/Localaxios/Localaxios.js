import React, { Component } from "react";
import axios from "axios";
import mymod from "./mymod";

export default class Localaxios extends Component {
	state = { dataLength: 0, counter: 0 };

	fetchData = () => {
		return axios
			.get("https://jsonplaceholder.typicode.com/posts?_limit=2")
			.then(res => this.setState({ dataLength: res.data.length }))
			.catch(err => console.log(err));
	};

	alacon = arg => "alacon";

	changeSomeValue = myValue => () => this.setState({ counter: myValue });

	changeSomeValueWithMethodeDependencie = myValue => () =>
		this.setState({ counter: this.alacon(myValue) });

	changeSomeValueWithModuleDependencie = myValue => () =>
		this.setState({ counter: mymod.magie(myValue) });

	render() {
		return (
			<div>
				<p>
					<button onClick={this.fetchData} data-test="button-async">
						fetch
					</button>
					{this.state.dataLength}
				</p>

				<p>
					<button onClick={this.changeSomeValue(5)} data-test="button-sync">
						change state
					</button>
					{this.state.counter}
				</p>

				<p>
					<button
						onClick={this.changeSomeValueWithMethodeDependencie(5)}
						data-test="button-sync-trick"
					>
						change state
					</button>
					{this.state.counter}
				</p>

				<p>
					<button
						onClick={this.changeSomeValueWithModuleDependencie(6)}
						data-test="button-sync-trick-mod"
					>
						change state with module dep
					</button>
					{this.state.counter}
				</p>
			</div>
		);
	}
}

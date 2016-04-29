var Header = React.createClass({
	propTypes: {
		headers: React.PropTypes.array.isRequired
	},
	getInitialState() {
		var self = this;
		return {
			headers:  self.props.headers,
			availableHeaders: self.props.headers,
			selectedHeaders: new Array(self.props.headers.length)
		};
	},
	changeHeader(evt){
		var target = evt.target;
		var value = target.value;
		var index = Number(target.getAttribute("data-index"));
		var availableHeaders = this.state.availableHeaders
		var selectedHeaders = this.state.selectedHeaders;
		if(value){
			selectedHeaders[index] = value;
			availableHeaders = availableHeaders.filter((val) => val != value)
		}else{
			if (selectedHeaders[index]){
				var tpm = selectedHeaders[index];
				selectedHeaders[index] = null;
				availableHeaders.push(tpm);
			}
		}
		this.setState({
			selectedHeaders: selectedHeaders,
			availableHeaders: availableHeaders
		});
	},
	render() {
		return (
			<section className="Headers">
				{this.state.headers.map((header, index) => 
					<select key={index} onChange={this.changeHeader} data-index={index} value={this.state.selectedHeaders[index]}>
						<option value={null}></option>
						{
							this.state.selectedHeaders[index] ?
								<option value={this.state.selectedHeaders[index]}>{this.state.selectedHeaders[index]}</option>
							:
								null
						}
						{this.state.availableHeaders.map((option, index) => 
							<option value={option} key={index}>{option}</option>
						)}
					</select>
				)}
			</section>
		);
	}
})
var Importer = React.createClass({
	propTypes: {
		headers: React.PropTypes.array.isRequired,
		data: React.PropTypes.array
	},
	render() {
		return (
			<article className="Importer">
				<Header headers={this.props.headers}/>
			</article>
		);

	}
});
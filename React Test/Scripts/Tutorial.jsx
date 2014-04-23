/** @jsx React.DOM */

var Main = React.createClass({
	getInitialState: function() {
		return { data: this.props.initialData };
	},

	changeStuff: function() {
		var current = this.state;

		for(var i = 0; i < current.data.length; i++) {
			var random = Math.floor(Math.random()*2);
			if(random === 0) {
				current.data[i].visible = false;
			} else {
				current.data[i].visible = true;
			}
		}

		this.setState(current);
	},

	render: function() {
		var tiles = this.state.data.map(function(tile) {
			return <Item key={tile.id} visible={tile.visible} textLength={tile.length}/>;
		});

		return (
			<div>
				<ChangeButton changeAction={this.changeStuff}/>
				<hr />
				{tiles}
			</div>
		);
	}
});

var ChangeButton = React.createClass({
  handleClick: function(event) {
    this.props.changeAction();
  },

  render: function() {
	return (
		<button onClick={this.handleClick}>Click me!</button>
    );
  }
});

var Item = React.createClass({
	componentWillMount: function() {
		var lorem = "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel. ";
		var count = this.props.textLength;
		var data = "";

		for(var i = 1;i<=count;i++) {
			data = data + lorem;
		}

		this.setState({text: data});
	},

	render: function() {
		if(this.props.visible == false) {
			return <EmptyTemplate />;
		};
	
		return (
			<div>
				<h1>Item {this.props.key}</h1>
				<p>{this.state.text}</p>
			</div>
		);
  }
});

var EmptyTemplate = React.createClass({
	render: function() {
		return(
			<div></div>
		);
	}
});

//React.renderComponent(
//  <Main />,
//  document.getElementById('content')
//);

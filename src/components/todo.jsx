import React from "react";
import { connect } from "react-redux";
import Actions from '../actions/todo';
import { Form, Button } from 'react-bootstrap';

class Todos extends React.Component{
  constructor(props){
		super(props);
		this.state = {text: ''}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault()
		const { dispatch } = this.props;

		const data = {text: this.state.text}

		this.setState({text: ''})
		dispatch(Actions.add_todo(data))
	}

	handleChange(event) {
    this.setState({text: event.target.value});
  }

	render(){
		const renderList = (
			<ul>
				{this.props.todos.map((todo) => 
					<li>{todo.text}</li>
				)}
			</ul>
		)
		return(
			<div className="row">
				<div className="col-sm-6 col-md-6">
					<Form onSubmit={this.handleSubmit}>
						<Form.Group controlId="formBasicEmail">
              <Form.Label>Text</Form.Label>
              <Form.Control type="text" value={this.state.text} onChange={this.handleChange} placeholder="Enter todo" required={true} />
            </Form.Group>

						<Button variant="primary" type="submit">
              Submit
            </Button>
					</Form>	
				</div>
				<div className="col-sm-6 col-md-6">
					{renderList}
				</div>
			</div>	
		);
	}
}

const mapStateToProps = (state) => ({
	todos: state.todo.tasks
}) 

export default connect(mapStateToProps)(Todos)

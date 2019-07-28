import React, { useState, useEffect } from "react"
import { Container, Row, Col, ListGroup, ListGroupItem, Form } from 'reactstrap'
import InputComponent from '../../components/InputComponent/InputComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const TodoList = () => {
	const [ todoList, setTodoList] = useState([])
	const [ inputValue, setInputValue] = useState('')

	useEffect(() => {
    	getTodoList()
  	}, [])

	const onChangeText = event => setInputValue(event.target.value)

	const onClickAdd = (event) => {
		event.preventDefault()
		if (!inputValue) {
			return
		}
		let todoItem = {
			id: getId(),
			text: inputValue
		}
		setTodoList([...todoList, todoItem])
		setInputValue('')
		saveTodoList([...todoList, todoItem])
	}

	const onRemoveTodo = (id) => {
		let removedTodo = todoList.filter(todoItem => todoItem.id !== id)
		setTodoList(removedTodo)
		saveTodoList(removedTodo)
	}

	const saveTodoList = (todoList) => localStorage.setItem('todoList', JSON.stringify(todoList))
	const getTodoList = () => JSON.parse(localStorage.getItem('todoList')) ? setTodoList(JSON.parse(localStorage.getItem('todoList'))) : null

	const getId = () => '_' + Math.random().toString(36).substr(2, 9)

  return (
  		<Container fluid>
  			<Row>
  				<Col>
  					<h1 className="text-center todo-heading">Todo List</h1>
  				</Col>
  			</Row>
  			<Row>
  				<Col className="d-none d-sm-block d-sm-none d-md-block">
  				</Col>
  				<Col>
  					<Form onSubmit={onClickAdd} className="d-flex todo-container">
  						<InputComponent
	  						type="text"
	  						value={inputValue}
	  						placeholder="Add tasks"
	  						className="todo-input"
	  						onChange={onChangeText}
  						/>
						<ButtonComponent
							color="secondary"
							onClick={onClickAdd}
							type="submit"
						>
							Add
						</ButtonComponent>
  					</Form>
  				</Col>
  				<Col className="d-none d-sm-block d-sm-none d-md-block">
  				</Col>
  			</Row>
  			<Row>
  				<Col className="d-none d-sm-block d-sm-none d-md-block"></Col>
  				<Col>
  					<ListGroup className="todo-list-group">
				        {
				        	todoList.length ?
				        		todoList.map((todoItem, index) =>
				        			<div className="todo-list-item-container">
					        			<ListGroupItem
					        				key={index}
					        				className="todo-list-item d-flex justify-content-between align-items-center"
					        			>
					        				<span>{todoItem.text}</span>
					        				<span className="text-danger cursor-pointer" onClick={() => onRemoveTodo(todoItem.id)}><i class="fas fa-trash-alt"></i></span>
					        			</ListGroupItem>
					        			<div>
					        				<ButtonComponent
												color="link"
												type="submit"
												className="text-decoration-none"
											>
												Edit
											</ButtonComponent>
				        				</div>
				        			</div>
				        		)
				        	: null
				        }
			      </ListGroup>
  				</Col>
  				<Col className="d-none d-sm-block d-sm-none d-md-block"></Col>
  			</Row>
  		</Container>
  	)
}

export default TodoList

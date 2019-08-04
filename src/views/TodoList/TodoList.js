import React, { useState, useEffect } from "react"
import { Container, Row, Col, ListGroup, Form } from "reactstrap"
import InputComponent from "../../components/InputComponent/InputComponent"
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent"
import TodoItem from "../../components/TodoItem/TodoItem"
import { getId } from "../../constants"

const TodoList = () => {
  const [todoList, setTodoList] = useState([])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    getTodoList()
  }, [])

  const onChangeText = event => setInputValue(event.target.value)

  const onClickAdd = event => {
    event.preventDefault()
    let todoItem = {
      id: getId(),
      text: inputValue
    }
    setTodoList([todoItem, ...todoList])
    setInputValue("")
    saveTodoList([todoItem, ...todoList])
  }

  const onRemoveTodo = id => {
    let removedTodo = todoList.filter(todoItem => todoItem.id !== id)
    setTodoList(removedTodo)
    saveTodoList(removedTodo)
  }

  const saveTodoList = todoList =>
    localStorage.setItem("todoList", JSON.stringify(todoList))
  const getTodoList = () =>
    JSON.parse(localStorage.getItem("todoList"))
      ? setTodoList(JSON.parse(localStorage.getItem("todoList")))
      : null

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="text-center todo-heading">Todo List</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-none d-sm-block d-sm-none d-md-block" />
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
              disabled={!inputValue}
            >
              Add
            </ButtonComponent>
          </Form>
        </Col>
        <Col className="d-none d-sm-block d-sm-none d-md-block" />
      </Row>
      <Row>
        <Col className="d-none d-sm-block d-sm-none d-md-block" />
        <Col>
          <ListGroup className="todo-list-group">
            {todoList.length
              ? todoList.map((todoItem, index) => {
                  return (
                    <TodoItem
                      key={index}
                      todoItem={todoItem}
                      onRemoveTodo={onRemoveTodo}
                      todoList={todoList}
                      setTodoList={setTodoList}
                      saveTodoList={saveTodoList}
                    />
                  )
                })
              : null}
          </ListGroup>
        </Col>
        <Col className="d-none d-sm-block d-sm-none d-md-block" />
      </Row>
      <Row>
        <Col>
          <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
            <a href="http://ajaysinghrajput.com" target="_blank" rel="noopener noreferrer"> ajaysinghraput.com</a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TodoList

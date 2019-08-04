import React, { useState } from "react"
import { ListGroupItem, Form } from "reactstrap"
import ButtonComponent from "../ButtonComponent/ButtonComponent"
import InputComponent from "../InputComponent/InputComponent"

const TodoItem = ({
  todoItem,
  todoList,
  onRemoveTodo,
  onClickAdd,
  setTodoList,
  saveTodoList
}) => {
  const [saveValue, setSaveValue] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [editTodoIds, setEditTodoIds] = useState([])

  const onChangeSaveText = event => setSaveValue(event.target.value)

  const onClickEdit = todoItem => {
    let newTodoList = todoList.map(todo => todo.id).includes(todoItem.id)
    if (newTodoList) {
      setSaveValue(todoItem.text)
    }
    setIsEdit(true)
    setEditTodoIds([...editTodoIds, todoItem.id])
  }

  const onClickSave = (event, todoItem) => {
    let newTodoList = todoList.map(todo =>
      todo.id === todoItem.id ? { ...todo, text: saveValue } : todo
    )
    event.preventDefault()
    setTodoList(newTodoList)
    setSaveValue("")
    saveTodoList(newTodoList)
    setEditTodoIds([])
    setIsEdit(false)
  }

  const onClickCancel = () => {
    setIsEdit(false)
    setEditTodoIds([])
  }

  let findAllMatchIds = editTodoIds
    .map(todoIds => todoIds)
    .includes(todoItem.id)
  if (isEdit && findAllMatchIds) {
    return (
      <Form
        onSubmit={onClickAdd}
        className="d-flex todo-container margin-top-02 margin-bottom-02"
      >
        <InputComponent
          type="text"
          value={saveValue}
          placeholder="Add tasks"
          className="todo-input"
          onChange={onChangeSaveText}
        />
        <ButtonComponent
          color="secondary"
          onClick={event => onClickSave(event, todoItem)}
          type="submit"
          disabled={!saveValue}
          className="margin-right-02"
        >
          Save
        </ButtonComponent>
        <ButtonComponent
          color="secondary"
          onClick={onClickCancel}
          type="submit"
        >
          Cancel
        </ButtonComponent>
      </Form>
    )
  }
  return (
    <div className="todo-list-item-container">
      <ListGroupItem className="todo-list-item d-flex justify-content-between align-items-center">
        <span>{todoItem.text}</span>
        <span
          className="text-danger cursor-pointer"
          onClick={() => onRemoveTodo(todoItem.id)}
        >
          <i className="fas fa-trash-alt" />
        </span>
      </ListGroupItem>
      <div>
        <ButtonComponent
          color="link"
          type="submit"
          className="text-decoration-none"
          onClick={() => onClickEdit(todoItem)}
        >
          Edit
        </ButtonComponent>
      </div>
    </div>
  )
}

export default TodoItem

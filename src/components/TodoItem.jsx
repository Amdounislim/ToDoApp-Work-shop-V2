import React from 'react'
import {
    Button,
    ListGroup,
    ListGroupItem
  } from "reactstrap";

export default function TodoItem(props) {
    return (
        <div>
            <ListGroup>
          {props.toDoList.map((el, i) => (
            <ListGroupItem className={"ListGroupItem"} key={i}>
              <Button
                color={"success"}
                className={"m-1"}
                onClick={() => props.handleDone(i)}
              >
                {el.isComplete ? "Undo" : "Done"}
              </Button>
              <Button
                color={"danger"}
                className={"m-1"}
                onClick={()=>props.handleDelete(i) }
              >
                Delete
              </Button>
              <p
                style={{
                  display: "inline",
                  textDecoration: el.isComplete ? "line-through" : "none"
                }}
                className={"m-2"}
              >
                {el.todoText}
              </p>
            </ListGroupItem>
          ))}
        </ListGroup>
        </div>
    )
}

import React, { Component } from 'react'
import {
    Button,
    Card,
    CardBody,
    Form,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";

export default class AddItem extends Component {
    state={
        grbbedValue: "",
    }

      // 🤖 HANDLERS 🤖
  handleOnChange = e => {
    this.setState({
      grbbedValue: e.target.value
    });
  };

  fathi = (e) => {
      e.preventDefault();
      if (this.state.grbbedValue) {
      this.props.addtodo({ todoText: this.state.grbbedValue, isComplete: false })
      this.setState({grbbedValue: ""})
      }else{alert("oops")}
  }


    render() {
        return (
            <div>
                <Card className={"bg-primary"}>
          <CardBody>
            <h1 className={"text-white "}>To-Do App!</h1>
            <Form
              for={"text"}
              className={"text-white"}
              onSubmit={this.fathi}
            >
              <FormGroup>
                <Label>Add New To-Do</Label>
                <Input
                  type={"text"}
                  id={"text"}
                  value={this.state.grbbedValue}
                  placeholder="Enter a task"
                  onChange={this.handleOnChange}
                />
                <Button color={"success"} className={"mt-2 text-center"}>
                  Add
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
            </div>
        )
    }
}

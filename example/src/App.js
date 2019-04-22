import React, { Component } from 'react';
import { Button } from "dm-components";

export default class App extends Component {
  render () {
    return (
      <div>
        <Button text={"Hey"}
                type={'large'}></Button>

        <Button isSecondary={true}
                text={"Hey"}
                type={'large'}></Button>

        <Button text={"Hey"}
                type={'small'}></Button>

        <Button isSecondary={true}
                text={"Hey"}
                type={'small'}></Button>

        <Button text={"Hey"}
                type={'flat'}></Button>

        <Button isSecondary={true}
                text={"Hey"}
                type={'flat'}></Button>
      </div>
    )
  }
}

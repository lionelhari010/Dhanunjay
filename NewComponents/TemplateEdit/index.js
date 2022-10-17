import { Component } from "react";

class TemplateEdit extends Component {
  render() {
    return (
      <div>
        <h1>Task name</h1>
        <p>Approval Task</p>
        <div>
          <label>Activity Name</label>
          <input type="text" placeholder="input text" />
        </div>
      </div>
    );
  }
}
export default TemplateEdit;

import React, { Component } from "react";

class Test extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="container">
          <h1>Monorepo Demo1111</h1>
          <p style={{ marginBottom: "10px" }}>
            This text is coming from shared component:{" "}
            <span style={{ color: "red" }}>Test</span>
          </p>
          <button
            style={{
              marginBottom: "10px",
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px"
            }}
          >
            Trigger shared alert
          </button>
        </div>
      </div>
    );
  }
}

export default Test;

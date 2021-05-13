import React from "react";

import { nav } from "bootstrap";

export default function Nav() {
  return (
    <div>
      <nav
        class="navbar navbar-dark bg-primary"
        style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
      >
        {" "}
        List users from jsonplaceholder
      </nav>
    </div>
  );
}

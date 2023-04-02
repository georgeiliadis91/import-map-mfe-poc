import { init as initMfeOne } from "lit-mfe-one";
import { init as initMfeTwo } from "lit-mfe-two";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Root Project<h1>
  </div>
`;

initMfeOne();
initMfeTwo();

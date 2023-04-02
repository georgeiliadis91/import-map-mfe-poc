import { html, LitElement } from "lit";

export class Home extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<div style="border: 1px solid blue;">
      <h1>Lit Mfe Two - Home Page</h1>
    </div>`;
  }
}

customElements.define("my-home-mfe-two", Home);

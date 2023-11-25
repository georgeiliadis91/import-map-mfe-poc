import { html, LitElement } from "lit";

export class Special extends LitElement {
  static properties = {
    pokemon: [],
  };

  constructor() {
    super();
  }

  async onBeforeEnter() {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`).then(
      (res) => res.json()
    );
    this.pokemon = data.results;
  }

  render() {
    return html`<div style="border:1px solid red;">
      <h2>Pokemon get first 10 pokemon - mfe 1</h2>
      <ul>
        ${this.pokemon.map((item) => html`<li>${item.name}</li>`)}
      </ul>
    </div>`;
  }
}
customElements.define("my-special-mfe-one", Special);

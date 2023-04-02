import { html, LitElement } from "lit";

export class Special extends LitElement {
  static properties = {
    pathId: "",
    pokemon: [],
  };

  constructor() {
    super();
  }

  async onBeforeEnter(location) {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`
    ).then((res) => res.json());
    this.pokemon = data.results;
  }

  firstUpdated() {
    console.log("pokemon:", this.pokemon);
  }

  render() {
    return html`<div style="border: 1px solid blue;">
      <h2>Pokemon get the next 10 pokemon - on mfe 2</h2>
      <ul>
        ${this.pokemon.map((item) => html`<li>${item.name}</li>`)}
      </ul>
    </div>`;
  }
}

customElements.define("my-special-mfe-two", Special);

import '/elements/date-message.js'
import '/elements/hoge-logger.js'

class MyAppElement extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    console.log('my-app element is connected')

    this.shadowRoot.innerHTML = `
      <style>
        p {
          color: ${this.getAttribute('color') || '#00f'};
        }
      </style>

      <p>This is a custom element!</p>
      <date-message />
      <hoge-logger hogeAttr="hoge??" />
    `
  }
}

customElements.define('hoge-app', MyAppElement)

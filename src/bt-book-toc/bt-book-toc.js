import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-list';
import '../shared-styles';

class BtBookToc extends PolymerElement {

  constructor() {
    super();
    this.tableOfContents = [];
  }

  static get properties() {
    return {
      tableOfContents: {
        type: Array,
        notify: true
      }
    }
  }

  static get template() {
    return html`
      <style>
        :host {
          margin-left: 20px;
        }
      </style>
      <h3>Table of Contents</h3>
      <ol>
        <template is="dom-repeat" id="menu" items="{{tableOfContents}}">
          <div>
            <li>[[item.title]]</li>
          </div>
        </template> 
      </ol>
    `;
  }
}

window.customElements.define('bt-book-toc', BtBookToc);
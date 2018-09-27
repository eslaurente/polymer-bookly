import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image'
import '../shared-styles';

class BtBook extends PolymerElement {
  static get properties() {
    return {
      book: {
        type: Object,
        notify: true
      }
    }
  }

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display:inline-block;
          margin:0 0rem 0 20px;
          box-shadow:0 0 0 1px rgba(0, 0, 0, 0.0901961);
          border-radius:3px;
          position:relative;
          top:0;
          transition:all 0.25s ease-in-out;
          -webkit-transition:all 0.25s ease-in-out;
          --poly-book-min-background-color:#FFC107;
        }
        
        :host(:hover) {
          box-shadow:0 17px 30px 0 rgba(0, 0, 0, 0.19), 0 12px 15px 0 rgba(0, 0, 0, 0.24);
          position:relative;top:-5px;
        }
        
        :host(:focus) {
          border:none;
          outline:none;
          box-shadow:0 17px 30px 0 rgba(0, 0, 0, 0.19), 0 12px 15px 0 rgba(0, 0, 0, 0.24);
          position:relative;
          top:-5px;
        }
        
        :host(.no-hover:hover), :host(.no-hover:focus) {
          box-shadow:0 0 0 1px rgba(0, 0, 0, 0.0901961);
          top:0;
        }
        
        .book-container {
          margin: 20px 20px;
        }
      </style>

      <div class="book-container">
        <h1>[[book.title]]</h1>
        <div>
            <iron-image src="https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg"></iron-image>
        </div>
        <p>[[book.description]]</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      </div>
    `;
  }
}

window.customElements.define('bt-book', BtBook);
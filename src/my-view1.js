/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image'
import '@polymer/iron-ajax';
import './bt-book-summary/bt-book-summary.js';
import './bt-book-toc/bt-book-toc';
import './shared-styles.js';

class MyView1 extends PolymerElement {

  constructor() {
    super();
    this.url = '';
    this.book = null;
  }

  connectedCallback() {
    super.connectedCallback();
    const url = `https://d1re4mvb3lawey.cloudfront.net/${this.isbn}/index.json`;
    console.log(url);
    this.set('url', url);
  }

  static get properties() {
    return {
      isbn: {
        type: Object,
        notify: true
      },
      book: {
        type: Object,
        readOnly: true,
        notify: true
      }
    }
  }

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        
        .card {
          display: flex;
        }
      </style>
      <template is="dom-if" if="[[url]]">
        <iron-ajax
            auto
            url="[[url]]"
            handle-as="json"
            on-response="handleResponse"
            debounce-duration="300">
        </iron-ajax>
      </template>
      <div class="card">
      <template is="dom-if" if="[[book]]">
        <bt-book-summary book="[[book]]"></bt-book-summary>
        <bt-book-toc table-of-contents="[[book.toc]]" ></bt-book-toc>
      </template>
      </div>
    `;
  }

  handleResponse(event, request) {
    console.log(request.status, request.response);
    const { status, response } = request;
    if (status === 200) {
      this._setBook(response);
    }
    else {
      this._setBook(null);
    }
  }
}

window.customElements.define('my-view1', MyView1);

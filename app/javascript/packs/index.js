// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers'

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(allReducers);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})

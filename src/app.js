'use strict'

/// Import Modules
/// CommonsJS - Can use on the App
/// module.exports = ...
/// ES6 - Can use once in App
/// export default

import React from 'react'
import Title from './title'

class App extends React.Component {
  render () {
    return (
      <div className='Container'>
        <Title name='Matheus' lastname='Ximenes' />
      </div>
    )
  }
}

/* ES5
const App = React.createClass({
  render: function () {
    return <div>App</div>
  }
})
*/

export default App

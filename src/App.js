import React, { Fragment } from 'react';

// import Button from 'antd-mobile/es/button';
// import { Button } from 'antd-mobile';//按需引入
// function App() {
//   return (
//     <div className="App">
//     123
//     </div>
//   );
// }
import renderRoutes from "@utils/renderRoutes";
import { baseConfigRoutes } from "@router";
import { Switch, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          {renderRoutes(baseConfigRoutes)}
          <Redirect from="/" to="/home" />
        </Switch>
      </Fragment>
    )
  }
}
export default App;

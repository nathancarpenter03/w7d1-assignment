import React from 'react';
// import Image from './Image'; // . tells us its from local file, not node modeules 
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {
    render(){

        // let Images = [];

        // for (let i = 0; i < 50; i++) {
        //     Images.push(<Image number = {i} />);
        // }

        return <div className="container">
            <AddTodo/>
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                <Todos/>
                </div>
            </div>
        </div>
    }
}

export default App;
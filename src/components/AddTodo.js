import React from 'react';


class AddTodo extends React.Component {
    render() {
        return <div>
        <div className="col-md-6 col-md-offset-3">
            <label for="sel1">Category</label>
            <select className="form-control">
                <option>Work</option>
                <option>School</option>
                <option>Hobbies</option>
                <option>Social</option>
                <option>Finances</option>
            </select>
        </div>
        <div className="input-group col-md-6 col-md-offset-3">
            <input id="new-todo" type="text" className="form-control" maxlength="160" placeholder="Add to list"/>
            <div className="input-group-btn">
                <button id="new-todo-button" className="btn btn-info" type="button">Add</button>
            </div>
        </div>
        </div>
    }
}

export default AddTodo;

// Add a new component called AddTodo with a category select tag, and a description input field (with an Add Todo button using a Bootstrap input-group). We do not use the id="" attribute in HTML any more, and you cannot use the document variable in JS either. So, at this time just get the AddTodo component showing up above the list of todos. We'll work on making it work tomorrow.


// <div class="panel panel-default">
//     <div class="row">
//         <div class="col-md-6">
//             <label for="sel1">Category</label>
//             <select class="form-control" id="sel1">
//                 <option>Work</option>
//                 <option>School</option>
//                 <option>Hobbies</option>
//                 <option>Social</option>
//                 <option>Finances</option>
//             </select>
//         </div>
//         <div class="col-md-6">
//             <label for="duedate">Due Date</label> <br/>
//             <input type="text" id="duedate" value="">
//         </div>
//     </div>
//         <div class="input-group">
//             <input id="new-todo" type="text" class="form-control" maxlength="160" placeholder="Add to list">
//             <div class="input-group-btn">
//                 <button id="new-todo-button" class="btn btn-info" type="button">Add</button>
//             </div>
//         </div>
//     <div class="panel-body">
//         <ul class="list-group todosContainer">
//             <li>random list item</li>
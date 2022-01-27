import React, { Component } from 'react'
export class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:[
                {titleToBeAdded:"Task1"},
                {titleToBeAdded:"Task2"},
            ],
            newTodoTitle:[ 
                ''
            ]
       }
    }

    newValueTitle =(event) =>{
        this.setState({newTodoTitle:event.target.value});
    };

    handleDelete=(id)=>{
        console.log("delete",id)
        var newTodos1 =[...this.state.todo]
        var todo = newTodos1.filter((element,i) => {
            return i !== id
        })
        this.setState({todo:todo});
    }
    handleEdit=(id)=> {
        var filterdItems =[...this.state.todo]
        var todo1 = filterdItems.filter((element,i) => {
            return i !== id
        }) 
        var selectedItems = this.state.todo.find((ele,i)=>i === id);
        
        this.setState({
            newTodoTitle:selectedItems.titleToBeAdded
        })
        this.handleDelete(id)


        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            todo:[
                 ...this.state.todo,
                 {titleToBeAdded:this.state.newTodoTitle},
               
             ],
             newTodoTitle:'',
            
         }) 
    };
    handleChange = (event) => {
        var titleToBeAddedle = event.target.value;
        this.setState({ titleToBeAddedle: titleToBeAddedle});
    }
    render(){
        return (
            <div style={{ 
                backgroundImage:`linear-gradient(rgba(0, 255, 191, 0.753),rgba(167, 226, 31, 0.74))`,
                height: '800px',
                width: '100%' ,
                
              }}>
            <div className='container'>
                <h2 id = "h2_heading" className="h1">ToDo</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.newValueTitle} 
                    value={this.state.newTodoTitle} name = "titleToBeAddedlestate"
                    id="titleToBeAddedle"/>
                    <button class="btn btn-outline-secondary">Add Task</button>
                </form>
                <h3>To-Do List</h3>
                
                <div className="d-flex align-items-center" style={{marginLeft:"100px"}}>
                    <table class="table table-bordered" id = "table">
                    <thead>
                        <tr>
                        <th scope="col">SrNo</th>
                        <th scope="col">Task</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.todo.map((item,id)=>
                            <tr key={id}>
                                <td>{id+1}</td>
                                <td>{item.titleToBeAdded}</td>
                                <td>
                                    <button onClick={() =>{this.handleDelete(id)}} className="btn btn-danger">Delete</button> &nbsp;
                                    <button onClick={() =>{this.handleEdit(id)}} class="btn btn-info">Update</button>
                                        
                                </td>
                            </tr>
                            )}
                        
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}

export default Todo
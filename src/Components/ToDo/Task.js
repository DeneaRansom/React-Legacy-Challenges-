import React, {Component} from 'react';
import NavItem from 'reactstrap/lib/NavItem';
import ToDo from './ToDo';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoList: [
                {action: 'Buy Milk', done: false},
                {action: 'Go to bank', done: false},
                {action: 'Pick up Zeus from vet.', done: false},
            ],
            newToDo: '',
            alreadyDone: ''
        };
    }

     updateValue = (e) => {
         this.setState({newToDo: e.target.value});
     };

     newToDo = () => {
         this.setState({
             toDoList: [
                 ...this.state.toDoList,
                 {action: this.state.newToDo, done: false}
             ]
         });
     };


     RemoveToDo(event) {
        
        this.setState({
            tasks: this.state.tasks.filter(tasks => tasks !== this.state.newTasks)
        })
    }


 



    render() {
        //console.log(this.state.toDoList[0].action);
        return(
            <div>
                <h1>To Do List</h1>
                 <div className='toDoInput'>
                    <input className="newItem"  value={this.state.newToDo} onChange={this.updateValue} />
                    <button onClick={this.newToDo} >Add task</button>
                    <button onClick={this.RemoveToDo}>Remove task</button>
                </div> 
                <div className="toDoList">
                        <ToDoMap toDoList={this.state.toDoList} />                  
                </div>
            </div>
        )
    }
}

class ToDoMap extends Component {
    render(){
        return(
            <div>
            {this.props.toDoList.map(
                task => {
                    return <li key={task}>{task.action}</li>                            
            })}
            </div>
        )
    }
}

export default Task; 
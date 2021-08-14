import React, {Component} from 'react';

export default class TaskForm extends Component {
     
    state= {
        title: '',
        description: ''

    }

    onSubmit = e => {
        console.log(this.state.description)
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
        
    }

    onChange = e =>{
        //console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        //console.log(this.props)
        
        return (
            <form onSubmit = {this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    placeholder="Write a Task" 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/>
                <br/>
                <textarea  
                    name="description"
                    placeholder="Write a Description" 
                    onChange={this.onChange} 
                    value={this.state.description}>

                </textarea>
                <br/>
                <input type="submit"/>
            </form>
        )
    }
}
import React, {Component} from 'react';
import './TodoItems.css';
import checkImg from '../img/check.svg';
import checkComplete from '../img/check-complete.svg';

class TodoItems extends Component {

    // constructor(props) {
    //     super(props);
    //     // this.onItemClick = this.onItemClick.bind(this);
    // }

   
    // onItemClick() {
    //     // console.log(this.props.item);
    //     // this.props.item.isComplete = !this.props.item.isComplete;

    // }
    render() {

        const {item, onClick} = this.props;

        let className = 'TodoItems';
        if (item.isComplete) {
            className += ' TodoItems-completed'
        }

        let url = checkImg;
        if (item.isComplete) {
            url = checkComplete;
        }
        return (
            <div  className={className}>
                <img onClick = {onClick} src={url} width={32} height={32}/>
                <p>{this.props.item.title}</p>

            </div>

        );
    }
}

export default TodoItems;
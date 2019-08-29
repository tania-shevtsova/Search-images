import React from 'react';
import ReactDOM from 'react-dom';
import './App';
import './App.scss';
import './index';

// Component for dropdown
class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'list-view'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Method for value change
    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.updateColumn(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div refs='dropdown-container' className='container-fluid dropdown-container'>

            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="one-column">Grid View (One Column)</option>
                    <option value="two-columns">Grid View (Two Columns)</option>
                    <option value="three-columns">Grid View (Three Columns)</option>
                    <option value="four-columns">Grid View (Four Columns)</option>
                    <option value="list-view">List view</option>

                </select>
            </form>
            </div>
        );
    }
}

// eslint-disable-next-line no-undef
export default DropDown;

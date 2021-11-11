import React, { Component } from 'react';
import axios from 'axios';

export default class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            total: 0,
        };
    };

    componentDidMount() {
        axios.get('http://localhost:8000/api/items/')
        .then((res) => {
            this.setState({ items: res.data.items });
        })
        .catch((err) => {
            console.log(err);
        });
    };

    //componentWillUnmount() {};

    

    render() {
        return (
            <div>
                <div className='content'>
                    <div className='total'>{this.state.total}</div>
                    <div className='items'>
                        {this.state.items.map((item) => (
                            <img src={item.icon} alt={item.name} />
                        ))}
                    </div>
                </div>
            </div>
        );
    };
};
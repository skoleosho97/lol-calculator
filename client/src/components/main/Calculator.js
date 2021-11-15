import React, { Component } from 'react';
import axios from 'axios';

export default class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            total: 0,
            type: null,
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
            <div className='content'>
                <div className='total-wrap'>
                    <div className='total'>
                        <span className='total-txt'>
                            Total Stats
                        </span>
                        <span className='total-amt'>
                            {this.state.total}
                        </span>
                        <span className='total-type'>
                            {this.state.type ? this.state.type : 'NA'}
                        </span>
                    </div>
                </div>
                <div className='items-wrap'>
                    <div className='items'>
                        {this.state.items.map((item) => (
                            <div className='item'></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };
};
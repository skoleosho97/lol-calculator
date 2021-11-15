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

    onSelection(item) {
        if (this.state.total === 0) {
            this.setState({
                type: item.type.toUpperCase(),
                total: this.state.total + item.stat
            })
        } else {
            if (this.state.type === item.type) {
                this.setState({
                    total: this.state.total + item.stat
                })
            }
        }
    };

    render() {

        const itemStyle = (itemData) => ({
            width: '50px',
            height: '50px',
            backgroundColor: 'lightblue',
            backgroundImage: itemData.icon ? `url(${itemData.icon})` : 'none',
            cursor: 'pointer',
            borderRadius: '5px',
        });

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
                            <div onClick={this.onSelection.bind(this, item)} style={itemStyle(item)} className='_item'>
                                <div className='hidden'>
                                    {item.name}
                                    <hr />
                                    {(item.passive) ? 
                                        `Stat Bonus: +${item.stat} ${item.type.toUpperCase()}` : 
                                        `Stat Bonus: +${item.stat} ${item.type.toUpperCase()} + % ${item.passive*100}`
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };
};
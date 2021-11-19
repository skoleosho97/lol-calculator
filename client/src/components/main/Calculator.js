import React, { Component } from 'react';
import axios from 'axios';

export default class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            total: 0,
            count: 0,
            type: null,
            selected_1: null,
            selected_2: null,
            selected_3: null,
            selected_4: null,
            selected_5: null,
            selected_6: null,
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
            count++;
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
            backgroundImage: `url(${itemData.icon})`,
        });

        const selectedItemStyle = (itemData) => ({
            backgroundImage: itemData.icon ? `url(${itemData.icon})` : 'none'
        });

        return (
            <div className='content'>
                <div className='total-wrap'>
                    <div className='filter'>
                        Filter
                    </div>
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
                    <div className='clear'>
                        Clear
                    </div>
                </div>
                <div className='selected-items-wrap'>
                    <div className='selected-items'>
                        <div style={selectedItemStyle(this.state.selected_1)} className='selected-item'></div>
                        <div style={selectedItemStyle(this.state.selected_2)} className='selected-item'></div>
                        <div style={selectedItemStyle(this.state.selected_3)} className='selected-item'></div>
                        <div style={selectedItemStyle(this.state.selected_4)} className='selected-item'></div>
                        <div style={selectedItemStyle(this.state.selected_5)} className='selected-item'></div>
                        <div style={selectedItemStyle(this.state.selected_6)} className='selected-item'></div>
                    </div>
                </div>

                <div className='items-wrap'>
                    <div className='items'>
                        {this.state.items.map((item) => (
                            <div onClick={this.onSelection.bind(this, item)} style={itemStyle(item)} className='_item'>
                                <div className='hidden'>
                                    {item.name}
                                    <hr />
                                    {(item.passive === null) ? 
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
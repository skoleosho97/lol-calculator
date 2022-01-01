import React, { Component } from 'react';
import axios from 'axios';

export default class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            items: [],
            champions: [],
        };
    };

    componentDidMount() {
        axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
        .then(res => res.data)
        .then(versions => {
            const version = versions[0];
            const url = 'http://ddragon.leagueoflegends.com/cdn/' + version;
            this.setState({
                url: url,
            })
            const champions = axios.get(url + '/data/en_US/champion.json')
            const items = axios.get(url + '/data/en_US/item.json')

            champions.then(res => {
                this.setState({
                    champions: res.data.data,
                })
            });

            items.then(res => {
                this.setState({
                    items: res.data.data,
                })
            });
        });
    };

    //componentWillUnmount() {};

    render() {
        const champions = this.state.champions;
        const items = this.state.items;

        return (
            <div className='container'>
                <div className='dmg-calc__index'>
                    <div className='dmg-calc__index-content'>
                        <div className='dmg-calc__index-content-champion'>
                            <div className='champion__wrap'>
                                <div className='champion__wrap-icon'>
                                    <img src='' alt='' />
                                    <p>Champion</p>
                                </div>
                                <div className='champion__wrap-selected-items'>
                                    <div className='champion__wrap-selected-item'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='champion__wrap-selected-item'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='champion__wrap-selected-item'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='champion__wrap-selected-item'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='champion__wrap-selected-item'>
                                        <img src='' alt='' />
                                    </div>
                                    <div className='champion__wrap-selected-item'>
                                        <img src='' alt='' />
                                    </div>
                                </div>
                                <div className='champion__wrap-abilities'>
                                    <div className='champion__wrap-ability ability-q'></div>
                                    <div className='champion__wrap-ability ability-w'></div>
                                    <div className='champion__wrap-ability ability-e'></div>
                                    <div className='champion__wrap-ability ability-r'></div>
                                </div>
                            </div>
                        </div>
                        <div className='champion-list'>
                            <div className='champion-list-filter'></div>
                            <div className='champion-list__index'>
                            {Object.keys(champions).map((key) => (
                                <div className='champion-list__index-item' id={champions[key].name}>
                                    <a href='#'>
                                        <div className='champion-list__index-item__img'>
                                            <img 
                                                src={this.state.url + '/img/champion/' + champions[key].id + '.png'} 
                                                alt={champions[key].name} 
                                            />
                                        </div>
                                        <div className='champion-list__index-item__name'>
                                            {champions[key].name}
                                        </div>
                                    </a>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className='item-list'>
                            <div className='item-list-filter'></div>
                            <div className='item-list__index'>
                            {Object.keys(items).map((key) => (
                                <div className='item-list__index-item' id={items[key].name}>
                                    <a href='#'>
                                        <div className='item-list__index-item__img'>
                                            <img 
                                                src={this.state.url + '/img/item/' + Object.keys(items)[Object.keys(items).indexOf(key)] + '.png'} 
                                                alt={items[key].name} 
                                            />
                                        </div>
                                        <div className='item-list__index-item__name'>
                                            {items[key].name}
                                        </div>
                                    </a>
                                </div>
                            ))}
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
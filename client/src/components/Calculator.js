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
        //const items = this.state.items;

        const iconStyle = (data) => ({
            backgroundImage: `url(${this.state.url + '/img/champion/' + data + '.png'})`,
            width: '120px',
            height: '120px',
        });

        return (
            <div className='content'>
                {
                    Object.keys(champions).map((key) => (
                        <div style={iconStyle(champions[key].name)}>
                        </div>
                ))}
            </div>
        );
    };
};
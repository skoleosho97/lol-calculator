import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            icon: '',
            type: '',
            stat: '',
            passive: '',
            disabled: true,
        }
    };

    onNameChange(e) {
        this.setState({ name: e.target.value });
    };

    onFileChange(e) {
        this.setState({ icon: e.target.files[0] });
    };

    onTypeChange(e) {
        this.setState({ type: e.target.value });
    };

    onStatChange(e) {
        this.setState({ stat: e.target.value });
    };

    onPassiveChange(e) {
        this.setState({ passive: e.target.value });
    };

    onCheckChange(e) {
        if (e.target.value === 'yes') {
            this.setState({ disabled: false });
        } else {
            this.setState({ disabled: true });
        };
    };

    onSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('icon', this.state.icon);
        formData.append('type', this.state.type);
        formData.append('stat', this.state.stat);
        if (this.state.passive !== '') {
            formData.append('passive', this.state.passive);
        };

        axios.post('http://localhost:8000/api/items/', formData, {
        }).then(res => {
            console.log(res);
        });

        this.setState({
            name: '',
            icon: '',
            type: '',
            stat: '',
            passive: '',
            disabled: true
        });

        document.getElementById('file').value = null;

        var radios = document.querySelectorAll('input[type="radio"]');

        for (var i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        };
    };

    render() {
        return (
            <div>
                <h3>Add Item</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className='form-group'>
                        <label>Item Name</label>
                        <input 
                            type='text'
                            onChange={this.onNameChange.bind(this)}
                            value={this.state.name}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Item Image</label>
                        <input 
                            id='file'
                            type='file'
                            onChange={this.onFileChange.bind(this)}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Item Type</label>
                        <input 
                            type='radio'
                            id='ap'
                            name='type'
                            onChange={this.onTypeChange.bind(this)} 
                            value='ap'>
                        </input>
                        <label htmlFor='ap'>AP</label>
                        <input
                            type='radio'
                            id='ad'
                            name='type'
                            onChange={this.onTypeChange.bind(this)}
                            value='ad'>
                        </input>
                        <label htmlFor='ad'>AD</label>
                    </div>
                    <div className='form-group'>
                        <label>Item Stats</label>
                        <input 
                            type='text'
                            onChange={this.onStatChange.bind(this)}
                            value={this.state.stat}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Item Passive</label>
                        <div>
                            <label>Does this item have a numerical passive?</label>                 
                            <input 
                                type='radio'
                                id='yes'
                                name='check'
                                onChange={this.onCheckChange.bind(this)}
                                value='yes'>
                            </input>
                            <label htmlFor='yes'>Yes</label>
                            <input 
                                type='radio'
                                id='no'
                                name='check'
                                onChange={this.onCheckChange.bind(this)}
                                value='no'>
                            </input>
                            <label htmlFor='no'>No</label>
                        </div>
                        <input 
                            type='text'
                            onChange={this.onPassiveChange.bind(this)}
                            value={this.state.passive} 
                            disabled={(this.state.disabled) ? 'disabled' : ''}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn'>Create Item</button>
                    </div>
                </form>
            </div>
        );
    };
};
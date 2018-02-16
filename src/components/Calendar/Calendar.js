import React, { Component } from 'react';
import axios from 'axios';
import './Calendar.css';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: '',
            day: '',
            time: '',
            complete: false,
            day_results: [],
            time_results: []
        };

        this.handleMonthSelect = this.handleMonthSelect.bind(this);
        this.handleDaySelect = this.handleDaySelect.bind(this);
        this.handleTimeSelect = this.handleTimeSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMonthSelect(event) {
        this.setState({ month: event.target.value });
        axios.get(`/calendar/month/${event.target.value}`)
            .then((response) => {
                this.setState({ day_results: response.data })
                console.log(response)
            })
    }

    handleDaySelect(event) {
        this.setState({ day: event.target.value });
        axios.get(`/calendar/day/${event.target.value}/${this.state.month}`)
            .then((response) => {
                this.setState({ time_results: response.data })
                console.log(response)
            })
    }

    handleTimeSelect(event) {
        this.setState({ time: event.target.value });
        this.setState({ complete: true });
    }

    handleSubmit(event) {
        const time_id = this.state.time_results.find((obj) => {
            return obj.time === Number(this.state.time);
        })
        console.log(time_id);
        axios.post(`/calendar/submit`, {
            month: this.state.month,
            day: this.state.day,
            time: this.state.time,
            time_id: time_id.time_id
        }).then((response) => console.log(response))
        alert('Your time has been booked.')
        event.preventDefault();
    }

    render() {
        console.log(this.state)

        const day = this.state.month ? this.state.day_results.map((obj, i) => {
            return <option key={i} className='calendar_option'>{obj.day}</option>
        }) : null;

        const time = this.state.day ? this.state.time_results.map((obj, i) => {
            return <option key={i} className='calendar_option'>{obj.time}</option>
        }) : null;

        const submit_button = this.state.complete ? 
            <button 
                onClick={this.handleSubmit}
                className='calendar_submit_button'>
            Book Time
            </button> :
             null;

        return (
            <div>

                <form className='calendar_form_container'>
                    <label className='calendar_label'>
                        <select
                            value={this.state.month}
                            onChange={this.handleMonthSelect}
                            className='calendar_select'>
                            <option className='calendar_option'>Month</option>
                            <option className='calendar_option'>Jan</option>
                            <option className='calendar_option'>Feb</option>
                            <option className='calendar_option'>Mar</option>
                            <option className='calendar_option'>Apr</option>
                            <option className='calendar_option'>May</option>
                            <option className='calendar_option'>Jun</option>
                            <option className='calendar_option'>Jul</option>
                            <option className='calendar_option'>Aug</option>
                            <option className='calendar_option'>Sep</option>
                            <option className='calendar_option'>Oct</option>
                            <option className='calendar_option'>Nov</option>
                            <option className='calendar_option'>Dec</option>
                        </select>
                    </label>
                    <label className='calendar_label'>
                        <select 
                            onChange={this.handleDaySelect}
                            className='calendar_select'>
                            <option className='calendar_option'>Day</option>
                            {day}
                        </select>
                    </label>
                    <label className='calendar_label'>
                        <select 
                            onChange={this.handleTimeSelect}
                            className='calendar_select'>
                            <option className='calendar_option'>Time</option>
                            {time}
                        </select>
                    </label>
                    {submit_button}
                </form>
            </div>
        )
    }
}
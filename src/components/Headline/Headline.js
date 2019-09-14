import React, { Component } from 'react'
import "./styles.scss"

export default class Headline extends Component {
    render() {

        const {header, desc} = this.props

        if(!header){
            return null
        }

        return (
            <div className="Headline" data-test="Headline">
                <h2 data-test="header">{header}</h2>
                <p data-test="desc">{desc}</p>
            </div>
        )
    }
}

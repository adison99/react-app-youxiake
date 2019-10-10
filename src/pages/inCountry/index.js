import React, { Component } from 'react'
import Header from "@common/head"
import Banner from "@components/inCountryBanner"

export default class InCountry extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
            </div>
        )
    }
}

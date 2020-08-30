import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h4>
                            The requested URL 
                            <span className="text-danger">
                                {this.props.location.pathname}
                            </span>{" "}
                            was not found.
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}
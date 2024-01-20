import React from "react"
import { Link, Route } from "react-router-dom"

class Page {
    constructor (name, link, picture, component) {
        this.name = name
        this.link = link
        this.picture = picture
        this.component = component
    }

    menuLink () {
        return(
            <Link to={this.link} key={this.name}>
                {this.name}
            </Link>
        )
    }

    route () {
        return (
            <Route exact path={this.link} Component={this.component} key={this.name}/>
        )
    }
}

export default Page
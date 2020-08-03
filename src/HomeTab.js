import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';

// const justReminder =[
//     ["World Maps", "https://azgaar.github.io/Fantasy-Map-Generator/"],
//     ["Town Maps", "https://watabou.itch.io/medieval-fantasy-city-generator"],
// ]

class ListingLinks extends Component {
    render () {
        return (
            <li>
                <a href={this.props.lListItem[1]}>
                    {this.props.lListItem[0]}
                </a>
            </li>
        
        );
    }
}

class HomeTab extends Component {
    render() {
        return (
            <div>
                <ol>
                    <ListingLinks lListItem={this.props.lList[0]} />
                </ol>
            </div>
        );
    }
}

export default HomeTab;
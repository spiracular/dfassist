import React, { useState, Component } from 'react';
import logo from './logo.svg';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import HomeTab from './HomeTab';
import ProfileTab from './ProfileTab';
import 'bootstrap/dist/css/bootstrap.min.css';

// var tabslist ["Home", "Profile", "EmptyTab"];




class GetTab extends Component {
    render () {
        return (
        <div>
            <h1>
                tabName: {this.props.tabName}.js
            </h1>
            testText: {this.props.testText}
        </div>
        
        );
    }
}

// key and eventKey seem to be reserved, but I've not figured out how to pass in values again in other fashions. Good.

// (I still don't fully understand why you might prefer Function vs Component outside of Hooks.
/// But I've gotten both to work now, so that's something.)

// Next goal: Get it to pass a value that tells it which Tabs file to open.

// After that: for-loop the tabs, from a list? (...eval doesn't work normally, you have to do a babel thing. Looks HARD.)

// Long after that: Working out how to redo this to let you change around what tabslist contains (ex: closing tabs, or adding from a dropdown)


function ControlledTabs() {
  const [key, setKey] = useState('home');

  const linkslist =[
    ["World Maps", "https://azgaar.github.io/Fantasy-Map-Generator/"],
    ["Town Maps", "https://watabou.itch.io/medieval-fantasy-city-generator"],
]

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Home">
        <HomeTab lList={linkslist}/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        {/* <ProfileTab /> */}
        <GetTab tabName="Profile" testText="This Text Here" />
      </Tab>
      <Tab eventKey="emptytab" title="EmptyTab">
          {/* <GetTab tabName="EmptyTab" testText="This Text Here" /> */}
      </Tab>
      {/*}
      <Tab eventKey="contact" title="Contact" disabled>
        <EmptyTab />
      </Tab> */}
    </Tabs>
  );
}

export default ControlledTabs;

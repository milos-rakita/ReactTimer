var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = () => {
    return(
        <div class="top-bar">
            <div class="top-bar-left">
              <ul class="menu">
                <li class="menu-text">
                    React Timer App
                </li>
                <li>
                  <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                </li>
                <li>
                    <Link to="/" activeClassName="active-link">Countdown</Link>
                </li>
              </ul>
            </div>
            <div class="top-bar-right">
              <ul class="menu">
                <li className="menu-text">
                    Created by 
                    <a href="http://www.mead.io" target="_blank">
                        Andrew Mead
                    </a>
                </li>
              </ul>
            </div>
        </div>
    );
};

module.exports=Nav;
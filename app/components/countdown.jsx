var React = require('react');
var Clock = require('clock');

var Countdown = React.createClass( {
    render: function () {
        return (
            <div>
                <Clock totalSeconds={129}/>
            </div>
        )
    }
});

module.exports = Countdown;
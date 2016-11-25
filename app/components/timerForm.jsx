var React = require('react');

var TimerForm = React.createClass({
    onSubmit:function(e){
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;
        if (strSeconds.match(/[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds,10));
        }
    },
    render(){
        return(
            <div>
                <form ref="form" onSubmit={this.onSubmit}>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        )
    }
});

module.exports = TimerForm;
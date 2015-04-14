var React = require('react');

var Wizard = React.createClass({
    displayName: 'Wizard',
    propTypes: {
        children: function(props, key) {
            var ERR = 'You must provide both Wizard.Nav and Wizard.Page component',
                hasNav, hasPages;

            if (!Array.isArray(props)) {
                return new Error(ERR);
            }

            props.forEach(function(item) {
                if (item instanceof this.Nav) {
                    hasNav = true;
                } else if (item instanceof this.Pages) {
                    hasPages = true;
                }
            });

            if (!hasNav || !hasPages) {
                return new Error(ERR);
            }
        }
    },
    getInitialState: function() {
        return {
            active: 0
        };
    },
    next: function() {
        this.setState({ active: ++this.state.active });
    },
    jump: function(step) {
        this.setState({ active: step});
    },
    render: function() {
        var active = this.state.active;
        return (
            <div>
                {
                    React.Children.map(this.props.children, function(child) {
                        return React.cloneElement(child, {
                            active: active
                        })
                    })
                }
            </div>
        );

    }
});

Wizard.Nav = React.createClass({
    displayName: 'Wizard - Navigation',
    propTypes: {
        children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired
    },
    render: function() {
        var active = this.props.active,
            liNodes = React.Children.map(this.props.children, function(item, idx) {
                if (idx == active) {
                    var className = item.props.className || '',
                        clone = React.cloneElement(item, {
                            className: 'active ' + className
                        });
                    return clone;
                }
                return item;
            });

        return (
            <ol className={ this.props.className }> { liNodes } </ol>
        );
    }
});

Wizard.Pages = React.createClass({
    displaName: 'Wizard - Pages',
    propTypes: {
        children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired
    },
    render: function() {
        var active = this.props.active,
            active,
            pages = [],
            hiddenStyle = {
                display: 'none'
            };

        // hidden elements need to be rendered to have ref intact
        React.Children.forEach(this.props.children, function(page, idx) {
            if (idx == active) {
                active = page;
                return;
            }

            pages.push(page);
        });
        return (
            <div>
                { active }
                <ol style={ hiddenStyle }>
                    { pages }
                </ol>
            </div>
        );
    }
});

module.exports = Wizard;

import React from 'react';
import PropTypes from 'prop-types';

export default class Caption extends React.PureComponent {
    render() {
        const { maxWidth, children } = this.props;
        return (
            <div
                className="txt-em py12 px18 bg-gray-faint"
                style={{ color: '#546C8C', ...(maxWidth && { maxWidth }) }}
            >
                {children}
            </div>
        );
    }
}

Caption.defaultProps = {
    // set `maxWidth={false}` for full width
    maxWidth: 800
};

Caption.propTypes = {
    children: PropTypes.node,
    maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};

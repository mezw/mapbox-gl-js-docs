import React from 'react';
import PropTypes from 'prop-types';

class PricingProductOverview extends React.Component {
    render() {
        return (
            <div className="mb24">
                <ul className="list-check">
                    <li>
                        Billed by <strong>{this.props.unit}</strong>
                    </li>
                    {this.props.updateDescription && (
                        <li>
                            Upgrade to new pricing{' '}
                            <strong>{this.props.updateDescription}</strong>
                        </li>
                    )}
                    {this.props.lineItems && (
                        <li>
                            See rates and discounts per {this.props.lineItems}{' '}
                            in the pricing page's{' '}
                            <strong>
                                <a
                                    href={`https://www.mapbox.com/pricing/${this.props.pricingSectionLink}`}
                                >
                                    {this.props.pricingSection}
                                </a>
                            </strong>{' '}
                            section
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

PricingProductOverview.propTypes = {
    unit: PropTypes.string,
    updateDescription: PropTypes.string,
    lineItems: PropTypes.string,
    pricingSectionLink: PropTypes.string,
    pricingSection: PropTypes.string
};

export { PricingProductOverview };

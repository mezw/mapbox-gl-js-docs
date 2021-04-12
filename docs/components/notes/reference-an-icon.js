import React from 'react';
import PropTypes from 'prop-types';
import Note from '@mapbox/dr-ui/note';

export default class ReferenceAnIcon extends React.PureComponent {
    render() {
        const { styleName } = this.props;
        const stylePage = {
            'Mapbox Streets': 'https://www.mapbox.com/maps/streets/',
            'Mapbox Light': 'https://www.mapbox.com/maps/light/'
        };
        return (
            <Note title="Referencing images in a style's sprite">
                <p>
                    This example uses the{' '}
                    <a href={stylePage[styleName]}>{styleName}</a> style. The{' '}
                    <code>icon-image</code> used in this example comes from the{' '}
                    {styleName} style's{' '}
                    <a href="https://docs.mapbox.com/help/glossary/sprite/">
                        sprite
                    </a>
                    .
                </p>
                <p>
                    To view all available images in a style's sprite or add
                    additional images, open the style in{' '}
                    <a href="https://studio.mapbox.com/styles/">
                        Mapbox Studio
                    </a>{' '}
                    and click the <strong>Images</strong> tab. To add a new
                    image to the style at runtime see the{' '}
                    <a href="/mapbox-gl-js/example/add-image/">
                        Add an icon to the map
                    </a>
                    .
                </p>
            </Note>
        );
    }
}

ReferenceAnIcon.propTypes = {
    styleName: PropTypes.oneOf(['Mapbox Streets', 'Mapbox Light'])
};

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Grid extends Component {

    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : [];
        let classes = 'cols ';

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes;
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols);
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}

Grid.propTypes = {
    cols: PropTypes.string.isRequired
}

Grid.defaultProps = {
    cols: '12'
}

export default Grid;

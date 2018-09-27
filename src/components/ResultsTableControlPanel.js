import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sizeToFit, autoSizeAll } from '../actions/resultsTableActions';
import { Row, Col, Button } from 'react-materialize';


class ResultsTableControlPanel extends Component {
    constructor(props) {
        super(props);

        this.sizeToFit = this.sizeToFit.bind(this);
        this.autoSizeAll = this.autoSizeAll.bind(this);
    }

    sizeToFit() {
        this.props.sizeToFit();
    }

    autoSizeAll() {
        this.props.autoSizeAll();
    }

    render() {
        return (
            <div>
        		<Row style={{margin: '0px'}}>
                    <Col s={6} style={{padding: '0px'}}>
                        <Button onClick={this.sizeToFit} style={{marginRight: '2%', width: '98%', padding: '0'}}>Size to Fit</Button>
                    </Col>
                    <Col s={6} style={{padding: '0px'}}>
                        <Button onClick={this.autoSizeAll} style={{marginLeft: '2%', width: '98%', padding: '0'}}>Auto-Size All</Button>
                    </Col>
                </Row>
                <Row style={{margin: '0px'}}>
                    <Col s={12} style={{marginTop: '5px', padding: '0px'}}>
                        <Button style={{width: '100%'}}>Reset</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

ResultsTableControlPanel.propTypes = {
	sizeToFit: PropTypes.func.isRequired,
    autoSizeAll: PropTypes.func.isRequired,
    sizeToFitWindow: PropTypes.bool.isRequired,
    autoSizeAllColumns: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    sizeToFitWindow: state.resultsTable.sizeToFitWindow,
    autoSizeAllColumns: state.resultsTable.autoSizeAllColumns,
});

export default connect(mapStateToProps, { sizeToFit, autoSizeAll })(ResultsTableControlPanel);

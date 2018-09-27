import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css';


class ResultsTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "Position", field: "position"},
                {headerName: "Name", field: "name"},
                {headerName: "Season", field: "season"},
                {headerName: "Played", field: "played"},
                {headerName: "Won", field: "won"},
                {headerName: "Drawn", field: "drawn"},
                {headerName: "Lost", field: "lost"},
                {headerName: "Scored", field: "scored"},
                {headerName: "Conceded", field: "conceded"},
                {headerName: "Difference", field: "difference"},
                {headerName: "Points", field: "points"},
            ]
        }

        this.onGridReady = this.onGridReady.bind(this);
        this.sizeToFit = this.sizeToFit.bind(this);
        this.autoSizeAll = this.autoSizeAll.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(this.props.autoSizeAllColumns !== prevProps.autoSizeAllColumns && this.props.autoSizeAllColumns) {
            this.autoSizeAll();
            console.log('here');
        }
        else {
            console.log(`${this.props.autoSizeAllColumns} ...... ${prevProps.autoSizeAllColumns}`);
        }

        if(this.props.sizeToFitWindow !== prevProps.sizeToFitWindow && this.props.sizeToFitWindow) {
            this.sizeToFit();
            console.log('there');
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }

    sizeToFit() {
        this.gridApi.sizeColumnsToFit();
    }

    autoSizeAll() {
        let allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach((column) => {
          allColumnIds.push(column.colId);
        });
        this.gridColumnApi.autoSizeColumns(allColumnIds);
    }

    render() {
        return (
    		<div>
				<div>
				    <div 
	                  className="ag-theme-material"
	                  style={{ 
		                boxSizing: 'border-box',
		                height: '580px',
		                width: '100%' }} 
		            >
                        <AgGridReact
                            columnDefs={this.state.columnDefs}
                            rowData={this.props.rowData}
                            onGridReady={this.onGridReady}
                            enableColResize='true'
                          	colResizeDefault='shift'
                        >

                        </AgGridReact>
                    </div>
				</div>
            </div>
        );
    }
}

ResultsTable.propTypes = {
    sizeToFitWindow: PropTypes.bool.isRequired,
    autoSizeAllColumns: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    sizeToFitWindow: state.resultsTable.sizeToFitWindow,
    autoSizeAllColumns: state.resultsTable.autoSizeAllColumns,
});

export default connect(mapStateToProps)(ResultsTable);

import React from 'react';


const ResultsTableRow = props => (
	<div className="row valign-wrapper blue lighten-4 results-table-row">
		
		<div className="col s1 m1 l1 xl1">
			{props.tablePosition}
		</div>
		<div className="col hide-on-med-and-down l1 xl1">
			{props.footballClubName}
		</div>
		<div className="col s3 m2 l2 xl2">
			<b>{props.season}</b>
		</div>
		<div className="col hide-on-med-and-down l1 xl1">
			{props.played}
		</div>
		<div className="col s1 m1 l1 xl1">
			{props.won}
		</div>
		<div className="col s1 m1 l1 xl1">
			{props.drawn}
		</div>
		<div className="col s1 m1 l1 xl1">
			{props.lost}
		</div>
		<div className="col hide-on-small-only m1 l1 xl1">
			{props.goalsFor}
		</div>
		<div className="col hide-on-small-only m1 l1 xl1">
			{props.goalsAgainst}
		</div>
		<div className="col s1 m1 l1 xl1">
			{props.goalDifference}
		</div>
		<div className="col s2 m1 l1 xl1">
			{props.pointsTotal}
		</div>

	</div>
)

export default ResultsTableRow;

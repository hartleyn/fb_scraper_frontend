import React from 'react';


const ResultsTableHeaderRow = props => (
	<div className="row valign-wrapper results-table-row">
							
		<div className="col s1 m1 l1 xl1">
		</div>
		<div className="col hide-on-med-and-down l1 xl1">
		</div>
		<div className="col s3 m2 l2 xl2">
		</div>
		<div className="col hide-on-med-and-down l1 xl1">
			Played
		</div>
		<div className="col hide-on-small-only m1 l1 xl1">
			Won
		</div>
		<div className="col s1 show-on-small hide-on-med-and-up">
			W
		</div>
		<div className="col hide-on-small-only m1 l1 xl1">
			Drawn
		</div>
		<div className="col s1 show-on-small hide-on-med-and-up">
			D
		</div>
		<div className="col hide-on-small-only m1 l1 xl1">
			Lost
		</div>
		<div className="col s1 show-on-small hide-on-med-and-up">
			L
		</div>
		<div className="col hide-on-small-only m1 l1 xl1">
			Scored
		</div>
		<div className="col hide-on-small-only m1 l1 xl1">
			Conceded
		</div>
		<div className="col hide-on-small-only m1 l1 xl1">
			Goal Difference
		</div>
		<div className="col s1 show-on-small hide-on-med-and-up">
			+/-
		</div>
		<div className="col hide-on-small-only m1 l1 xl1">
			Points
		</div>
		<div className="col s2 show-on-small hide-on-med-and-up">
			P
		</div>

	</div>
)

export default ResultsTableHeaderRow;

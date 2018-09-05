import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCompetitions, fetchCompetitionFootballClubs, fetchCompetitionFootballClubHistoricalTable } from '../actions/statsActions';
import Select from 'react-select';

import ResultsTableRow from './ResultsTableRow';
import ResultsTableHeaderRow from './ResultsTableHeaderRow';


class FootballStats extends Component {

	constructor(props) {
		super(props);
		this.state = {
		    selectedCompetition: null,
		    selectedClub: null,
		}

		this.onChangeCompetition = this.onChangeCompetition.bind(this);
		this.onChangeClub = this.onChangeClub.bind(this);
		this.onClickButton = this.onClickButton.bind(this);
	}

	componentDidMount() {
		this.props.fetchCompetitions()
	}
	
	componentDidUpdate(prevProps) {
		if(this.props.historicalTable !== prevProps.historicalTable) {
			console.log(this.props.historicalTable);
		}
	}

	onClickButton(e) {
		document.getElementById('start-button').classList.add('scale-out');
		document.getElementById('competition-select').classList.add('scale-in');
	}

	onChangeCompetition(selectedCompetition) {
		this.setState({ 
			selectedCompetition 
		}, () => {
			this.props.fetchCompetitionFootballClubs(selectedCompetition.value);
			document.getElementById('competition-select').classList.remove('offset-xl8', 'offset-l8', 'offset-m8');
			document.getElementById('competition-select').classList.add('offset-xl4', 'offset-l4', 'offset-m4');
			//document.getElementById('club-select').classList.remove('hidden');
			document.getElementById('club-select').classList.add('scale-in');
		});
	}

	onChangeClub(selectedClub) {
		this.setState({ 
			selectedClub 
		}, () => {
			this.props.fetchCompetitionFootballClubHistoricalTable(this.state.selectedCompetition.label, this.state.selectedClub.value);
			document.getElementById('display-table').classList.add('scale-in');
		});
	}

	render() {
		let x = 1;
		const competitionOptions = this.props.competitions.map(competition => (
			{value: competition.id, label: competition.name}
		));
		const footballClubOptions = this.props.footballClubs.map(club => (
			{value: club, label: club}
		));
		const table = this.props.historicalTable.map(result => (
			<ResultsTableRow
				key={result.id}
				tablePosition={x++}
				footballClubName={result.football_club_id}
				season={result.season}
				played={result.played}
				won={result.won}
				drawn={result.drawn}
				lost={result.lost}
				goalsFor={result.goals_for}
				goalsAgainst={result.goals_against}
				goalDifference={result.goal_difference}
				pointsTotal={result.points}
			/>
		));
		const { selectedCompetition } = this.state;
		const { selectedClub } = this.state;
		return (
			<div>
				<div className='row'>
					{/*<a id="start-button" className="btn-floating btn-large pulse scale-transition" onClick={this.onClickButton}>
				        <i className="material-icons">add</i>
				    </a>*/}
					<div id='competition-select' className='col s12 m4 offset-m8 l4 offset-l8 xl4 offset-xl8'>
						<Select
							value={selectedCompetition}
							options={competitionOptions}
							onChange={this.onChangeCompetition}
							placeholder='Select a Competition...'
						/>
					</div>
					<div id='club-select' className='col s12 m4 l4 xl4 scale-transition scale-out'>
						<Select
							value={selectedClub}
							options={footballClubOptions}
							onChange={this.onChangeClub}
							placeholder='Select a Club...'
						/>
					</div>
				</div>
				<div id="display-table" className="scale-transition scale-out">
					<div className="divider"></div>
					<ResultsTableHeaderRow />
				</div>
				{table}
			</div>
		)
	}
}

FootballStats.propTypes = {
	fetchCompetitions: PropTypes.func.isRequired,
	competitions: PropTypes.array.isRequired,
	footballClubs: PropTypes.array.isRequired,
	historicalTable: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
	competitions: state.stats.competitions,
	footballClubs: state.stats.footballClubs,
	historicalTable: state.stats.historicalTable,
});

export default connect(mapStateToProps, { fetchCompetitions, fetchCompetitionFootballClubs, fetchCompetitionFootballClubHistoricalTable })(FootballStats);

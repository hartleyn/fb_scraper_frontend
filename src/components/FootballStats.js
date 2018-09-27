import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCompetitions, fetchCompetitionFootballClubs, fetchCompetitionFootballClubHistoricalTable, fetchCompetitionFootballClubMockSuperLeagueTable } from '../actions/statsActions';
import Select from 'react-select';
import { CardPanel } from 'react-materialize';

import ResultsTable from './ResultsTable';
import ResultsTableControlPanel from './ResultsTableControlPanel';


class FootballStats extends Component {

	constructor(props) {
		super(props);
		this.state = {
			table: [],
		    selectedCompetition: null,
		    selectedClub: null,
		    selectedSeason: null,
		}

		this.onChangeCompetition = this.onChangeCompetition.bind(this);
		this.onChangeClub = this.onChangeClub.bind(this);
		this.onChangeSeason = this.onChangeSeason.bind(this);
	}

	componentDidMount() {
		this.props.fetchCompetitions()
	}
	
	componentDidUpdate(prevProps) {
		if(this.props.historicalTable !== prevProps.historicalTable && this.props.newHistoricalTable) {
			let x = 1;
			const table = this.props.historicalTable.map(result => ({
				position: x++, 
				name:result.football_club_id, 
				season: result.season,
				played: result.played,
				won: result.won,
				drawn: result.drawn,
				lost: result.lost,
				scored: result.goals_for,
				conceded: result.goals_against,
				difference: result.goal_difference,
				points: result.points
			}));

			this.setState({
				table: table,
			}, () => {
				console.log('historical table found');
			});
		}

		if(this.props.mockSuperLeagueTable !== prevProps.mockSuperLeagueTable && this.props.newMockSuperLeagueTable) {
			let x = 1;
			const table = this.props.mockSuperLeagueTable.map(result => ({
				position: x++, 
				name:result.football_club_id,
				season: result.season,
				played: result.played,
				won: result.won,
				drawn: result.drawn,
				lost: result.lost,
				scored: result.goals_for,
				conceded: result.goals_against,
				difference: result.goal_difference,
				points: result.points
			}));

			this.setState({
				table: table,
			}, () => {
				console.log('mock super league table found');
			});
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
			document.getElementById('club-select').classList.remove('hidden');
			document.getElementById('club-select').classList.add('scale-in');
		});
	}

	onChangeClub(selectedClub) {
		this.setState({ 
			selectedClub 
		}, () => {
			this.props.fetchCompetitionFootballClubHistoricalTable(this.state.selectedCompetition.label, this.state.selectedClub.value);
			document.getElementById('grid-container').classList.remove('hidden');
			document.getElementById('grid-container').classList.add('scale-in');
			document.getElementById('control-panel').classList.remove('hidden');
			document.getElementById('control-panel').classList.add('scale-in');
		});
	}

	onChangeSeason(selectedSeason) {
		this.setState({ 
			selectedSeason 
		}, () => {
			this.props.fetchCompetitionFootballClubMockSuperLeagueTable(this.state.selectedSeason.value);
			document.getElementById('grid-container').classList.remove('hidden');
			document.getElementById('grid-container').classList.add('scale-in');
			document.getElementById('control-panel').classList.remove('hidden');
			document.getElementById('control-panel').classList.add('scale-in');
		});
	}

	render() {
		const competitionOptions = this.props.competitions.map(competition => (
			{value: competition.id, label: competition.name}
		));
		const footballClubOptions = this.props.footballClubs.map(club => (
			{value: club, label: club}
		));
		const seasonOptions = [
			{value: '2003-04', label: '03-04'},
			{value: '2004-05', label: '04-05'},
		]
		/*const table = this.props.historicalTable.map(result => ({
			position: x++, 
			//name:result.football_club_id, 
			season: result.season,
			played: result.played,
			won: result.won,
			drawn: result.drawn,
			lost: result.lost,
			scored: result.goals_for,
			conceded: result.goals_against,
			difference: result.goal_difference,
			points: result.points
		}));*/
		const { selectedCompetition } = this.state;
		const { selectedClub } = this.state;
		const { selectedSeason } = this.state;
		return (
			<div>
				<div className='row'>
					
					<div id="grid-container" className="col xl9 l9 m9 scale-transition hidden scale-out left center-align" style={{padding: '0px'}}>
						<CardPanel className="z-depth-2" style={{padding: '5px', marginTop: '0', marginRight: '1.5%', width: '98.5%'}}>
						    <div>
								<ResultsTable 
									rowData={this.state.table}
								/>
							</div>
						</CardPanel>
					</div>

					<div className="col xl3 l3 m3 right" style={{padding: '0'}}>
						<CardPanel id="control-panel" className="z-depth-2 hidden scale-transition scale-out" style={{padding: '5px', margin: '0 0 5px 0'}}>
							
							<div>
								<ResultsTableControlPanel />
							</div>

						</CardPanel>
					
						<CardPanel className="z-depth-2" style={{padding: '5px', margin: '0px'}}>
							<div id='competition-select'>
								<Select
									value={selectedCompetition}
									options={competitionOptions}
									onChange={this.onChangeCompetition}
									placeholder='Select a Competition...'
								/>
							</div>

							<div id='club-select' className='hidden scale-transition scale-out' style={{marginTop: '5px'}}>
								<Select
									value={selectedClub}
									options={footballClubOptions}
									onChange={this.onChangeClub}
									placeholder='Select a Club...'
								/>
							</div>

							<div id='super-league=season-select'>
								<Select
									value={selectedSeason}
									options={seasonOptions}
									onChange={this.onChangeSeason}
									placeholder='Select a Season...'
								/>
							</div>

						</CardPanel>
					</div>
				</div>
			</div>
		)
	}
}

FootballStats.propTypes = {
	fetchCompetitions: PropTypes.func.isRequired,
	fetchCompetitionFootballClubs: PropTypes.func.isRequired,
	fetchCompetitionFootballClubHistoricalTable: PropTypes.func.isRequired,
	fetchCompetitionFootballClubMockSuperLeagueTable: PropTypes.func.isRequired,
	competitions: PropTypes.array.isRequired,
	footballClubs: PropTypes.array.isRequired,
	historicalTable: PropTypes.array.isRequired,
	newHistoricalTable: PropTypes.bool.isRequired,
	newMockSuperLeagueTable: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
	competitions: state.stats.competitions,
	footballClubs: state.stats.footballClubs,
	historicalTable: state.stats.historicalTable,
	mockSuperLeagueTable: state.stats.mockSuperLeagueTable,
	newHistoricalTable: state.stats.newHistoricalTable,
	newMockSuperLeagueTable: state.stats.newMockSuperLeagueTable,
});

export default connect(mapStateToProps, { fetchCompetitions, fetchCompetitionFootballClubs, fetchCompetitionFootballClubHistoricalTable, fetchCompetitionFootballClubMockSuperLeagueTable })(FootballStats);

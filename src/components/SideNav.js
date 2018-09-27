import React from 'react';
import { Table } from 'react-materialize';
import { faHome, faChartBar, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import SideNavWrapper from './SideNavWrapper';
import SideNavTableRow from './SideNavTableRow';


const SideNav = props => (
	<div className="show-on-medium-and-down hide-on-large-only">
		<SideNavWrapper id="bubble" width={300}>
			<Table>
				<tbody>
					<SideNavTableRow linkDestination="/" linkText="Home" icon={faHome} />
					<SideNavTableRow linkDestination="/stats" linkText="Stats" icon={faChartBar} />
					<SideNavTableRow linkDestination="/blog" linkText="Insights" icon={faNewspaper} />
				</tbody>
			</Table>
	  	</SideNavWrapper>
	</div>
)

export default SideNav;

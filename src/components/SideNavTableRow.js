import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SideNaveTableRow = props => (
	<tr style={{border: '0px'}}>
		<td style={{padding: '0 5px'}}>
			<Link to={props.linkDestination} className="menu-item"><FontAwesomeIcon icon={props.icon} size="lg" /></Link>
		</td>
		<td style={{padding: '0 5px'}}>
			<Link to={props.linkDestination} className="menu-item">
				<span style={{fontWeight: '700'}}>
					{props.linkText}
				</span>
			</Link>
		</td>
	</tr>
)

export default SideNaveTableRow;

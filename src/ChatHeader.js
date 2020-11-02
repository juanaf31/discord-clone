import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

function ChatHeader({ channelName }) {
	return (
		<div className="chatHeader">
			<div className="chatHeader__left">
				<h3>
					<span className="chatHeader__hash">#</span>
					{channelName}
				</h3>
			</div>
			<div className="chatHeader__right">
				<NotificationsIcon />
				<EditLocationIcon />
				<PeopleAltRoundedIcon />
				<div className="chatHeader__search">
					<input placeholder="Search" />
					<SearchRoundedIcon />
				</div>
				<SendRoundedIcon />
				<HelpRoundedIcon />
			</div>
		</div>
	);
}

export default ChatHeader;

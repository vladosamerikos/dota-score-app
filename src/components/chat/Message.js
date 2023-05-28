import React from 'react';
import moment from 'moment';
import defaultAvatar from 'images/avatar.webp'; // Importa la imagen por defecto


function Message({ message }) {
	const formatTimestamp = (timestamp) => {
		const currentDate = moment().format('DD.MM.YYYY');
		const messageDate = moment(timestamp).format('DD.MM.YYYY');

		if (currentDate === messageDate) {
			return moment(timestamp).format('HH:mm');
		} else if (
			moment(currentDate, 'DD.MM.YYYY') >
			moment(messageDate, 'DD.MM.YYYY').add(1, 'days')
		) {
			return moment(timestamp).format('YYYY-MM-DD HH:mm');
		} else {
			return moment(timestamp).format('YYYY-MM-DD [at] HH:mm');
		}
	};

	const currentUser = sessionStorage.getItem('nickname');

	if (message.username === currentUser) {
		return (
			<>
				<div className='d-flex justify-content-between'>
					<div className='small mb-1 text-muted'>
						{formatTimestamp(message.timestamp)}
					</div>
					<div className='small mb-1'>{message.username}</div>
				</div>
				<div className='d-flex flex-row justify-content-end mb-4 pt-1'>
					<div>
						<div
							className='small p-2 me-3 mb-3 text-white rounded-3 bg-warning'
							style={{ wordBreak: 'break-all' }}
						>
							{message.message}
						</div>
					</div>
					<img
						src={message.user_logo_url || defaultAvatar}
						alt='avatar'
						className='rounded-circle'
						style={{ width: '45px', height: '45px' }}
					/>
				</div>
			</>
		);
	}

	return (
		<>
			<div className='d-flex justify-content-between'>
				<div className='small mb-1'>{message.username}</div>
				<div className='small mb-1 text-muted'>
					{formatTimestamp(message.timestamp)}
				</div>
			</div>
			<div className='d-flex flex-row justify-content-start'>
				<img
					src={message.user_logo_url || defaultAvatar}
					alt='avatar'
					className='rounded-circle'
					style={{ width: '45px', height: '45px' }}
				/>
				<div>
					<div
						className='small p-2 ms-3 mb-3 rounded-3'
						style={{ backgroundColor: "#f5f6f7", wordBreak: 'break-all' }}
					>
						{message.message}
					</div>
				</div>
			</div>
		</>
	);
}

export default Message;
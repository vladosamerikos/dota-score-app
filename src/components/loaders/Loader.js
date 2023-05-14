import FullWidthLayout from 'hocs/layouts/FullWidthLayout';
import React from 'react';

function Loader() {
	return (
			<div className='d-flex justify-content-center mt-5'>
				<div className='spinner-border text-danger' role='status'>
					<span className='visually-hidden'>Cargando ...</span>
				</div>
			</div>
	);
}

export default Loader;

import React, { useState } from 'react';
import { login, register } from '../../api/backend.api';

// Resto del código del componente

export default function AuthForm(props) {
	const [authMode, setAuthMode] = useState('signin');
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		nickname: '',
	});
	const [error, setError] = useState('');

	const showError = (message) => {
		setError(message);
	};

	const changeAuthMode = () => {
		setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
	};

	const submitForm = async (e) => {
		e.preventDefault();

		try {
			if (authMode === 'signin') {
				const { email, password } = formData;
				await login(email, password);

				// Redireccionar a otra página
				window.location.href = "/"; // Cambia la ruta a la página de destino
			} else {
				const { email, password, nickname } = formData;
				const response = await register(email, password, nickname);

				// Realizar auto login después del registro
				// if (response.success) {
				//   await login(email, password);
				// }
			}
		} catch (error) {
      if (error.response && error.response.data) {
        const responseData = error.response.data;
        let errorMessage = '';
    
        if (responseData.msg) {
          errorMessage = responseData.msg;
        } else if (responseData.email) {
          errorMessage = responseData.email;
        } else if (responseData.password) {
          errorMessage = responseData.password;
        } else if (responseData.nickname) {
          errorMessage = responseData.nickname;
        }
    
        showError(errorMessage);
      } else {
        console.log(error.response.data);
      }
		}
	};

	if (authMode === 'signin') {
		return (
			<div className='Auth-form-container'>
				{error && (
					<div className='container mb-5 d-flex justify-content-start'>
						<div
							className='alert alert-danger alert-dismissible fade show'
							role='alert'
						>
							<strong>{error}</strong>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='alert'
								aria-label='Close'
							></button>
						</div>
					</div>
				)}
				<form className='Auth-form' onSubmit={submitForm}>
					<div className='Auth-form-content'>
						<h3 className='Auth-form-title'>Iniciar sesión</h3>
						<div className='text-center'>
							Todavía no estás registrado?{' '}
							<span
								className='link-primary'
								onClick={changeAuthMode}
							>
								Crear cuenta
							</span>
						</div>
						<div className='form-group mt-3'>
							<label>Correo electrónico</label>
							<input
								type='email'
								className='form-control mt-1'
								placeholder='Enter email'
								value={formData.email}
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
							/>
						</div>
						<div className='form-group mt-3'>
							<label>Password</label>
							<input
								type='password'
								className='form-control mt-1'
								placeholder='Enter password'
								value={formData.password}
								onChange={(e) =>
									setFormData({
										...formData,
										password: e.target.value,
									})
								}
							/>
						</div>
						<div className='d-grid gap-2 mt-3'>
							<button type='submit' className='btn btn-primary'>
								Entrar
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}

	return (
		<div className='Auth-form-container'>
							{error && (
					<div className='container mb-5 d-flex justify-content-start'>
						<div
							className='alert alert-danger alert-dismissible fade show'
							role='alert'
						>
							<strong>{error}</strong>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='alert'
								aria-label='Close'
							></button>
						</div>
					</div>
				)}
			<form className='Auth-form' onSubmit={submitForm}>
				<div className='Auth-form-content'>
					<h3 className='Auth-form-title'>Registrarse</h3>
					<div className='text-center'>
						¿Ya registrado?{' '}
						<span className='link-primary' onClick={changeAuthMode}>
							Iniciar sesión
						</span>
					</div>
					<div className='form-group mt-3'>
						<label>Nickname</label>
						<input
							type='text'
							className='form-control mt-1'
							placeholder='e.g jake'
							value={formData.nickname}
							onChange={(e) =>
								setFormData({
									...formData,
									nickname: e.target.value,
								})
							}
						/>
					</div>
					<div className='form-group mt-3'>
						<label>Correo electrónico</label>
						<input
							type='email'
							className='form-control mt-1'
							placeholder='Correo electrónico'
							value={formData.email}
							onChange={(e) =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
						/>
					</div>
					<div className='form-group mt-3'>
						<label>Password</label>
						<input
							type='password'
							className='form-control mt-1'
							placeholder='Password'
							value={formData.password}
							onChange={(e) =>
								setFormData({
									...formData,
									password: e.target.value,
								})
							}
						/>
					</div>
					<div className='d-grid gap-2 mt-3'>
						<button type='submit' className='btn btn-primary'>
							Registrarse
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

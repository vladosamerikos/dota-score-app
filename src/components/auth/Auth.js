import React, { useState } from 'react';
import { login, register } from 'redux/actions/authActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function AuthForm({ login, register, isAuthenticated, error }) {
	const navigate = useNavigate();
	const [authMode, setAuthMode] = useState('signin');
	const [formData, setFormData] = useState({
	  email: '',
	  password: '',
	  nickname: '',
	});
  
	const showError = (message) => {
	  // Handle error display logic
	};
  
	const switchAuthMode = () => {
	  setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
	};
  
	const submitForm = async (e) => {
	  e.preventDefault();
  
	  const { email, password, nickname } = formData;
  
	  try {
		if (authMode === 'signin') {
		  await login(email, password);
		  navigate('/');
		} else {
		  await register(email, password, nickname);
		  // No es necesario actualizar el estado de registro o redireccionar aquí
		}
	  } catch (error) {
		showError(error.message);
	  }
	};
	  

	if (authMode === 'signin') {
		return (
			<div className='Auth-form-container'>
				{error && (
					<div className='container  d-flex justify-content-start'>
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
								onClick={switchAuthMode}
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
						<span className='link-primary' onClick={switchAuthMode}>
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

const mapStateToProps = (state) => {
	return {
	  error: state.auth.error,
	};
  };
  
  const mapDispatchToProps = {
	login,
	register,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
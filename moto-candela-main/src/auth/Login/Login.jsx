import { InputAdornment, TextField } from "@mui/material";
import { IconLock, IconUser, IconCircle, IconCircleCheckFilled } from "@tabler/icons-react";
import React, { useState } from 'react';
import './Login.scss';
import { Button } from "../../components/Button/Button";
import logoSmall from './../../assets/img/logo-small.svg';
import googleLogo from './../../assets/img/google-logo.svg';


export default () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = (event) => {
        console.log(email, password);
    };

    const handleGoogleSubmit = (event) => {
        console.log(event);
    };

    return (
        <div className='login'>
            <img className="login__logo" width={100} src={logoSmall} alt='Moto Candela Logo Pequeño' />
            <div className='login__fields'>
                <TextField
                    placeholder="Correo electrónico"
                    variant="outlined"
                    color="primary"
                    size='small'
                    value={email}
                    onChange={handleChangeEmail}
                    sx={{
                        width: "90%",
                        backgroundColor: "white",
                        borderRadius: 5,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderRadius: "50px"
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment
                            position="end"
                        >
                            <IconUser size={20} color='#49454F' />
                        </InputAdornment>,
                    }}
                />
                <TextField
                    placeholder="Contraseña"
                    variant="outlined"
                    color="primary"
                    size='small'
                    value={password}
                    onChange={handleChangePassword}
                    type='password'
                    sx={{
                        width: "90%",
                        backgroundColor: "white",
                        borderRadius: 5,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderRadius: "50px"
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment
                            position="end"
                        >
                            <IconLock size={20} color='#49454F' />
                        </InputAdornment>,
                    }}
                />
                <button className="login__fields__remember" onClick={() => setRememberPassword(!rememberPassword)} >{rememberPassword ? <IconCircleCheckFilled size={20} /> : <IconCircle size={20} />}Recordar contraseña</button>
                <div className="login__fields__forgot">No tienes cuenta? <a className="register" href="/register">Registrate</a></div>
            </div>
            <div className='login__buttons'>
                <Button color="secondary" onClick={handleSubmit}>
                    Iniciar Sesión
                </Button>
                <Button color="secondary" onClick={handleGoogleSubmit} customStyle={{ backgroundColor: '#E23A2E' }}>
                    <img src={googleLogo} width={24} /> Iniciar sesión con Google
                </Button>
            </div>
        </div>
    )
}

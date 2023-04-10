import {useFormik} from "formik";
import * as Yup from 'yup';

import {Box, Button, InputAdornment, Stack, TextField, Typography} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import {useState} from "react";
import {loginUser} from "./authSlice";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = event => {
        event.preventDefault();
    }
    const isLoading = useSelector(state => state.auth.isLoading);

    const formik = useFormik({
        initialValues: {
            redmine_login: '',
            redmine_token: '',
            submit: null
        },
        validationSchema: Yup.object({
            redmine_login: Yup.string()
            .required('Обязательное поле'),

            redmine_token: Yup.string()
            .required('Обязательное поле')
        }),
        onSubmit: async (values, helpers) => {
            try{
                await handleLogin(values.redmine_login, values.redmine_token)
            } catch (e) {
                console.log(e, 'error')
                helpers.setStatus({success: false});
                helpers.setErrors({ submit: e.message });
                helpers.setSubmitting(false);
            }

        },

    })

    const handleLogin = async (redmine_login, redmine_token) => {
        await dispatch(loginUser({redmine_login, redmine_token}))
        navigate('/', {replace:true});
    }

    return (
        <>
            <Box sx={{
                backgroundColor: 'background.paper',
                flex: '1 1 auto',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }}
            >
                <Box sx={{
                    maxWidth: 550,
                    px: 3,
                    py: '100px',
                    width: '100%',
                    mt: '20rem',
                }}
                >
                    <Stack spacing={1}
                           sx={{mb: 3}}
                    >
                        <Typography variant="h4">
                            Login Page
                        </Typography>
                    </Stack>

                    <form onSubmit={formik.handleSubmit} noValidate>
                        <Stack spacing={3}>
                            <TextField
                                error={!!(formik.touched.redmine_login && formik.errors.redmine_login)}
                                fullWidth
                                helperText={formik.touched.redmine_login && formik.errors.redmine_login}
                                label="Login"
                                name="redmine_login"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.redmine_login}
                            />
                            <TextField
                                error={!!(formik.touched.redmine_token && formik.errors.redmine_token)}
                                fullWidth
                                helperText={formik.touched.redmine_token && formik.errors.redmine_token}
                                label="Token"
                                name="redmine_token"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.redmine_token}
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Stack>

                        {formik.errors.submit && (
                            <Typography
                                color="error"
                                sx={{mt: 3}}
                                variant="body2"
                            >
                                {formik.errors.submit}
                            </Typography>
                        )}
                        <LoadingButton
                            fullWidth
                            size="large"
                            sx={{ mt: 3 }}
                            type="submit"
                            variant="contained"
                            loading={isLoading}
                            // loadingIndicator="Loading…"
                        >
                            <span>CONTINUE</span>
                        </LoadingButton>
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default Login;
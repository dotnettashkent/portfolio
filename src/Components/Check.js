import { lazy, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { getCheck } from '../redux/check'

const Main = lazy(() => import('./Main'))

const Check = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState(false)
    const [reg, setReg] = useState({
        username: '',
        password: '',
    })

    const { check } = useSelector(state => state.check)

    const submit = () => {
        if (reg.username === check.username && reg.password === check.password) {
            localStorage.setItem('success', 'success')
            setLogin(true)
            setReg({
                ...reg,
                username: '',
                password: '',
            })
        } else
            setReg({
                ...reg,
                username: '',
                password: '',
            })
    }

    useEffect(() => {
        dispatch(getCheck())
        if (localStorage.getItem('success') === 'success') setLogin(true)
    }, [dispatch])

    return (
        <div>
            {login ? (
                <Main />
            ) : (
                <Container>
                    <Row>
                        <Col className='col-4 offset-4 mt-5'>
                            <Form className='text-white'>
                                <FormGroup className='my-3'>
                                    <Label for='username'>Username</Label>
                                    <Input
                                        id='username'
                                        name='username'
                                        placeholder='Username'
                                        type='text'
                                        value={reg.username}
                                        onChange={e => setReg({ ...reg, username: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup className='my-3'>
                                    <Label for='password'>Password</Label>
                                    <Input
                                        id='password'
                                        name='username'
                                        placeholder='Password'
                                        type='password'
                                        value={reg.password}
                                        onChange={e => setReg({ ...reg, password: e.target.value })}
                                    />
                                </FormGroup>
                                <div className='text-center my-3'>
                                    <Button onClick={submit}>Submit</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    )
}

export default Check

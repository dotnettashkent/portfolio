import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
    Button,
    Card,
    CardBody,
    CardImg,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap'
import { editProject, getProject } from '../../redux/project'

const EditProject = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    let [change, setChange] = useState({
        image: '',
        made: '',
        name: '',
        comment: '',
        link: '',
    })

    let { loading, project, error, err_msg } = useSelector(state => state.project)

    useEffect(() => {
        dispatch(getProject(id))
    }, [dispatch, id])

    useEffect(() => {
        setChange({
            image: project?.image,
            made: project?.made,
            name: project?.name,
            comment: project?.comment,
            link: project?.link,
        })
    }, [project?.image, project?.made, project?.name, project?.comment, project?.link])

    const submit = () => {
        dispatch(
            editProject({
                id: project?._id,
                ...change,
            })
        )
        navigate('/edit')
    }

    return (
        <Container>
            <Row>
                <Col className='col-6 offset-3 mt-4 mb-5'>
                    {loading && <h1 className='text-white'>Loading...</h1>}
                    {error && <h1 className='text-white'>{err_msg}</h1>}
                    {!loading && !error && (
                        <Card className='bg-color-1 box-shadow-1 text-white borr-6'>
                            <CardImg top width={'100%'} src={project?.image} className='p-3' />
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for='imgurl'>Image Url</Label>
                                        <Input
                                            type='text'
                                            id='imgurl'
                                            name='imgurl'
                                            placeholder='Image url'
                                            defaultValue={project?.image}
                                            onChange={e =>
                                                setChange({ ...change, image: e.target.value })
                                            }
                                        />
                                    </FormGroup>
                                    <FormGroup className='mt-3'>
                                        <Label for='made'>Made</Label>
                                        <Input
                                            type='text'
                                            id='made'
                                            name='made'
                                            placeholder='made'
                                            defaultValue={project?.made}
                                            onChange={e =>
                                                setChange({ ...change, made: e.target.value })
                                            }
                                        />
                                    </FormGroup>
                                    <FormGroup className='mt-3'>
                                        <Label for='Name'>Name</Label>
                                        <Input
                                            type='text'
                                            id='Name'
                                            name='Name'
                                            placeholder='Name'
                                            defaultValue={project?.name}
                                            onChange={e =>
                                                setChange({ ...change, name: e.target.value })
                                            }
                                        />
                                    </FormGroup>
                                    <FormGroup className='mt-3'>
                                        <Label for='comment'>Comment</Label>
                                        <Input
                                            type='textarea'
                                            name='comment'
                                            id='comment'
                                            placeholder='Comment'
                                            defaultValue={project?.comment}
                                            onChange={e =>
                                                setChange({ ...change, comment: e.target.value })
                                            }
                                            rows='7'
                                        />
                                    </FormGroup>
                                    <FormGroup className='mt-3'>
                                        <Label for='link'>Link</Label>
                                        <Input
                                            type='text'
                                            name='link'
                                            id='link'
                                            placeholder='Link'
                                            defaultValue={project?.link}
                                            onChange={e =>
                                                setChange({ ...change, link: e.target.value })
                                            }
                                        />
                                    </FormGroup>
                                    <div className='my-3'>
                                        <Button color='success' onClick={submit} className='me-3'>
                                            Edit
                                        </Button>
                                        <Link to='/edit'>
                                            <Button color='danger'>Cancel</Button>
                                        </Link>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default EditProject

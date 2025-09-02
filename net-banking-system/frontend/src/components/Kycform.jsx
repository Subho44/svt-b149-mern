import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, Form } from 'react-bootstrap';
import axios from 'axios';


const Kycform = ({ fetchkyc, editId, setEditId }) => {
    const [form, setForm] = useState({
        fullname: '',
        dob: '',
        address: '',
        documenttype: 'Aadhar',
        documentnumber: '',
        status: 'Pending'
    });
    //load data if editing
    useEffect(() => {
        if (editId) {
            axios.get(`http://localhost:6500/api/kyc/${editId}`)
                .then(res => setForm({ ...res.data, dob: res.data.dob.split('T')[0] }))
                .catch(err => console.log(err));
        }

    }, [editId]);

    const hc = (e) => setForm({ ...form, [e.target.name]: e.target.value });
   const hs = async (e) => {
  e.preventDefault();
  try {
    if (editId) {
      await axios.put(`http://localhost:6500/api/kyc/${editId}`, form, {
        headers: { 'Content-Type': 'application/json' }
      });
      setEditId(null);
    } else {
      await axios.post('http://localhost:6500/api/kyc', form, {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    setForm({
      fullname: '',
      dob: '',
      address: '',
      documenttype: 'Aadhar',
      documentnumber: '',
      status: 'Pending'
    });
    fetchkyc();
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

    return <>
        <Card className='mb-4 shadow-sm'>
            <Card.Header>{editId ? 'Update kyc' : 'Add kyc'}</Card.Header>
            <Card.Body>
                <Form onSubmit={hs}>
                    <Row className='g-3'>
                        <Col md={3}>
                            <Form.Control
                                name='fullname'
                                placeholder='full name'
                                value={form.fullname}
                                onChange={hc}
                                required
                            />
                        </Col>
                        <Col md={2}>
                            <Form.Control
                                name='dob'
                                type='date'
                                value={form.dob}
                                onChange={hc}
                                required
                            />
                        </Col>
                        <Col md={3}>
                            <Form.Control
                                name='address'
                                placeholder='Address'
                                value={form.address}
                                onChange={hc}
                                required
                            />
                        </Col>
                        <Col md={2}>
                            <Form.Select
                                name='documenttype'
                                value={form.documenttype}
                                onChange={hc}
                            >
                            <option>Aadhar</option>
                            <option>Pan</option>
                            <option>Passport</option>

                            </Form.Select>
                        </Col>
                         <Col md={2}>
                            <Form.Control
                                name='documentnumber'
                                placeholder='Document Number'
                                value={form.documentnumber}
                                onChange={hc}
                                required
                            />
                        </Col>
                         <Col md={2}>
                            <Form.Select
                                name='status'
                                value={form.status}
                                onChange={hc}
                            >
                            <option>Pending</option>
                            <option>Verified</option>
                            <option>Rejected</option>

                            </Form.Select>
                        </Col>

                         <Col md={2}>
                            <Button
                                type='submit'
                                variant='primary'
                                className='w-100'
                            >
                            {editId ?'Update':'Add'}
                            </Button>
                        </Col>

                    </Row>

                </Form>
            </Card.Body>
        </Card>
    </>
}

export default Kycform
import React from 'react'
import { Table, Button, Card } from 'react-bootstrap'
import axios from 'axios'

const Kyclist = ({ data=[], fetchkyc, setEditid }) => {
  const list = Array.isArray(data) ?data : [];
  const hd = async (id) => {
    if (!window.confirm("Delete this recorde?")) return;
    try {
      await axios.delete(`http://localhost:6500/api/kyc/${id}`);
      fetchkyc();
    } catch (err) {
      console.error(err);
      alert('delete failed');
    }
  };

  return <>
    <Card className='shadow-sm'>
      <Card.Header className='bg-danger text-dark'>KYC Records</Card.Header>
      <Card.Body className='table-responsive'>
        <Table striped bordered hover responsive>
          <thead className='table-dark  text-center'>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Address</th>
              <th>Doc Type</th>
              <th>Doc Number</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map(x=>(
              <tr>
                <td>{x.fullname}</td>
                <td>{x.dob ?new Date(x.dob).toLocaleDateString():''}</td>
                <td>{x.address}</td>
                <td>{x.documenttype}</td>
                <td>{x.documentnumber}</td>
                <td>{x.status}</td>
                <td>
                  <div className='btn-group'>
                    <Button variant='warning' size='sm' className='me-2' onClick={()=>setEditid(x._id)}>Edit</Button>
                     <Button variant='danger' size='sm' className='me-2' onClick={()=>hd(x._id)}>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Card.Body>

    </Card>
  </>
}

export default Kyclist
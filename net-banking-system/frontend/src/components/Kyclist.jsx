// src/components/KycList.js
import React,{useState} from 'react';
import { Card, Table, Button, Image ,Form,Row,Col,InputGroup } from 'react-bootstrap';
import axios from 'axios';


const KycList = ({ data = [], fetchKyc = () => {}, setEditId = () => {} }) => {
  // ensure `data` is an array
  const list = Array.isArray(data) ? data : [];
 const [search,setSearch] = useState('');

  const handleDelete = async (id) => {
    if (!id) return;
    if (!window.confirm('Are you sure you want to delete this record?')) return;

    try {
      await axios.delete(`http://localhost:6500/api/kyc/${id}`);
      // refresh list after delete
      fetchKyc();
    } catch (err) {
      console.error('Delete error:', err);
      alert('Delete failed — check console for details');
    }
  };
// filter list by name and document no
 const filtered = list.filter(x=>{
  if(!search.trim()) return true;
const q = search.toLowerCase();
const name = (x.fullname || x.fullName || '').toLowerCase();
const doc = (x.documentnumber || x.documentNumber || '').toLowerCase();
return name.includes(q) ||doc.includes(q);

 });
  return (
    <Card>
      <Card.Header className="bg-primary text-white">KYC Records</Card.Header>
      <Card.Body className="table-responsive">
       <Row>
        <Col md={6}>
          <Form.Control placeholder='Search name or document' value={search}
           onChange={e=>setSearch(e.target.value)}/>
        </Col>
       </Row>
        <Table striped bordered hover responsive>
          <thead className="table-dark text-center">
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Address</th>
              <th>Doc Type</th>
              <th>Doc#</th>
              <th>Photo</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center">No records</td>
              </tr>
            ) : (
              filtered.map((item) => {
                const id = item._id ?? item.id;
                return (
                  <tr key={id}>
                    <td>{item.fullname ?? item.fullName ?? '-'}</td>
                    <td>{item.dob ? new Date(item.dob).toLocaleDateString() : ''}</td>
                    <td>{item.address ?? '-'}</td>
                    <td>{item.documenttype ?? item.documentType ?? '-'}</td>
                    <td>{item.documentnumber ?? item.documentNumber ?? '-'}</td>
                    <td className="text-center">
                      {item.photo ? (
                        <a href={`http://localhost:6500/uploads/${item.photo}`} target="_blank" rel="noreferrer">
                          <Image
                            src={`http://localhost:6500/uploads/${item.photo}`}
                            thumbnail
                            style={{ width: 80, height: 80, objectFit: 'cover' }}
                            alt="kyc"
                          />
                        </a>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td>{item.status ?? '-'}</td>
                    <td className="text-center">
                      <div className="btn-group" role="group" aria-label="actions">
                        <Button
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => setEditId(id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default KycList;

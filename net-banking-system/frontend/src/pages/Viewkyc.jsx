import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import Kycform from '../components/Kycform';
import Kyclist from '../components/Kyclist';

const Viewkyc = () => {
  const[data,setData] = useState([]);
  const [editId,setEditId] = useState(null);

  const fetchkyc = async()=>{
    try {
      const res = await axios.get('http://localhost:6500/api/kyc');
      setData(Array.isArray(res.data.data) ? res.data.data : []);
    } catch(err) {
      alert("fetch load kyc data");
    }
  };
  useEffect(()=>{
    fetchkyc();
  },[]);
  return <>
  <Container>
    <Kycform fetchkyc={fetchkyc} editId={editId} setEditId={setEditId}/>
    <Kyclist data={data} fetchkyc={fetchkyc} setEditid={setEditId}  />
  </Container>
   
  </>
}

export default Viewkyc
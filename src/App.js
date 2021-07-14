import { Col, Row } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Cards from './components/Cards';
import Containers from './components/Containers';
import Heading from './components/Heading';

function App() {
  return (
    <Containers>
      <Heading />
      <Row>
        <Col>
          <Cards src='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' company_name='Spectrics Solution' name='Kay' dob='30/06/1998' id_no='123654' blood_group='B-ve' />
        </Col>
        <Col>
          <Cards src='https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' company_name='Spectrics Solution' name='Tom' dob='05/03/1996' id_no='987456' blood_group='O+ve' />
        </Col>
        <Col>
          <Cards src='https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' company_name='Spectrics Solution' name='Jane' dob='09/12/1993' id_no='852753' blood_group='AB+ve' />
        </Col>
      </Row>
    </Containers>
  );
}

export default App;

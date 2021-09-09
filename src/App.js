import './App.css';
import NavBar from './Components/navbar'; /*Conatin Nav Section*/
import {Container,Row,Col,Form,InputGroup, Badge} from 'react-bootstrap';
import Services from './Components/services'; /*Conatin Services Section*/

function App() {
  return (
    <Container fluid> 
      <Row>
        <Col>
          <NavBar/>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='text-center infoSection'>
            <div className='font-weight-bold proudWord'>We Register 10% of all Indian Companies</div>
            <div className='sub-proudWord'>That's one Company every 9 Minutes</div>
          </div>
        </Col>
      </Row>
      <Row>
          <InputGroup as={Col} sm={7} className='mx-auto mt-5 p-1'>
            <InputGroup.Text>&#128269;</InputGroup.Text>
            <Form.Control type='text' id='searchBar' className='border' placeholder='Search through all our Services' />
          </InputGroup>
      </Row>
      <Row>
        <Col className='my-5 text-center'>
          Popular : 
          <Badge pill className='m-2'>Company Registration</Badge>
          <Badge pill className='m-2'>GST Registration</Badge>
          <Badge pill className='m-2'>TradeMark</Badge>
          <Badge pill className='m-2'>Accounting and Bussiness</Badge>
        </Col>
      </Row>
      <div className='font-weight-bold proudWord text-center'>India's Largest Professional Platform</div>
      <Row className='w-75 mx-auto mt-5 informations'>
        <Col >
            <div>
              <div className='font-weight-bold mb-3'>Legal</div>
              <div>Your documents, contracts, and registrations handled by expert lawyers.</div>
            </div>
        </Col>
        <Col  >
            <div>
              <div className='font-weight-bold mb-3'>Tax</div>
              <div>Filing returns and paying your taxes – made easier for you.</div>
            </div>
        </Col>
        <Col  >
            <div>
              <div className='font-weight-bold mb-3'>Comaplaiance</div>
              <div>Our chartered accountants and company secretaries will keep your books in order.</div>
            </div>
        </Col>
        </Row>
        <hr></hr>
        <div className='font-weight-bold text-center proudWord'>500,000 Customers and Counting!</div>
        <Row>
          <Col className="text-center mt-5">
          <img src="https://assets.vakilsearch.com/compressed_images/oyo-rooms.svg" alt='assest' className='mr-5  pt-2'/>
          <img src="https://assets.vakilsearch.com/compressed_images/taxi.svg" alt='assest' className='mr-5  pt-2'/>
          <img src="https://assets.vakilsearch.com/compressed_images/bb.svg" alt="assest" className='mr-5  pt-2'/>
          <img src="https://assets.vakilsearch.com/compressed_images/hdfc.svg" alt='assest' className='mr-5  pt-2'/>
          <img src="https://assets.vakilsearch.com/compressed_images/amazon-grey.svg" alt="assest" className='mr-5 pt-2'/>
          <img src="https://assets.vakilsearch.com/compressed_images/jamb.svg" alt="assest" className=''/>
          </Col>
        </Row>
        <Services/>
    </Container>
  );
}

export default App;

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const SRC = () => (
  <Container className="section p-4 bg-white my-5 rounded">
    <a className='target' id='src'/>
    <h2 className='display-4 anchor mb-3'>Student Research Competition (SRC)</h2>
    <p>
      Students are invited to submit research abstracts (maximum of 4 pages in ACM camera-ready format) following the instructions published at the SAC 2023 website.
    </p>
      <Row className="justify-content-center my-3">
        <Button className="btn-lg" href='https://www.sigapp.org/sac/sac2023/submission_src.html'>Submit a SRC abstract</Button>
      </Row>
    <p>
      Authors of selected abstracts will have the opportunity to give poster and oral presentations of their work and compete for three top-winning places. The SRC committee will evaluate and select First, Second, and Third place winners. The winners will receive medals and cash awards. Winners will be announced during the conference banquet. Invited students receive SRC travel support (US$500) and are eligible to apply to the SIGAPP Student Travel Award Program (STAP) for additional travel support.
    </p>
  </Container>
)

export default SRC

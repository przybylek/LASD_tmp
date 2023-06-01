import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const conferences = [
  {
    title: "LASD'22",
    location: "Virtual Event 2022",
    website: "https://y2022.lasd.pl",
    proceedings: "https://link.springer.com/book/10.1007/978-3-030-94238-0"
  },
  {
    title: "LASD'21",
    location: "Virtual Event 2021",
    website: "https://y2021.lasd.pl",
    proceedings: "https://link.springer.com/book/10.1007/978-3-030-67084-9"
  },
  {
    title: "LASD@FedCSIS'20",
    location: "Virtual Event 2020",
    website: "https://www.fedcsis.org/2020/lasd",
    proceedings: "https://annals-csis.org/Volume_21/#H4LASD"
  },
  {
    title: "LASD@FedCSIS'19",
    location: "Leipzig 2019",
    website: "https://www.fedcsis.org/2019/lasd",
    proceedings: "https://annals-csis.org/Volume_18/#H4LASD"
  },
  {
    title: "LASD@FedCSIS'18",
    location: "Poznan 2018",
    website: "https://www.fedcsis.org/2018/lasd",
    proceedings: "https://annals-csis.org/Volume_15/#H4LASD"
  },
  {
    title: "LASD@FedCSIS'17",
    location: "Prague 2017",
    website: "https://www.fedcsis.org/2017/lasd",
    proceedings: "https://annals-csis.org/Volume_11/#H4LASD"
  }
]


const PastConferences = () => (
  <Container fluid="md" className='section pb-5 px-4 mt-5'>

    <a className='target' id='conferences'/>
    <h2 className="display-4 anchor mb-3">Past Conferences</h2>    
    <Row className="justify-content-md-center m-1">
      {conferences.map(c => (
      <Col key={c.title} md='auto' className="m-2">
        <Card style={{ width: '14rem' }} className="mx-auto">
          <Card.Body>
            <Card.Title>{c.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{c.location}</Card.Subtitle>
            <Card.Link href={c.website} className="badge badge-light text-primary">Website</Card.Link>
            <Card.Link href={c.proceedings} className="ml-2 badge badge-light text-primary">Proceedings</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>
  </Container>
)

export default PastConferences

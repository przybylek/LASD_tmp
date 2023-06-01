import Container from 'react-bootstrap/Container'
import PeopleList from '../components/PeopleList'

const Reviewers = ({ people }) => (
  <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='reviewers'/>
    <h2 className='display-4 mb-3'>Industry Advisory Board</h2>
    <PeopleList people={people} />
  </Container>
)

export default Reviewers

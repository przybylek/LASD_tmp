import Container from 'react-bootstrap/Container'

const Motivation = () => (
  <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='motivation'/>
    <h2 className='display-4 anchor mb-3'>Motivation</h2>
    <p>
      The evolution of software development methods is driven by the perennial quest on how to organize projects for better productivity. Plan-driven methods recommend spending much effort and resources to comprehensively capture all requirements and elaborate a big up-front design. Although they succeeded in projects where all properties of the software system could be specified in detail, they were unable to meet the dynamism, unpredictability and changing conditions that characterize today's competitive business environment. Thereby, traditional methods were superseded by lightweight methods based on iterative and incremental software development, frequent feedback from the customer, and an agile mindset. Agile methods have not only acknowledged that business requirements change, but also that customers are unable to definitively express their needs up front. Accordingly, agile teams start with a small set of core requirements to initiate the project and develop a working product. This working product becomes the basis for further discussions with the customer and new features are incrementally deliver on top of it. Later on, the software industry also started to adopt practices from lean manufacturing as a means of further waste elimination by removing all non-value-adding activities.
    </p>
    <p>
      While agile and lean software development has already become mainstream in industry and a strong community has crystallized around the new way of thinking, making the transition to the new mindset is still challenging for many project managers. Besides, as the vast majority of software development projects are unique, agile methods often need to be tailored to accommodate specific situations. However, method tailoring is not trivial and poses serious challenges for practitioners. Indeed, one of the most distinctive features of Scrum is that its practices are not independent, but instead are very tightly coupled and synergistic.
    </p>
    <p>
      Furthermore, Scrum, XP, and Kanban were originally designed for small, single teams and do not provide guidance on dealing with scaling issues, while the last decade has seen the spread of agile into large-scale and distributed projects. To help companies in large-scale transformations, several agile scaling frameworks including LeSS, S@S, Nexus and SAFe have been proposed. These off-the-shelf solutions incorporate predefined workflow patterns to deal with issues related to large number of teams, inter-team coordination, and lack of up-front architecture. Nevertheless, numerous challenges while adopting off-the-shelf frameworks have been reported, including mismatch between framework and organization, changes in management structure, changes in company's policies, and the impossibility of fully implementing the whole framework at once.
    </p>
    <p>
      On top of that, the COVID-19 pandemic has forced co-located teams, who relied on face-to-face communication for work coordination, to transition into a remote work environment, which agile methods just ignore.
    </p>
  </Container>
)

export default Motivation
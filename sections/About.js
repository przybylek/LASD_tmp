import Container from 'react-bootstrap/Container'

const About = () => (
  <Container className="bg-white section p-4 mb-5 rounded">
    <a className='target' id='about'/>
    <h2 className="display-4 anchor mb-3">About</h2>
    <p>The international conference on Lean and Agile Software Development (LASD) was founded in 2017 as a part of the FedCSIS multiconference. The conference grew each year until 2020 when it noticed a substantial decline in the number of submissions. To remedy this issue, in 2021 and 2022, LASD was held as a standalone, free of charge conference. Recently, it has joined ACM SAC as a track.</p>
    <p><strong>The objective of LASD is to extend the state-of-the-art in lean and agile software development and spread best practices as well as stories of successful transitions and adaptations to changing work environment.</strong></p> 
    <p>LASD has already become a prominent forum where practitioners, researchers, and academics meet to share and discuss their concerns, experience, and research findings. As for the past two editions, in total, authors of six best papers have been invited by the editor of either <span className="font-italic">Computer Science and Information Systems (ComSIS, IF: 1.17)</span> or <span className="font-italic">Journal of Computer Languages (Cola, IF: 1.78)</span> to publish an extended version of their papers. The conference is also famous for its conscientious PC members, who provide detailed, journal-quality reviews.</p>
  </Container>
)

export default About

//LASD'21 and LASD'22 received media sponsorship from the Agile Alliance



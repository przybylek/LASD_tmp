import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Clock from 'react-live-clock'


const Program = () => (
//      <Container className="section p-4 bg-white my-5 rounded">
//        <a className='target' id='Program'/>
//        <h2 className='display-4 anchor mb-3'>Accepted Papers</h2>
//        <p>
//          TBA...
//        </p>
//      </Container>

  /*********
  * Corrected Program.js from 2022. Comment Container above and uncomment container below when needed
  **********/

    <Container className="bg-white section p-4 rounded">
    <a className='target' id='program'/>
    <h2 className='display-4 anchor mb-3'>Program</h2>



    <Table bordered className="mt-5">
      <tbody>	

        <tr className='text-center table-primary'><th>Tuesday,<br /> March. 28</th><th>SRC Poster Exhibit (room: A046)</th></tr>
        <tr><td className='text-nowrap'>14:00 - 16:00</td><td>Why and Where Software Developers are (Not) using Project Data in Agile Retrospectives (<em>Leon Bein</em>)</td></tr>
        <tr><th className='text-center table-secondary' colSpan={2}></th></tr>

        <tr className='text-center table-primary'><th>Wednesday, March. 29</th><th>Full Paper Session (room: A224)</th></tr>
        <tr><td className='text-nowrap'>11:00 - 11:05</td><td><a href='/LASD2023.ppt' target="_blank" rel="noopener noreferrer">Track opening</a> (<em>Adam Przybyłek</em>)</td></tr>

        <tr><td className='text-nowrap'>11:05 - 11:20</td><td>Towards a Recommender System-Based Process for Managing Risks in Scrum Projects (<em>Ademar Sousa Neto, Felipe Ramos, Danyllo Albuquerque, Emanuel Dantas, Mirko Perkusich, Hyggo Almeida, Angelo Perkusich</em>)</td></tr>
        <tr><td className='text-nowrap'>11:20 - 11:35</td><td>Tailoring Hybrid Software Processes in a Medium-Size Software Company  (<em>Jacqueline Marín, Julio Ariel Hurtado, María Cecilia Bastarrica, Luis Silvestre</em>)</td></tr>
        <tr><td className='text-nowrap'>11:35 - 11:50</td><td>Challenges in Large-Scale Agile Software Development Projects (<em>Hina Saeeda, Muhammad Ovais Ahmad, Tomas Gustavsson</em>)</td></tr>
        <tr><td className='text-nowrap'>11:50 - 12:05</td><td><a href='https://youtu.be/9nUUGlhBwzc'>An Exploratory Study about Non-functional Requirements Documentation Practices in Agile Teams</a> (<em>Shahraz Nasir, Eduardo Guerra, Luciana Zaina, Jorge Melegati</em>)</td></tr>
        <tr><td className='text-nowrap'>12:05 - 12:20</td><td><a href='https://youtu.be/0l6_pgq1eK8'>Which Challenges Do Exist with Agile Culture in Practice?</a> (<em>Thorben Kuchel, Michael Neumann, Philipp Diebold, Eva-Maria Schön</em>)</td></tr>


        <tr><th className='text-center table-secondary' colSpan={2}></th></tr>

        <tr className='text-center table-primary'><th>Wednesday, March. 29</th><th>Poster Exhibit (room: A046)</th></tr>
        <tr><td className='text-nowrap'>14:30 - 16:30</td><td>
          <ul>
      <li>Agile GUI Testing by computing novel Mobile App Coverage Using Appium Tool  (<em>Sangharatna Godboley, Debasish Dalei, Ravichandra Sadam, Durga Prasad Mohapatr</em>)</li>
      <li>Differences in Performance, Scalability, and Cost of Using Microservice and Monolithic Architecture (<em>Przemysław Jatkiewicz, Szymon Okrój</em>)</li>
          </ul>
        </td></tr>

      </tbody>
    </Table>
  </Container>
)

export default Program


//    <Row className="justify-content-center my-5">
//      <Col xs lg="1"> 
//      </Col>
//
//      <Col xs lg="2"> 
//        <Image fluid src='/LNBIP_LASD22.jpg' alt='LNBIP_LASD22'/>
//      </Col>
//      <Col>
//  <h4>Lean and Agile Software Development</h4>
//  <h5>6th International Conference, LASD 2022, Virtual Event, January 22, 2022, Proceedings</h5>
//  <h4><a href="https://link.springer.com/book/10.1007/978-3-030-94238-0">LNBIP, volume 438</a></h4>          
//      <p className='mt-4'>Time zone of the conference: GMT+1 (Central European Standard Time)</p>
//      <p>Current Time:
//         <Clock 
//           format={'HH:mm:ss'}
//           ticking={true}
//           className="mx-2" />
//       </p>
//      </Col>
//     <Col xs lg="1"> 
//      </Col>
//    </Row> 


//        <tr><th className='text-center table-secondary' colSpan={2}>Break </th></tr>
//        <tr className='text-center table-primary'><th>Saturday, Jan. 22</th><th>Session 2</th></tr>
//        <tr><td className='text-nowrap'>14:00 - 14:55</td><td><a href='https://youtu.be/OJIz8aOGbHI'>Agility in Software 2.0 – Notebook Interfaces and MLOps with Buttresses and Rebars</a><br /><em>Markus Borg</em></td></tr>
//        <tr><td className='text-nowrap'>14:55 - 15:40</td><td>Q&A:
//          <ul>
//      <li><a href='https://youtu.be/GbWTGMHa4nI'>Impact of Turkish National Culture on Agile Software Development in Turkey</a><br /><em>Aysegul Gelmis, Necmettin Ozkan, Ali J. Ahmad and Mehmet Guray Guler</em></li>
//      <li><a href='https://youtu.be/MfIs3ADWNuQ'>The Integrated List of Agile Practices - A Tertiary Study</a><br /><em>Michael Neumann</em></li>
//      <li><a href='https://youtu.be/kICMBmkRgyE'>Develop sustainable software with a lean ISO 14001 setup facilitated by the efiS framework</a><br /><em>Alexander Poth and Elisabeth Nunweiler</em></li>
//      <li><a href='https://youtu.be/nsXcI6fpjyw'>Agile Teams Working from Home during the Covid-19 Pandemic: A Literature Review on New Advantages and Challenges</a><br /><em>Necmettin Ozkan, Oya Erdil and Mehmet Şahin Gök</em></li>
//      <li><a href='https://youtu.be/BLRPJS77Aq4'>Effort Estimation in Agile Software Development: A Exploratory Study of Practitioners’ Perspective</a><br /><em>Sandeep Rc, Mary Sánchez-Gordón, Ricardo Colomo-Palacios and Monica Kristiansen</em></li>
//      <li><a href='https://youtu.be/VKmxyvLQm5w'>Project Management issues while using Agile Methodology</a><br /><em>Shariq Aziz Butt, Piñeres Espitia G, Paola Ariza-Colpas and Muhammad Imran Tariq</em></li>
//          </ul>
//        </td></tr>
//        <tr><td className='text-nowrap'>15:40 - 15:50</td><td>Conference closing; <em>Ivan Luković</em>
//      <ul>
//      <li>Papers selected for post-conference publication in <a href="http://www.comsis.org">ComSIS</a> (IF: 1.167) and <a href="https://www.journals.elsevier.com/journal-of-computer-languages">Cola</a> (IF: 1.271)</li>
//      <li>Other opportunities for 2022: <a href="http://www.acs.uns.ac.rs/adbis2022/">MADEISD@ADBIS</a>, <a href="https://www.fedcsis.org/2022/s3e">Track5@FedCSIS</a>, <a href="https://www.fedcsis.org/2022/mdasd">MDASD@FedCSIS</a>, <a href="https://www.fedcsis.org/2022/pers">PeRS@FedCSIS</a>, <a href="http://kes2022.kesinternational.org/cms/userfiles/is25.pdf">IADSDTP@KES</a> </li>		
//      </ul></td></tr>


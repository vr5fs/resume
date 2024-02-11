import './App.css';
import Heading from "./components/heading";
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Activity from './components/activities';
import Certificates from './components/certifications';
import Awards from './components/awards';
import References from './components/references';
import Info from './components/info';

function App() {
  return (
    <div className="App">
      <div className='container mt-3'>
        <div className='Header'>
          <h1>Resume</h1>
        </div>
      <Info/>

      <Heading head="Career Objective"></Heading>
      <p>As a passionate and dedicated software engineering student, 
        I am seeking a challenging internship or entry-level position to apply 
        my theoretical knowledge and hands-on skills in software development. 
        Eager to contribute to innovative projects, I aim to gain practical experience, 
        enhance my problem-solving abilities, and collaborate with a dynamic team of professionals. 
        With a strong foundation in computer science principles and a keen interest in emerging technologies, 
        I am committed to continuous learning and making meaningful contributions to the 
        field of software engineering.</p>

      <Heading head="Education"></Heading>
      <Education/>
      
      <Heading head="Technical Skills"></Heading>
      <Skills skill1='Python' skill2='C Programming' skill3='HTML' skill4='CSS' skill5='MySQL'/>

      <Heading head="Projects"></Heading>
      <Projects project1='CalorieCalc - Python Application on Health Awareness'
                project2='SitiBus - Python Application on RTC Bus routes'
                project3='diaEry - Java Application, an E-journal app'/>

      <Heading head="Extra-curricular Activities"></Heading>
      <Activity activity1='Playing Football'
                activity2='Gaming'
                activity3='Calisthenics'/>

      <Heading head="Certifications"></Heading>
      <Certificates certificate1='Programming Fundamentals by Duke University, Coursera'
                    certificate2='Python Data Representations by Rice University, Coursera'
                    certificate3='Computer Networks and IP by IIT Kharagpur, NPTEL'
                    certificate4='Programming in C by IIT Kanpur, NPTEL'/>

      <Heading head="Awards & Achievements"></Heading>
      <Awards award1='1st in CodeMantra event, Saarang 2K23, MRU'
              award2='Qualified to District level in Kho-Kho sport'
              award3='Qualified State level E-Sports'/>

      <Heading head="References"></Heading>
      <References reference1='https://www.coursera.org/account/accomplishments/certificate/YKEGB7FSSCEB'
                  reference2='https://www.coursera.org/account/accomplishments/certificate/86NS6LYNUDSL'
                  reference3='https://vr5fs.github.io/2211cs010225/'
                  reference4='https://www.linkedin.com/in/vr5fs-420a40255/'/>

      <Heading head="Declaration"></Heading>
      I hereby declare that all the details provided above are true to the best of my knowledge.
      <br/><br/>
      </div>
    </div>
  );
}

export default App;

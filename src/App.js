import './App.css'
import Introduction from './components/Introduction'
import Section from './components/Section'
import { academics } from './data/AcademicData'
import { jobsData } from './data/jobsData'

function App() {
    return (
        <div className="container">
            <Introduction />
            <Section sectionTitle="Studies" data={academics} />
            <Section sectionTitle="Work" data={jobsData} />
        </div>
    )
}

export default App

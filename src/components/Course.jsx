const Course = ({courses}) => {
    return (
        <div>
            <Header course = {courses.name}/>
            <div>
                {courses.parts.map(part =>
                <Content key={part.id} part={part} />)}
            </div>
            <Total parts={courses.parts}/>
        </div>
    )
}
  
const Header = ({course}) => <h3>{course}</h3>

const Content = ({part}) => <Part part= {part}/>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

  
const Total = ({parts}) => {
    const exercisesTotal = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
            <h4>Total of exercises {exercisesTotal}</h4>
        </div>
    )
}

export default Course
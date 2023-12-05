
import Project  from './Project/Project';


const data =[
  {
    title:"project1",
    id: 1
  }  ,
  {
    title:"project2",
    id: 2
  }  ,
  {
    title:"project3",
    id: 3
  },
  {
    title:"project4",
    id: 4
  }

];
function ProjectList() {
  return (
    <>
    <div>
      <Project title={data[0].title} id={data[0].id}/>
      <Project title={data[1].title} id={data[1].id}/>
      <Project title={data[2].title} id={data[2].id}/>
      <Project title={data[3].title} id={data[3].id}/>
    </div>
    </>
  )
}
export default ProjectList
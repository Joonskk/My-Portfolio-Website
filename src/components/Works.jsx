import Work from './Work'

const Works = ({works}) => {
  return (
    <div className="works">
      {works.map((work)=><Work key={work.id} work={work} />)}
    </div>
  )
}

export default Works
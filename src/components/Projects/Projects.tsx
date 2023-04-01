import styles from './Projects.module.scss'
import { projects } from '../../projectsList'
import ProjectItem from '../ProjectsItem/ProjectsItem'

const Projects = () => {
    return (
        <div className={styles.container}>
            {projects.map((project, i) =>
                <ProjectItem
                    project={project}
                    key={i}/>
            )}
        </div>
    )
}

export default Projects

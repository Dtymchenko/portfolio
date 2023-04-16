import styles from './ProjectsItem.module.scss';
import { Link } from 'react-router-dom';
import { IProject } from '../../interface';
interface ProjectsItemProps {
  project: IProject;
}

const ProjectsItem = ({ project }: ProjectsItemProps) => {
  return (
    <Link to={project.URL}>
      <div className={styles.wrapper}>
        <h2>{project.name}</h2>
        <div className={styles.img}>
          <img src={project.imageURL} alt={project.name}></img>{' '}
        </div>
        <span>{project.description}</span>
      </div>
    </Link>
  );
};

export default ProjectsItem;

// @ts-ignore
import { ICourseCategory } from '@types/courses';
import styles from './styles.module.less';

export function CategoryCard({ image, title, description }: ICourseCategory) {
  return (
    <div className={styles.categoryCard}>
      <img className={styles.categoryCard__image} src={image} alt="" />
      <h5 className={styles.categoryCard__title}>{title}</h5>
      <p className={styles.categoryCard__text}>{description}</p>
    </div>
  );
}

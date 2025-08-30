import { useState } from 'react';
// @ts-ignore
import { ICourseCard } from '@types/courses';
import styles from './styles.module.less';

export function CourseCard({
  title,
  image,
  teacherName,
  teacherImage,
  category,
  description,
  time,
  price,
  progress: initialProgress = 0,
}: ICourseCard) {
  const [progress, setProgress] = useState(initialProgress);
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseCard__header}>
        <img className={styles.courseCard__image} src={image} alt="course-card-img" />
      </div>
      <div className={styles.courseCard__body}>
        <div className={styles.courseCard__infoItems}>
          <div className={styles.courseCardInfoItem}>
            <img className={styles.courseCardInfoItem__img} src="/category.svg" alt="" />
            <p className={styles.courseCardInfoItem__text}>{category}</p>
          </div>
          <div className={styles.courseCardInfoItem}>
            <img className={styles.courseCardInfoItem__img} src="/time.svg" alt="" />
            <p className={styles.courseCardInfoItem__text}>{time}</p>
          </div>
        </div>
        <h5 className={styles.courseCard__title}>{title}</h5>
        <p className={styles.courseCard__text}>{description}</p>
        <div className={styles.courseCard__footer}>
          <div className={styles.teacherInfo}>
            <img className={styles.teacherInfo__img} src={teacherImage} alt="" />
            <p className={styles.teacherInfo__title}>{teacherName}</p>
          </div>
          <div className={styles.courseCard__price}>
            <p className={styles.courseCard__withoutDiscount}>${price.withoutDiscount}</p>
            <p className={styles.courseCard__withDiscount}>${price.withDiscount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

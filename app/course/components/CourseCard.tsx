import { useState } from 'react';
// @ts-ignore
import { ICourseCard } from '@types/courses';
import styles from './styles.module.less';

export function CourseCard({
  title,
  image,
  teacherName,
  teacherImage,
  progress: initialProgress = 0,
}: ICourseCard) {
  const [progress, setProgress] = useState(initialProgress);
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseCard__header}>
        <img className={styles.courseCard__image} src={image} alt="course-card-img" />
      </div>
      <div className={styles.courseCard__body}>
        <h5 className={styles.courseCard__title}>{title}</h5>
        <div className={styles.teacherInfo}>
          <img className={styles.teacherInfo__img} src={teacherImage} alt="" />
          <p className={styles.teacherInfo__title}>{teacherName}</p>
        </div>
        <div className={styles.progressWrapper}>
          <input
            type="range"
            min="0"
            disabled
            max="7"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className={styles.progressRange}
            style={{
              background: `linear-gradient(to right, #0070f3 ${(progress / 6) * 100}%, #ddd ${(progress / 6) * 100}%)`,
            }}
          />
          <span className={styles.progressValue}>lesson {progress} of 7</span>
        </div>
      </div>
    </div>
  );
}

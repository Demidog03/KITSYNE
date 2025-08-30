import { Button } from 'antd';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CourseCard } from './CourseCard';
import styles from './styles.module.less';

export function SliderBlock() {
  const courses = [
    {
      title: 'AWS Certified Solutions Architect',
      image: '/images/courses/coursecard1.png',
      teacherName: 'Lina',
      teacherImage: '/images/courses/teacherImage.png',
      progress: 3,
    },
    {
      title: 'React for Beginners',
      image: '/images/courses/coursecard2.png',
      teacherName: 'Maria',
      teacherImage: '/images/courses/teacherImage.png',
      progress: 7,
    },
    {
      title: 'Python for Beginners',
      image: '/images/courses/coursecard3.png',
      teacherName: 'Lena',
      teacherImage: '/images/courses/teacherImage.png',
      progress: 5,
    },
    {
      title: 'React for Beginners',
      image: '/images/courses/coursecard2.png',
      teacherName: 'Maria',
      teacherImage: '/images/courses/teacherImage.png',
      progress: 7,
    },
    {
      title: 'Python for Beginners',
      image: '/images/courses/coursecard3.png',
      teacherName: 'Lena',
      teacherImage: '/images/courses/teacherImage.png',
      progress: 5,
    },
  ];
  return (
    <div className={styles.sliderBlock}>
      <div className={styles.sliderBlock__container}>
        <div className={styles.sliderBlock__header}>
          <h1>Welcome back, ready for your next lesson?</h1>
          <Button type={'link'}>view history</Button>
        </div>
        <div className={styles.sliderBlock__body}>
          <Swiper slidesPerView={3} spaceBetween={50} style={{ width: '100%' }}>
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                {/* @ts-ignore */}
                <CourseCard {...course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

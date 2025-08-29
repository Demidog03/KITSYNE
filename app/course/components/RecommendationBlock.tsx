import { Button } from 'antd';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CourseCard } from '@/components/courseCard/courseCard';
import styles from './styles.module.less';

export function RecommendationBlock() {
  const courses = [
    {
      title: 'AWS Certified Solutions Architect',
      image: '/images/courses/coursecard1.png',
      teacherName: 'Lina',
      teacherImage: '/images/courses/teacherImage.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      progress: 3,
      time: '3 month',
      category: 'Design',
      price: {
        withoutDiscount: 100,
        withDiscount: 80,
      },
    },
    {
      title: 'React for Beginners',
      image: '/images/courses/coursecard2.png',
      teacherName: 'Maria',
      teacherImage: '/images/courses/teacherImage.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      progress: 7,
      time: '3 month',
      category: 'Design',
      price: {
        withoutDiscount: 100,
        withDiscount: 80,
      },
    },
    {
      title: 'Python for Beginners',
      image: '/images/courses/coursecard3.png',
      teacherName: 'Lena',
      teacherImage: '/images/courses/teacherImage.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      progress: 5,
      time: '3 month',
      category: 'Design',
      price: {
        withoutDiscount: 100,
        withDiscount: 80,
      },
    },
    {
      title: 'React for Beginners',
      image: '/images/courses/coursecard2.png',
      teacherName: 'Maria',
      teacherImage: '/images/courses/teacherImage.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      progress: 7,
      time: '3 month',
      category: 'Design',
      price: {
        withoutDiscount: 100,
        withDiscount: 80,
      },
    },
    {
      title: 'Python for Beginners',
      image: '/images/courses/coursecard3.png',
      teacherName: 'Lena',
      teacherImage: '/images/courses/teacherImage.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      progress: 5,
      time: '3 month',
      category: 'Design',
      price: {
        withoutDiscount: 100,
        withDiscount: 80,
      },
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
          <Swiper slidesPerView={4} spaceBetween={50}>
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <CourseCard {...course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

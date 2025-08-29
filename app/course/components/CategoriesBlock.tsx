import { ICourseCategory } from '@types/courses';
import { CategoryCard } from './CategoryCard';
import styles from './styles.module.less';

export function CategoriesBlock() {
  const categories: ICourseCategory[] = [
    {
      image: '/images/courses/category/1.svg',
      title: 'Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      image: '/images/courses/category/2.svg',
      title: 'Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      image: '/images/courses/category/3.svg',
      title: 'Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      image: '/images/courses/category/4.svg',
      title: 'Business',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      image: '/images/courses/category/5.svg',
      title: 'Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      image: '/images/courses/category/6.svg',
      title: 'Photography',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      image: '/images/courses/category/7.svg',
      title: 'Acting',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
    {
      image: '/images/courses/category/4.svg',
      title: 'Business',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    },
  ];
  return (
    <div className={styles.categoriesBlock}>
      <div className={styles.categoriesBlock__container}>
        <h2 className={styles.categoriesBlock__title}>Choice favourite course from top category</h2>
        <div className={styles.categoriesBlock__body}>
          {categories.map((category, index) => (
            <CategoryCard {...category} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

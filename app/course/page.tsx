'use client';

import AppHeader from '@components/app-header/AppHeader';
import { CategoriesBlock } from './components/CategoriesBlock';
import { RecommendationBlock } from './components/RecommendationBlock';
import { SliderBlock } from './components/SliderBlock';
import styles from './styles.module.less';

export default function CoursePage() {
  return (
    <div className={styles.coursePage}>
      <AppHeader />
      <SliderBlock />
      <CategoriesBlock />
      <RecommendationBlock />
    </div>
  );
}

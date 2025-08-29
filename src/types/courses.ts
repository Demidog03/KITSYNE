export interface ICourseCard {
  title: string;
  image: string;
  teacherName: string;
  teacherImage: string;
  description?: string;
  progress?: number;
  category?: string;
  time: string;
  price: {
    withoutDiscount: number;
    withDiscount: number;
  };
}
export interface ICourseCategory {
  title: string;
  image: string;
  description: string;
}

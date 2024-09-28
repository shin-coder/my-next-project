// import type { Category } from '@/app/_libs/microcms';
import styles from './inex.module.css';

// type Props = {
//   category: Category;
// };
type Props = {
  category: string;
};

export default function Category({ category }: Props) {
  // return <span className={styles.tag}>{category.name}</span>;
  return <span className={styles.tag}>{category}</span>;
}

import Image from 'next/image';
import styles from './index.module.css';

import { News } from '@/app/_libs/microcms';
import Category from '../Category';
import Date from '../Date';

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return;
    <p>記事がありません</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        // 繰り返されるli要素に対して配列のどのアイテムを参照するため、一意のkeyを設定する → ここではid属性を付与している
        <li key={article.id} className={styles.list}>
          <div className={styles.link}>
            <Image
              className={styles.image}
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
            />
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                {/* <Category category={article.category} /> */}
                <Category category={article.category.name} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}

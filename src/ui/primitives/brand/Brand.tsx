import clsx from "clsx";
import styles from "./Brand.module.css";

type BrandProps = {
  as?: `h${1 | 2 | 3 | 4 | 5 | 6}` | "p";
  sz?: "medium" | "small";
};

function Brand({ as: Heading = "h1", sz }: BrandProps) {
  const cls = clsx(styles.brand, sz && styles[sz]);

  return <Heading className={cls}>The Codeminer42</Heading>;
}

export { Brand };

import Link from "next/link";
import Image from "next/image";

import { Box, Badge } from "@chakra-ui/react";

import styles from "../../styles/article.module.css";

export default function Post({ post }) {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Modern home in city center in the heart of historic Los Angeles",
  };
  return (
    <a href={post.slug}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}

        <Box p="4">
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {post.date}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {post.title}
          </Box>

          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              {post.description}
            </Box>
          </Box>
        </Box>
      </Box>
    </a>
  );
}

{
  /* <article className={styles.article}>
          <div className={styles.article__content}>
            <span>{post.date}</span>
            <h2 className={styles.article__title}>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        </article> */
}

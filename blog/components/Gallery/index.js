import { Grid } from "@chakra-ui/react";
import Post from "../Post";

export default function Gallery({ articles }) {
  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={5}>
      {articles.map((article) => (
        <Post key={article.slug} post={article} />
      ))}
    </Grid>
  );
}

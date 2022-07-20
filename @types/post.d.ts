type PostSummary = {
  id: string;
  title: string;
  date: string;
};

type Post = PostSummary & {
  contentHtml: string;
};

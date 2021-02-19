interface GeneralPost {
  id: string;
  title: string;
  slug: string;
  timestamp: number;
}

interface Post extends GeneralPost {
  content: string;
}

export type { Post, GeneralPost };

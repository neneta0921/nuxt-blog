export interface LoadedPosts {
  id: string;
  title: string;
  previewText: string;
  thumbnail: string;
}

export interface PostData {
  author: string;
  title: string;
  content: string;
  previewText: string;
  thumbnail: string;
  updatedDate?: object;
}

import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Oz's blog",
  description: "A blog about code and nonsense",
};

export default function Page() {
  return (
    <section className="grow">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Posts</h1>
      <BlogPosts />
    </section>
  );
}

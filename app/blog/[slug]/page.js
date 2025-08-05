import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}

export default async function BlogDetails({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{blog.title}</h1>
      <p>
        <strong>Published at:</strong> {new Date(blog.published_at).toLocaleDateString()}
      </p>
      <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
}

import blogs from "@/app/data/blogs";

const SingleBlog = ({ params }) => {
  const { id } = params;
  const blog = blogs.find((blog) => blog.id === id);
  const { title, description } = blog;

  return (
    <div>
      <h1 className="text-3xl">{title}</h1>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default SingleBlog;

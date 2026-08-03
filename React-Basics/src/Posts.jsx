import "./App.css";

function Posts() {
  const posts = [
    {
      id: 1,
      title: "Learning React",
      body: "React makes building user interfaces easier and faster."
    },
    {
      id: 2,
      title: "JavaScript Tips",
      body: "Practice ES6 features like destructuring and arrow functions."
    },
    {
      id: 3,
      title: "Frontend Development",
      body: "HTML, CSS, and JavaScript are the foundation of web development."
    },
    {
      id: 4,
      title: "Material UI",
      body: "Material UI provides ready-to-use React components."
    },
    {
      id: 5,
      title: "React Components",
      body: "Components help you reuse code and keep your app organized."
    }
  ];

  const myPosts = posts.map((post) => {
    return (
      <div className="post" key={post.id}>
        <h1>{post.title}</h1>
        <hr />
        <p>{post.body}</p>
      </div>
    );
  });

  return <>{myPosts}</>;
}

export default Posts;
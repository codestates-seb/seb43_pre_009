const PostList = () => {
  const posts = [
    { id: 1, title: '첫 번째 글' },
    { id: 2, title: '두 번째 글' },
    { id: 3, title: '세 번째 글' },
  ];
  return (
    <div>
      <div>Top Question</div>
      <button>Ask Question</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

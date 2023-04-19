const List = () => {
  const posts = [
    { id: 1, title: '첫 번째 글' },
    { id: 2, title: '두 번째 글' },
    { id: 3, title: '세 번째 글' },
  ];

  return (
    <>
      <button>
        <a href="/question">Ask Question</a>
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;

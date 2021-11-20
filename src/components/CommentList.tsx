import { useListCommentsQuery } from "../api/queries/commentQueries";

const CommentList = () => {
  const { data, loading } = useListCommentsQuery(location.pathname);
  if (loading) return <p>Loading</p>;
  const comments = data?.listComments;
  return (
    <div>
      {comments ? <pre>{JSON.stringify(comments, null, 2)}</pre> : null}
    </div>
  );
};

export default CommentList;

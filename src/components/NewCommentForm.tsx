import { useForm } from "react-hook-form";
import { useCreateCommentMutation } from "../api/mutations/commentMutations";
import { CommentInput } from "../interfaces/comments";

const NewCommentForm = () => {
  const { register, handleSubmit } = useForm<CommentInput>();
  const url = location.pathname;
  const [mutate, { loading: mutating }] = useCreateCommentMutation();

  const onSubmit = (partial: CommentInput) => {
    const input = { ...partial, url };
    mutate({ variables: { input } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="new_comment_body">So, what do you think?</label>
        <textarea id="new_comment_body" {...register("body")}></textarea>
      </div>
      <div>
        <label htmlFor="new_comment_signature">Signature:</label>
        <input
          id="new_comment_signature"
          type="text"
          {...register("signature", { required: true })}
        />
      </div>
      <input
        type="submit"
        value="Create comment"
        disabled={mutating}
        style={{ width: "100%" }}
      />
    </form>
  );
};

export default NewCommentForm;

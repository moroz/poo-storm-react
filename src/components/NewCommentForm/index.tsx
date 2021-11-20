import { useForm } from "react-hook-form";
import { useCreateCommentMutation } from "../../api/mutations/commentMutations";
import { CommentInput } from "../../interfaces/comments";
import InputField from "../InputField";
import classes from "./NewCommentForm.module.sass";

const NewCommentForm = () => {
  const { register, handleSubmit } = useForm<CommentInput>();
  const url = location.pathname;
  const [mutate, { loading: mutating }] = useCreateCommentMutation();

  const onSubmit = (partial: CommentInput) => {
    const input = { ...partial, url };
    mutate({ variables: { input } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <h3>Leave a Reply</h3>
      <p>
        Your email address will not be published. Required fields are marked
        with an asterisk (*).
      </p>
      <div>
        <label htmlFor="new_comment_body" className={classes.required}>
          Comment
        </label>
        <textarea id="new_comment_body" {...register("body")}></textarea>
      </div>
      <div className={classes.fieldGroup}>
        <InputField
          name="signature"
          id="new_comment_signature"
          label="Your name:"
          register={register}
          required
        />
        <InputField
          name="email"
          id="new_comment_email"
          label="Email:"
          register={register}
          required
        />
        <InputField
          name="website"
          id="new_comment_website"
          label="Website:"
          register={register}
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

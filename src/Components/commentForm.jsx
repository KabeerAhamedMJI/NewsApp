import { useForm } from "react-hook-form";
import axios from 'axios';

export default function CommentForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const payload = {
        ...data,
        article: props.articleId,
        user: props.userName,
      };
      const response = await axios.post(`http://localhost:3000/Comments`, payload, { withCredentials: true });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <section>
      <div className="pl-2">
        <h2 className="text-2xl font-bold text-[#3778c2] pb-3">Leave a Comment</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea 
            rows={10} 
            name="description" 
            id="description" 
            {...register("description", { required: true })} 
            className="w-full border border-gray-300 rounded" 
          />
          {errors.description && <span>This field is required</span>}
          <input type="submit" className="p-2 mt-4 bg-[#3778c2] text-white rounded" />
        </form>
      </div>
    </section>
  );
}

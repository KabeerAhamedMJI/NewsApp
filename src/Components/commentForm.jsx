import { useForm } from "react-hook-form";

export default function CommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section >
      <div className=" pl-2">
        <h2 className="text-2xl font-bold text-[#3778c2] pb-3">Leave a Comment</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea rows={10} {...register("example")} className="w-full border border-gray-300 rounded " />
          <input type="submit" className="p-2 mt-4 bg-[#3778c2] text-white rounded" />
        </form>
      </div>
    </section>
  );
}

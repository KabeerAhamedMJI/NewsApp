import React from 'react';

function CommentCard(props) {
    const { comment } = props.comment
    return (
        <section>
            <div className='p-3'>
                <h2 className="text-2xl font-bold text-[#3778c2] pb-3">Comments</h2>
                <div className="space-y-4">
                    <article className='p-4 border-solid border-1 border-[#3778c2] rounded'>
                        <span className="text-1xl font-medium text-slate-500">- {comment.user}</span>
                        <p className='pt-2'>{comment.description}</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default CommentCard;

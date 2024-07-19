import React from 'react'

function CommentCard() {
    return (
        <section >
            <div className='p-3'>
                <h2 className="text-2xl font-bold text-[#3778c2] pb-3">Comments</h2>
                <div className="space-y-4">
                <article className='p-4 border-solid border-1 border-[#3778c2] rounded '>
                <span className="text-1xl font-medium text-slate-500">- Kabeer Ahamed</span>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a aliquid minima perspiciatis quod, magni necessitatibus harum quisquam odio explicabo libero ea corporis. Iusto omnis placeat aperiam fugiat aliquid pariatur.</p>
                </article>
                <article className='p-4 border-solid border-1 border-[#3778c2] rounded '>
                <span className="text-1xl font-medium text-slate-500">- Kabeer Ahamed</span>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a aliquid minima perspiciatis quod, magni necessitatibus harum quisquam odio explicabo libero ea corporis. Iusto omnis placeat aperiam fugiat aliquid pariatur.</p>
                </article>
                <article className='p-4 border-solid border-1 border-[#3778c2] rounded '>
                <span className="text-1xl font-medium text-slate-500">- Kabeer Ahamed</span>
                    <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a aliquid minima perspiciatis quod, magni necessitatibus harum quisquam odio explicabo libero ea corporis. Iusto omnis placeat aperiam fugiat aliquid pariatur.</p>
                </article>
                </div>
            </div>
        </section>
    )
}

export default CommentCard

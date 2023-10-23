import React from 'react'

type Props = {}

function Blog({ }: Props) {
    return (
        <>
            <div className='container'>
                {/* Picture and introdution   */}
                <div className='font-bold text-3xl mt-12 '>
                    <h1 >Hi there, I'm SUON PSIEY</h1>
                </div>
                <div className='flex    '>
                    <div className=''>

                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque quidem molestiae. Ducimus possimus dolor optio vel laborum cum non delectus commodi tempore! Recusandae maxime quisquam tenetur! Tempora, praesentium at?
                        </div>
                    </div>
                    <img src='/assets/logo.png' className=' w-80 h-80' alt='logo'/>
                </div>
            </div>
        </>
    )
}

export default Blog
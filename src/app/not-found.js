'use client'

const Custom404 = () => {
    const handleonBack =()=>{
        window.history.back();
    }
    return (
        <div className='flex  flex-col items-center mt-40 min-h-screen space-y-3 mx-5'>
            <img src='/404.svg' alt="Logo" width={400} height={300}></img>
            <h1>Page Not Found</h1>
            <p className='text-center'>Sorry, we couldn't find the page you're looking for.</p>
            <div onClick={handleonBack} className="bg-violet-600 text-white cursor-pointer p-2 rounded">
                Go back
            </div>

        </div>
    );
};

export default Custom404;

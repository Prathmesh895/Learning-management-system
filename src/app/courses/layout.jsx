import Sidebar from '@/app/courses/sidebar/page'

export default function Courses({children}){

    return(
        <> 
         <div>{children}</div> 
        <div><Sidebar/></div>    
        </>
    )
}
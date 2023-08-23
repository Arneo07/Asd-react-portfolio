import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6' 
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
export const SocialLinks = () => 
{
     //rounded to make coner round and tr= top-row and md=(midum)6px
    const Mylinks =[
        {
            id:1,
            child:(
                 <> 
                    LinkedIn <FaLinkedin size={35}/>  
                 </>
            ),
            href:'https://www.linkedin.com/in/abhishek-dhotri-535940264/',
            style:'rounded-tr-md'                           
        },
        {
            id:2,
            child:(
                 <> 
                    GitHub <FaGithub size={35}/>  
                 </>
            ),
            href:'https://GitHub.com',
            style:'hover:bg-gradient-to-r from-black to-gray-800'
                                     
        },
        {
            id:3,
            child:(
                 <> 
                    Mail me <HiOutlineMail size={35}/>  
                 </>
            ),
            href:'mailto:abhishekdhotri4321@gmail.com',
            style:'hover:bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400'
                                  
        },
        {
            id:4,
            child:(
                 <> 
                    Resume <BsFillPersonLinesFill size={35}/>  
                 </>
            ),
            href:'/Resume.docx',
            style:'rounded-br-md hover:bg-purple-700',
            download:true,                   
        },
    ]
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
        {
         Mylinks.map(({id,child,href,style,download})=>
         (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-100px] hover:ml-[-8px] hover:rounded-md duration-300 hover:bg-blue-500  " + style} >
            <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
              {child}
            </a>
           </li>
        ))
        }
        
        </ul>
    </div>
  )
}


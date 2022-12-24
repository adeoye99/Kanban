import React from 'react'
import { Card } from '../Components/Card'

const todoData = [
  {
    header: "gdshvbnbnmvmncvbvbnc",
    paragraph : "nfsdbmfhmmndn,bfcbvnvn"
 },
 {
   header: "gdshvbnbnmvmncvbvbnc",
   paragraph : "nfsdbmfhmmndn,bfcbvnvn"
 },
 {
  header: "gdshvbnbnmvmncvbvbnc",
  paragraph : "nfsdbmfhmmndn,bfcbvnvn"
},

]

const doingData = [
  {
    header: "gdshvbnbnmvmncvbvbnc",
    paragraph : "nfsdbmfhmmndn,bfcbvnvn"
 },
 {
   header: "gdshvbnbnmvmncvbvbnc",
   paragraph : "nfsdbmfhmmndn,bfcbvnvn"
 },
 {
  header: "gdshvbnbnmvmncvbvbnc",
  paragraph : "nfsdbmfhmmndn,bfcbvnvn"
},
{
  header: "gdshvbnbnmvmncvbvbnc",
  paragraph : "nfsdbmfhmmndn,bfcbvnvn"
}

]

const doneData = [
  {
    header: "gdshvbnbnmvmncvbvbnc",
    paragraph : "nfsdbmfhmmndn,bfcbvnvn"
 },
 {
   header: "gdshvbnbnmvmncvbvbnc",
   paragraph : "nfsdbmfhmmndn,bfcbvnvn"
 },
 {
  header: "gdshvbnbnmvmncvbvbnc",
  paragraph : "nfsdbmfhmmndn,bfcbvnvn"
},
{
  header: "gdshvbnbnmvmncvbvbnc",
  paragraph : "nfsdbmfhmmndn,bfcbvnvn"
},
{
  header: "gdshvbnbnmvmncvbvbnc",
  paragraph : "nfsdbmfhmmndn,bfcbvnvn"
},

]
export const Platformlaunch = () => {
  return (
    <div>
    <div className='grid grid-cols-4 h-full pt-4'>
    
    <div className='ml-2'>
       <h1 className='text-gray-500'>TODO LIST</h1>
       {
        todoData.map((item ) => {
             return (
              <Card
                header={item.header}
                paragraph = {item.paragraph}
              />

             )  

         })


       }
    </div>
    <div>
      <h1 className='text-gray-500'>DOING LIST</h1>
      {
        doingData.map((item ) => {
            return (
             <Card
               header={item.header}
               paragraph = {item.paragraph}
             />

            )  

        })

      }
    </div>
    <div>
        <h1 className='text-gray-500'>DONE LIST</h1>

        {
          doneData.map((item ) => {
              return (
               <Card
                 header={item.header}
                 paragraph = {item.paragraph}
               />
  
              )  
  
          })
  
        }

    </div>
         Marketinglaunch
    
     </div> 
    </div>
  )
}

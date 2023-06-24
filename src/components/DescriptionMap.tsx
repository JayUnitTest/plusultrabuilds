import React from 'react'

export default function DescriptionMap (props) {
const { list , type } = props 

const contentDisplay = {
    'links': (obj) =><a className='text-[#388B83] cursor-pointer' target='_blank' href={obj.link}>{obj.content}</a>,
    'skills': (obj) =><p>{obj.content.join(', ')}</p>,
    'hobbies':(obj) => <p>{obj.content}</p>,
}
  return (
    <div className='flex flex-col gap-3 ml-5 mr-5 '>
          {list.map((listItem, listIndex) => {
        return (
          <div className='relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm' key={listIndex}>
            <div className='bg-[#A9C87C] h-[2px] w-full  duration-300 group-hover:translate-x-full absolute right-full bottom-0'></div>
            <p><b>{listItem.name}</b></p>
            {contentDisplay[type](listItem)}
          </div>
        )
      })}
    </div>
  )
}

import React from 'react'

const Languages = () => {
  return (
    <div className='flex gap-x-3 md:gap-x-4 gap-y-3 flex-wrap text-zinc-400 m-auto xl:m-0 justify-center xl:justify-start w-11/12'>
      {/* Frontend Technologies */}
      <div className='flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 px-3 py-2 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all'>
        <i className='fab fa-html5 text-orange-500 text-xl' title='HTML5'></i>
        <span className='font-medium hidden md:inline text-orange-400'>HTML5</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-3 py-2 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all'>
        <i className='fab fa-css3-alt text-blue-500 text-xl' title='CSS3'></i>
        <span className='font-medium hidden md:inline text-blue-400'>CSS3</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 px-3 py-2 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all'>
        <i className='fab fa-js-square text-yellow-500 text-xl' title='JavaScript'></i>
        <span className='font-medium hidden md:inline text-yellow-400'>JavaScript</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-blue-700/10 px-3 py-2 rounded-lg border border-blue-600/20 hover:border-blue-600/40 transition-all'>
        <i className='fas fa-code text-blue-600 text-xl' title='TypeScript'></i>
        <span className='font-medium hidden md:inline text-blue-400'>TypeScript</span>
      </div>
      
      <div className='flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-3 py-2 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all'>
        <i className='fab fa-react text-cyan-500 text-xl' title='React'></i>
        <span className='font-medium hidden md:inline text-cyan-400'>React</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-2 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all'>
        <i className='fas fa-layer-group text-purple-500 text-xl' title='Redux'></i>
        <span className='font-medium hidden md:inline text-purple-400'>Redux</span>
      </div>

      <div className='h-0 basis-full block xs:hidden md:block'></div>

      {/* Backend Technologies */}
      <div className='flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-yellow-500/10 px-3 py-2 rounded-lg border border-blue-600/20 hover:border-blue-600/40 transition-all'>
        <i className='fab fa-python text-blue-600 text-xl' title='Python'></i>
        <span className='font-medium hidden md:inline text-blue-400'>Python</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-green-600/10 to-green-700/10 px-3 py-2 rounded-lg border border-green-600/20 hover:border-green-600/40 transition-all'>
        <i className='fas fa-leaf text-green-600 text-xl' title='Django'></i>
        <span className='font-medium hidden md:inline text-green-400'>Django</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-green-600/10 px-3 py-2 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all'>
        <i className='fab fa-node-js text-green-500 text-xl' title='Node.js'></i>
        <span className='font-medium hidden md:inline text-green-400'>Node.js</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-gray-600/10 to-gray-700/10 px-3 py-2 rounded-lg border border-gray-600/20 hover:border-gray-600/40 transition-all'>
        <i className='fas fa-server text-gray-600 text-xl' title='Express'></i>
        <span className='font-medium hidden md:inline text-gray-400'>Express</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-green-600/10 px-3 py-2 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all'>
        <i className='fas fa-database text-green-500 text-xl' title='MongoDB'></i>
        <span className='font-medium hidden md:inline text-green-400'>MongoDB</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 px-3 py-2 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all'>
        <i className='fas fa-database text-blue-500 text-xl' title='PostgreSQL'></i>
        <span className='font-medium hidden md:inline text-blue-400'>PostgreSQL</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-red-600/10 to-red-700/10 px-3 py-2 rounded-lg border border-red-600/20 hover:border-red-600/40 transition-all'>
        <i className='fas fa-gem text-red-600 text-xl' title='Ruby on Rails'></i>
        <span className='font-medium hidden md:inline text-red-400'>Rails</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-gray-500/10 to-gray-600/10 px-3 py-2 rounded-lg border border-gray-500/20 hover:border-gray-500/40 transition-all'>
        <i className='fas fa-flask text-gray-500 text-xl' title='Flask'></i>
        <span className='font-medium hidden md:inline text-gray-400'>Flask</span>
      </div>

      <div className='h-0 basis-full block xs:hidden md:block'></div>

      {/* DevOps & Tools */}
      <div className='flex items-center gap-2 bg-gradient-to-r from-blue-400/10 to-blue-500/10 px-3 py-2 rounded-lg border border-blue-400/20 hover:border-blue-400/40 transition-all'>
        <i className='fab fa-docker text-blue-400 text-xl' title='Docker'></i>
        <span className='font-medium hidden md:inline text-blue-400'>Docker</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 px-3 py-2 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all'>
        <i className='fas fa-rocket text-orange-500 text-xl' title='Postman'></i>
        <span className='font-medium hidden md:inline text-orange-400'>Postman</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-red-600/10 px-3 py-2 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all'>
        <i className='fab fa-git-alt text-red-500 text-xl' title='Git'></i>
        <span className='font-medium hidden md:inline text-red-400'>Git</span>
      </div>
      <div className='flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-3 py-2 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all'>
        <i className='fas fa-mobile-alt text-blue-500 text-xl' title='Flutter'></i>
        <span className='font-medium hidden md:inline text-blue-400'>Flutter</span>
      </div>
      
      
      
    </div>
  )
}

export default Languages
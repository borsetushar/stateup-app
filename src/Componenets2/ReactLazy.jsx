import React,{Suspense} from 'react'
//import Lazy from './Lazy'
const Lazy=React.lazy(()=>import('./Lazy'))
function ReactLazy() {
  return (
    <div>
        <Suspense fallback={<div>...Loading</div>}>
            <Lazy/>
        </Suspense>
    </div>
  )
}

export default ReactLazy
import react from 'react'
export default function Queue({queue}){
    return <div>
        {
            queue.map(d=>{
                return <div class="btn1">
                    {/* <button class='btn'></button> */}
                    <span>{d}</span>
                </div>
            })
        }
    </div>
}
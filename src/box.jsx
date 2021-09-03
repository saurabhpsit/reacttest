import react from 'react'
export default function box({boxArr}){
    return <div>
        {
            boxArr.map(d=>{
                return <div class="btn">
                    {/* <button class='btn'></button> */}
                    <span>{d.label}</span>
                    <span>{d.position}</span>
                </div>
            })
        }
    </div>
}
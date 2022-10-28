import { useEffect } from "react"

const UseTitle = title => {
    useEffect(()=>{
        document.title = `${title} - dragon news`;
    },[title])
}

export default UseTitle;
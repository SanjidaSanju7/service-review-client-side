import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Marie Daxon Photograpy`

    }, [title])
}

export default useTitle;
import {useRouter} from "next/router";

export default function Thread() {
    const router = useRouter()
    const {boardkey, thread} = router.query
    return (
        <div>
            <p>게시판: {boardkey}</p>
            <p>주제글: {thread}</p>
        </div>
    )
}

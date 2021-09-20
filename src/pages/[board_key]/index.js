import {useRouter} from "next/router";
import CreateThread from "../../components/CreateThread";
import Thread from "../../components/Thread";
import {getBoardByKey} from "../../api/board";
import {getThreads} from "../../api/thread";
import * as R from 'ramda'
import {getResponseBySequence} from "../../api/response";

export default function Board({board, threads}) {
    const router = useRouter()

    return (
        <div>
            <p>{board.name}</p>
            <div>
                {threads.map((thread) => (
                    <Thread key={thread.id} thread={thread}/>
                ))}
            </div>
            <CreateThread board={board}/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const board = await getBoardByKey(context.params.board_key)
    const prepared = await getThreads(board.id)
    const threads = R.forEach(async (t) => {
        t.responses = []
        t.responses.push(await getResponseBySequence(t.id, 0))
        return t
    }, prepared)

    return {
        props: {
            board,
            threads
        }
    }
}
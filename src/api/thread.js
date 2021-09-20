import * as R from 'ramda'
import {formatDate, formatThreadDate} from "../utils/datetime";

export async function getThreads(boardID) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CHAMCHI_HOST}/api/v1/thread?board_id=${boardID}&limit=10`)
    const data = await res.json()

    return R.map(formatThreadDate, data.data.threads)
}

export async function getThread(threadID) {
    const res = await fetch(process.env.NEXT_PUBLIC_CHAMCHI_HOST + '/api/v1/thread/' + threadID)
    const data = await res.json()

    return formatThreadDate(data.data.thread)
}

export async function registerThread(boardID, title, password) {
    const res = await fetch(
        process.env.NEXT_PUBLIC_CHAMCHI_HOST + `/api/v1/thread`,
        {
            body: JSON.stringify({
                board_id: boardID,
                title: title,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }
    )
    const data = await res.json()
    return data.data.thread
}

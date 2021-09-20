export async function getBoards() {
    const res = await fetch(process.env.NEXT_PUBLIC_CHAMCHI_HOST + `/api/v1/board`)
    const data = await res.json()
    return data.data.boards
}

export async function getBoardByKey(key) {
    const res = await fetch(process.env.NEXT_PUBLIC_CHAMCHI_HOST + '/api/v1/board?key=' + key)
    const data = await res.json()
    return data.data.boards[0]
}

export async function getResponseBySequence(threadID, sequence) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CHAMCHI_HOST}/api/v1/response?thread_id=${threadID}&sequence=${sequence}`)
    const data = await res.json()

    return data.data.responses[0]
}
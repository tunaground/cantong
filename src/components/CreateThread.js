import {registerThread} from "../api/thread";

export default function CreateThread({board}) {
    async function submitHandler(e) {
        e.preventDefault()

        const registeredThread = await registerThread(board.id, e.target.title.value, e.target.password.value)
        const threadID = registeredThread.id
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_CHAMCHI_HOST}/api/v1/response`,
            {
                body: JSON.stringify({
                    thread_id: threadID,
                    username: e.target.username.value,
                    content: e.target.content.value,
                    attachment: "",
                    youtube: ""

                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
        const confirm = await fetch(
            `${process.env.NEXT_PUBLIC_CHAMCHI_HOST}/api/v1/thread?id=${threadID}&confirm=true`,
            {
                method: 'PUT'
            }
        )
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="title"/>
                <input type="password" name="password"/>
                <input type="text" name="username"/>
                <input type="text" name="console"/>
                <textarea name="content"/>
                <input type="text" name="youtube"/>
                <input type="file" name="attachment"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

import {getBoards} from "../api/board";

export default function Home({boards}) {
    return (
        <div>
            게시판 목록
            <ul>
                {boards.map((board) => (
                    <li key={board.key}>
                        <a href={"/" + board.key}>
                            {board.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export async function getServerSideProps(context) {
    const boards = await getBoards()

    return {
        props: {
            boards
        }
    }
}
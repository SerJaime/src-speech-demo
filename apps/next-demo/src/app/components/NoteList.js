
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getData = async () => {
  // 模拟慢请求
  await sleep(3000);
  const response = await fetch('http://localhost:3000/api/notes');
  const notes = await response.json();
  return notes;
}

export default async function NoteList() {
  const notes = await getData();

  return (
    <div className="notes-list">
      <strong className="sc">Server Component With Suspense</strong>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

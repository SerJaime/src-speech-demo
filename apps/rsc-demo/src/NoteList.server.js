import {fetch} from 'react-fetch';

const getData = () => {
  // 模拟慢请求
  fetch('http://localhost:4000/sleep/3000');
  const notes = fetch('http://localhost:4000/notes').json();
  return notes;
}

export default function NoteList({searchText}) {
  const notes = getData();

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

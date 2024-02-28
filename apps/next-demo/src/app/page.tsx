import { Suspense } from 'react';

import Counter from './components/Counter';
import Header from './/components/Header';
import NoteList from './components/NoteList';

export default function App() {
  return (
    <div className="main">
      hello world
      {/* Server Component */}
      <Header />
      {/* Client Component */}
      <Counter defaultValue={5} />
      <Suspense fallback={<div>loading...</div>}>
        <NoteList />
      </Suspense>
    </div>
  );
}

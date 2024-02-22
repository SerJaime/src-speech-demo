/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {Suspense} from 'react';

import Counter from './Counter.client';
import Header from './Header.server';
import NoteList from './NoteList.server';

// export default function App() {
//   return (
//     <div className="main">
//       hello world
//       {/* Server Component */}
//       <Header />
//       {/* Client Component */}
//       <Counter defaultValue={5} />
//     </div>
//   );
// }

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

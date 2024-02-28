export async function GET(request: Request) {
  return Response.json([
    {
      id: 0,
      title: 'Meeting Notes',
      body: 'This is an example note. It contains **Markdown**!',
    },
    {
      id: 1,
      title: 'Make a thing',
      body: `It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to React's website!](https://www.reactjs.org).`,
    },
    {
      id: 2,
      title:
        'A note with a very long title because sometimes you need more words',
      body: `You can write all kinds of [amazing](https://en.wikipedia.org/wiki/The_Amazing)
  notes in this app! These note live on the server in the \`notes\` folder.
      
  ![This app is powered by React](https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/React_Native_Logo.png/800px-React_Native_Logo.png)`,
    },
    {
      id: 3,
      title: 'I wrote this note today',
      body: 'It was an excellent note.',
    },
  ])
}
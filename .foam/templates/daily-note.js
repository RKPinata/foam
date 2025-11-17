// .foam/templates/daily-note.js

async function createNote({ trigger, foam, resolver, foamDate }) {
  const today = dayjs();
  const formattedDay = today.format("YYYY-MM-DD");
  const weekday = today.format("dddd");
  const filepath = `/daily-notes/${formattedDay}.md`;

  // Otherwise, create a new one
  const content = `
# ${weekday} - ${formattedDay}

## Today

- [ ] 

## Backlog
`;

  return { content, filepath };
}

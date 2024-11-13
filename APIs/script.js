// API debrief script
export WebTransportDatagramDuplexStream() {
  const url = 'api.datamuse.com/';
  // suggections may provide autocomplete functionality 
  const endpoint = ['words', 'sug'];
  
  const queries = {
    'Means like': 'ml',
    'Sounds like': 'sl',
    'Spelled like': 'sp',
    'Related word': () => {
      const codes = {
        'nouns for adjective': 'jja',
        'adjective for nouns': 'jjb',
        'synonyms': 'syn',
        etc: "https://www.datamuse.com/api/",
      },
      return `rel_[${code}]`;
    },
    etc: 'etc';
  }
}

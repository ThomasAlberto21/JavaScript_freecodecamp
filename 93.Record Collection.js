/* 

    TODO : Your function must always return the entire records object.
    TODO : If value is an empty string, delete the given prop property from the album.
    TODO : If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
    TODO : If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.

*/

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === '') {
    delete records[id][prop];
  } else if (prop !== 'tracks' && value !== '') {
    records[id][prop] = value;
  } else if (prop === 'tracks' && value !== '') {
    if (!records[id].hasOwnProperty('tracks')) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }

  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

//console.log(recordCollection[2548].tracks.length-1)

//updateRecords(recordCollection, 5439, "artist", "ABBA")

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")

function updateRecords(records,id,prop,value){
  
  const tracks = records[id].tracks
  console.log(tracks)

 if(records[id].prop[value] === ""){
   delete records[id].prop[value]
   return records

 }else if(prop !== tracks){

   records[id].prop[value].push()

   return records

 }else if(prop  == tracks && tracks !== ){

 }return records
}

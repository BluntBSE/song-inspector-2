
export interface artist {
    href: string,
    id: string,
    name: string,
    type: "artist",
    uri: string,
  }
  
  export interface track {
    album: Object,
    artists: Array<artist>,
    disc_number: BigInteger,
    duration_ms: BigInteger,
    explicit: true,
    external_ids: Object,
    external_urls: Object,
    href: string,
    id: string,
    is_local: Boolean
    is_playable: Boolean,
    name: string,
    popularity: BigInteger,
    preview_url: String,
    track_number: BigInteger,
    type: "track"
    uri: string,
  }
  
 export interface tracks {
    href: string,
    items: Array<track>,
    limit: BigInteger,
    next: string,
    offset: BigInteger,
    previous: string,
    total: BigInteger,
  }
  
  export interface songFeatures{
    danceability: number,
    energy: number,
    key: number,
    loudness: number,
    mode: number,
    speechiness: number,
    acousticness: number,
    instrumentalness: number,
    liveness: number,
    valence: number,
    tempo: number,
    type: "audio_features",
    id: string,
    uri: string,
  }
  
  
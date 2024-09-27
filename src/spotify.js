export const getAccessToken = async () => {
  const clientId = 'f975adb8fada4e4b9787c25654230f45';
  const clientSecret = '81c5146e3138466e86540212706558f0';

  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
    },
    body: 'grant_type=client_credentials',
  });

  const data = await result.json();
  return data.access_token;
};

export const fetchSpotifyData = async (accessToken) => {
  const result = await fetch('https://api.spotify.com/v1/browse/new-releases', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  });

  const data = await result.json();
  return data.albums.items; // Adjust depending on the endpoint used
};

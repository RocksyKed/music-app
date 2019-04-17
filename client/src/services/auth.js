// TODO: rename service to deezer, as auth.js is so general meaning
import { DEEZER_AUTH_URI, API_REDIRECT_URL, DEEZER_APP_ID } from '../config';

//ToDo: add real user Id
export const deezerAuthPath = () =>
  `${DEEZER_AUTH_URI}?app_id=${DEEZER_APP_ID}`+
  `&redirect_uri=${API_REDIRECT_URL}/users/deezer-confirm`
  +`&perms=basic_access,email&state=5c93d3401b32dc6081365ce`;
// src/api/services.ts
import { useApi } from '../hooks/useApi';
import { Song, ApiResponse } from './types';

export const useSongsApi = () => {
  const { isLoading: isSongLoading, error: songError, makeRequest: makeSongRequest } = useApi<Song>();
  const { isLoading: isPlaylistLoading, error: playlistError, makeRequest: makePlaylistRequest } = useApi<Song[]>();

  const fetchSong = async (id: string): Promise<ApiResponse<Song>> => {
    return await makeSongRequest(`http://localhost:5173/api/v1/songs/${id}`);
  };

  const fetchPlaylist = async (): Promise<ApiResponse<Song[]>> => {
    return await makePlaylistRequest('http://localhost:5173/api/v1/playlist');
  };

  return { 
    fetchSong, 
    fetchPlaylist, 
    isLoading: isSongLoading || isPlaylistLoading, 
    error: songError || playlistError 
  };
};
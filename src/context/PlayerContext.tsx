import {createContext} from "react";
type Episode ={
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerContextData  = {
    episodeList: Episode[];
    currentEpisode: number;
    isPlaying: boolean;
    play: (episode: Episode) => void;
    setPlay: (state: boolean) => void;
}
export const PlayerContext = createContext({} as PlayerContextData);
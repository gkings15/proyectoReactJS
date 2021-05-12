import React, { createContext, useState, useEffect } from 'react';
import { getPlayerTeam, getTeamId } from '../constants';

export const DetailContext = createContext();

const DetailContextProvider = ({ children }) => {
    const teamid = window.location.pathname.split("/")[2];
    const [doneFetch, setDoneFetch] = useState(false);
    const [team, setTeam] = useState([]);
    const [doneFetchPlayers, setDoneFetchPlayers] = useState(false);
    const [players, setPlayers] = useState([]);

    useEffect(() => getTeam(teamid), [teamid]);
    useEffect(() => getPlayers(teamid), [teamid]);

    const getTeam = teamid => {
        fetch(getTeamId(teamid)
            , {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "9ece9f0764msh963573b920062e4p1ed0e0jsn637307dfc71f",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com"
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setTeam(data)
            })
            .catch(err => console.log(err));
    };

    const getPlayers = teamid => {
        const data = getPlayerTeam(teamid);
        if (Object.entries(data).length) {
            setDoneFetchPlayers(true);
            setPlayers(data);
        } else {
            setDoneFetchPlayers(false);
        }
    };

    return (
        <DetailContext.Provider value={{ doneFetch, team, doneFetchPlayers, players }}>
            {children}
        </DetailContext.Provider>
    );
};

DetailContextProvider.displayName = "DetailContextProvider";

export default DetailContextProvider;
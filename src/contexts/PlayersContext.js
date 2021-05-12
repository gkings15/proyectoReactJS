import React, { createContext, useState, useEffect } from 'react';
import { getPlayerPages, getPlayerByQuery } from './../constants';

export const PlayersContext = createContext();

const PlayersContextProvider = ({ children }) => {
    const [doneFetchPlayers, setDoneFetchPlayers] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [players, setPlayers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentQuery, setCurrentQuery] = useState('');

    useEffect(() => getPlayers(currentPage), []);

    const getPlayers = page => {
        fetch(getPlayerPages(page)
            , {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "9ece9f0764msh963573b920062e4p1ed0e0jsn637307dfc71f",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com"
                }
            }
        )
            .then(res => res.json())
            .then(resJson => {
                const { data, meta } = resJson;
                setTotalPages(meta.total_pages);
                setPlayers(data);
                setDoneFetchPlayers(true);
            })
            .catch(err => console.log(err));
    }

    const getPlayersByPage = (page, currentQuery) => {
        fetch(getPlayerPages(page, currentQuery)
            , {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "9ece9f0764msh963573b920062e4p1ed0e0jsn637307dfc71f",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com"
                }
            }
        )
            .then(res => res.json())
            .then(resJson => {
                const { data, meta } = resJson;
                setTotalPages(meta.total_pages);
                setPlayers(data);
                setDoneFetchPlayers(true);
            })
            .catch(err => console.log(err));
    };

    const getPlayersByQuery = (page, q_player) => {
        fetch(getPlayerByQuery(page, q_player)
            , {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "9ece9f0764msh963573b920062e4p1ed0e0jsn637307dfc71f",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com"
                }
            }
        )
            .then(res => res.json())
            .then(resJson => {
                const { data, meta } = resJson;
                setTotalPages(meta.total_pages);
                setPlayers(data);
                setDoneFetchPlayers(true);
            })
            .catch(err => console.log(err));
    };

    const validatePage = (e, p) => {
        if (e.type === 'keypress' && e.key !== 'Enter') return;
        if (p && p !== currentPage) {
            setCurrentPage(p);
            setDoneFetchPlayers(false);
            if (currentQuery !== '') {
                getPlayersByQuery(p, currentQuery)
            } else {
                getPlayersByPage(p);
            }
        }
    };

    const validateQPlayer = (e) => {
        if (e.type === 'keypress' && e.key !== 'Enter') return;
        let q_player = e.target.value.trim();
        setCurrentPage(1);
        setDoneFetchPlayers(false);
        setCurrentQuery(q_player);
        getPlayersByQuery(1, q_player)
    };

    return (
        <PlayersContext.Provider value={{ currentPage, players, totalPages, doneFetchPlayers, currentQuery, validatePage, validateQPlayer }}>
            {children}
        </PlayersContext.Provider>
    );
}

PlayersContextProvider.displayName = "PlayersContextProvider";

export default PlayersContextProvider;
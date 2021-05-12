import React, { createContext, useState, useEffect } from 'react';
import { getConfTeams } from './../constants';

export const TeamsContext = createContext();

const TeamsContextProvider = ({ children }) => {
    const q_conf = window.location.pathname.split("/")[2];
    const [doneFetch, setDoneFetch] = useState(false);
    const [teams, setTeams] = useState([]);
    const [conference, setConference] = useState('');
    const [doneFetchSearchedTeams, setdoneFetchSearchedTeams] = useState(false);
    const [searchedTeams, setsearchedTeams] = useState([]);
    const [currentQTeam, setCurrentQTeam] = useState('');

    useEffect(() => getTeams(q_conf), [q_conf]);

    const getTeams = q_conf => {
        setTeams([]);
        setConference('');
        setDoneFetch(false);
        fetch(getConfTeams()
            , {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "9ece9f0764msh963573b920062e4p1ed0e0jsn637307dfc71f",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com"
                }
            }
        )
            .then(res => res.json())
            .then(datares => {
                const { data } = datares;
                const teams = data.filter(({ conference }) => typeof q_conf === 'undefined' ? conference === 'West' || conference === 'East' : conference === q_conf);
                setdoneFetchSearchedTeams(false);
                setDoneFetch(true);
                setTeams(teams)
                setConference(typeof q_conf === 'undefined' ? 'Teams in NBA' : q_conf === 'West' ? 'Teams WEST' : 'Teams EAST');
            })
            .catch(err => console.log(err));
    };

    const getSearchedTeams = (q_team) => {
        const filterTeams = teams.filter((team) => team.full_name === q_team)
        setsearchedTeams(q_team !== '' ? filterTeams : teams);
    }

    const validateQTeam = (e) => {
        let q_team = e.target.value.trim();
        if (e.type === 'keypress' && e.key === 'Enter') {
            if (q_team && q_team !== currentQTeam) {
                setCurrentQTeam(q_team);
                getSearchedTeams(q_team);
                setdoneFetchSearchedTeams(true);
            } else {
                setCurrentQTeam(q_team);
                getSearchedTeams(q_team);
                setdoneFetchSearchedTeams(false);
            }
        }
    }

    return (
        <TeamsContext.Provider value={{ doneFetch, teams, conference, doneFetchSearchedTeams, searchedTeams, validateQTeam }}>
            {children}
        </TeamsContext.Provider>
    );
};

TeamsContextProvider.displayName = "TeamsContextProvider";

export default TeamsContextProvider;
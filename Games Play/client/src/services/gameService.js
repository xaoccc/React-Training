import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/games'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    if (!result) {
        console.log('No games!');
        return {};
    }

    return result;
};

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`, );

    return result;
}

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

    return result;
};

export const deleteGame = async (gameId) => {
    const result = await request.remove(`${baseUrl}/${gameId}`, );

    return result;
}



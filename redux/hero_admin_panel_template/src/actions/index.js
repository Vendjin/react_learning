export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroDelete = (heroId) => {
    return {
        type: 'HERO_DELETE',
        payload: heroId
    }
}

export const heroAdd = (hero) => {
    return {
        type: 'HERO_ADD',
        payload: hero
    }
}
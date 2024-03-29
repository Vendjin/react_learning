import {useCallback, useState} from "react";

export const useHttp = () => {
    const [process, setProcess] = useState('waiting');

    // что бы не создавать лишние запросы
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        // процесс загрузки, когда он запущен, ожидает пока загрузится запрос и не дает наспамить следующие
        setProcess('loading');

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            // setProcess('complete');
            return await response.json();

        } catch (e) {
            setProcess('error');
            throw e;
        }

    }, []);

    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);

    return {request, clearError, process, setProcess}
}

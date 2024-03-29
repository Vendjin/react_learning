import { useCallback } from "react";

export const useHttp = () => {
    // const [process, setProcess] = useState('waiting');
    // useCallback удален тк внутри среза не рабоате Мемоизированная функция
    const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(error) {
            // setProcess('error');
            throw error;
        }
    };

    return {request}
}
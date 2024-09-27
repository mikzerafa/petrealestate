const client = {
    get: async (url: string, port: number, endpoint?: string) => {
        try {
            const fullUrl = endpoint ? `${url}:${port}/${endpoint}` : `${url}:${port}`;
            const response = await fetch(fullUrl);

            if (!response.ok) {
                throw new Error('Error fetching data');
            }

            return await response.json(); // assuming the response is JSON
        } catch (error) {
            return { error: 'Error requesting URL' };
        }
    },

    post: async (url: string, port: string, endpoint: string, bodyStr?: string) => {
        try {
            const fullUrl = `${url}:${port}/${endpoint}`;
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: bodyStr || '{}',
            });

            if (!response.ok) {
                throw new Error('Error posting data');
            }

            return await response.json(); // assuming the response is JSON
        } catch (error) {
            return { error: 'Error requesting URL' };
        }
    }
};

export default {
    client
};

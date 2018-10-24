class HttpBase {
    async   basePost(url, config) {
        try {
            const options = {
                method: 'POST',
                headers: this.headersConfig(config.headers),
                body: JSON.stringify(config.params)
            }
            let query = await this.callHttp(url, options);
            const data = await query.json();
            return data;
        } catch (error) {
            //TODO
            throw new Error(error);
        }
    }



    async baseGet(url, config) {
        try {
            const options = {
                method: 'GET',
                headers: this.headersConfig(config.headers),
            }
            let query = await this.callHttp(url, options);
            const data = await query.json();
            return data;
        } catch (error) {
            //TODO
            throw new Error(error);
        }
    }

    headersConfig(customHeaders) {
        const defaultHeaders = {
            'Content-Type': 'aplication/json',
            Accept: 'aplication/json'

        }
        const headersConfigObjet = Object.assign(defaultHeaders, customHeaders);
        let headers = new Headers(headersConfigObjet);
        return headers;
    }

    callHttp(url, options) {
        let promise = new Promise((resolve, reject) => {
            fetch(url, options)
                .then(reponse => resolve(reponse))
                .catch(error => reject(error))
        });
        return promise
    }


}

export default new HttpBase;
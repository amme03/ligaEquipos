import { API_BASE, HTTP_LIGA } from '../config';
import httpBase from '../http-base';

class HttpLiga {
    async getLiga() {
        try {
            const url = `${API_BASE}${HTTP_LIGA.getLiga}`
            const data = await httpBase.baseGet(url, {})
            return data;
        } catch (error) {
            console.log(error);
        }

    }
    async  getJugadoresByIdEquipo(ID) {
        try {
            const url = `${API_BASE}${HTTP_LIGA.getJugadores}${ID}`;
            console.log("ANANANANNA--->" + url);
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    async  getEquipoById(ID) {
        try {
            const url = `${API_BASE}${HTTP_LIGA.getEquipo}${ID}`;
            console.log("ANANANANNA--->" + url);
            const data = await httpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpLiga;






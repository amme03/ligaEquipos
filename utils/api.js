const API_ENPOINT="https://shoppingproducts.herokuapp.com";

class Api{

    getProfile(){
        let promise= new Promise((resolve,reject)=>{
            fetch(`${API_ENPOINT}/products`)
            .then(response=>response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
            .catch(error => reject(error));
        });
        return promise;
    }

//no es react native , se instancia por que es java script
async getArticleAwait(){
    try {
        const query=await  fetch(`${API_ENPOINT}/products`);
        const data= await query.json();
        return data;

    } catch (error ) {
        console.log(error);
    }
}

async getArticleAwaitDetallle(id){
    try {
        const query=await  fetch(`${API_ENPOINT}/products/${id}`);
        const data= await query.json();
        return data;

    } catch (error ) {
        console.log(error);
    }
}

}
export default new Api();
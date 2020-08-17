
export const getImagen = async() => {

    try {

        const apiKey = 'bA6dDiFNN3yV4ZukLXz1GHo7rcbLKzPI';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'error';
    }

}
/*
Promise is a proxy for a value not necessariy known
when the promise is created.

This lets asynchronous methods return values like
synchronous methods: instead of immediately returning 
the final value, the asynchronous method retyrbs a promise
to supply the value at some point in the future
*/

/*
The EventTarget method addEventListener() sets up a function
that will be called whenever the specified event is delivered
to the target.
*/
export function loadImage(url){
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}

export function loadLevel(name){
    return fetch(`/levels/${name}.json`)
    .then(r => r.json());
}
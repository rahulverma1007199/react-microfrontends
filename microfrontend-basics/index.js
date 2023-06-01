import {registerApplication, start} from "single-spa";
// note - make sure only one part is uncommented at a time
// part 1 - an application does nothing

// const app = {
//     // optional
//     async bootstrap(props){
//         console.log('App is initialised', props);
//     },
//     // required
//     async mount(props){
//         console.log('App is mounting', props);
//     },
//     // required
//     async unmount(props){
//         console.log('App is unmounting', props);
//     },
// };

// part 2 -- an application that mounts a button
const app = {
    // the mount lifecycle function is called everytime the application is added to the DOM.
    async mount(props){
        console.log('App is mounting', props);
        // for single-spa application, the dom element container is seleced by application itself.
        // It is convential to use single-spa-application:app-name as the ID container
        // it's highly recommended to use this convention, as single-spa-layout single-spa-react,
        // single-spa-vue, single-spa-angular and other library default to using it.

        const domElementContainer = document.getElementById(
            "single-spa-application:vanilla-app"
        );

        //single this example doesn't use a front-end, we use browser DOM apis to create the button
        const button = document.createElement("button");
        button.textContent = `Your ${props.adjective} microfrontend!`;
        button.addEventListener('click', ()=> alert('Button was clicked'));

        //each single-spa application should append ('mount') to its dom element container

        domElementContainer.appendChild(button);
    },

    // the unmount lifecycle is called every time the application is removed  from the dom.
    async unmount(props){
        console.log('App is unmounting ', props);
        const domElementContainer = document.getElementById("single-spa-application:vanilla-app");
        domElementContainer.innerHTML = "";
    }
};

//register  your  microfrontend with single-spa
registerApplication({
    // name of your front-end
    name:"vanilla-app",

    // the application object
    app,

    // alternatively you can provide a "loading-function"
    // a loading function returns a promise that resolves with an application object
    //  app : () => import('./first-with-app.js),

    //the list of routes that application is mount (active) for
    activeWhen:['/'], // they are prefix 
    // if you uncomment this , run singleSpaNavigate('/setting) in the browser console
    // to watch the app start out inactive and then mount.
    // activeWhen: ['/setting' , '/dashboard']  // this will route in specific route

    // data to pass the application
    customProps : {
        adjective:"first",
        // you can pass in function (or anything else) as well
        // getAuthToken(){
        //     return 'asfaafrw215afsaa34'
        // }
    },
});

// before start() is called, single-spa will start loading the applications
// but will not mount them. This is to let you delay mounting until you know
// whether the user is logged in, important data is fetched, etc.
// An alternative is to delaying start() is to have each app wait for those things individually.
start();


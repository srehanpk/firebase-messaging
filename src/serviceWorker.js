export default function sWorker () {

  let sWorker = `${process.env.PUBLIC_URL}/sw.js`;

  if ('serviceWorker' in navigator) {

    window.addEventListener('load', function() {

      navigator.serviceWorker.register(sWorker).then(function(registration) {

        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }

}


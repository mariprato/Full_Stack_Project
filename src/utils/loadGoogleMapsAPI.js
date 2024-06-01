let isAPILoaded = false;
let isAPILoading = false;

const loadGoogleMapsAPI = (apiKey) => {
  return new Promise((resolve, reject) => {
    if (isAPILoaded) {
      resolve();
      return;
    }
    if (isAPILoading) {
      const interval = setInterval(() => {
        if (isAPILoaded) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
      return;
    }

    isAPILoading = true;
    window.initMap = () => {
      isAPILoaded = true;
      isAPILoading = false;
      resolve();
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap&loading=async`;
    script.async = true;
    script.defer = true;
    script.onerror = (err) => reject(err);
    document.head.appendChild(script);
  });
};

export default loadGoogleMapsAPI;

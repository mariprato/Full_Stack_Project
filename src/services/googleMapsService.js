
// This class provides methods for initializing and interacting with Google Maps Autocomplete service, ensuring proper initialization and error handling.


class GoogleMapsService {
  constructor() {
    this.isAutocompleteInitialized = false;
  }

  initAutocompleteService() {
    if (this.isAutocompleteInitialized) return;
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      console.error('Google Maps API is not loaded properly.');
      return;
    }
    this.autocompleteService = new window.google.maps.places.AutocompleteService();
    this.isAutocompleteInitialized = true;
  }

  initializeAutocomplete(inputRef, onPlaceChanged) {
    if (!this.isAutocompleteInitialized) {
      console.error('Autocomplete service is not initialized yet.');
      return;
    }

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["address"],
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place || !place.formatted_address) {
        onPlaceChanged(null, new Error("No place details available."));
      } else {
        onPlaceChanged(place.formatted_address, null);
      }
    });

    return autocomplete;
  }
}

export default GoogleMapsService;

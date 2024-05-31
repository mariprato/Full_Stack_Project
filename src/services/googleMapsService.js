class googleMapsService {
  constructor() {
    this.initializeService();
  }

  initializeService() {
    if (window?.google?.maps?.places) {
      this.autocompleteService =
        new window.google.maps.places.AutocompleteService();
    } else {
      window.initMap = () => {
        this.autocompleteService =
          new window.google.maps.places.AutocompleteService();
      };
    }
  }

  initializeAutocomplete(inputRef, onPlaceChanged) {
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

export default googleMapsService;

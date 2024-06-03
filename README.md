# FUR-EVER FOUND

## About

Welcome to Fur-ever Found, a web application dedicated to helping you advertise your lost pets and find missing pets in your area. Our platform is designed with user-friendly features to make your search as effective and seamless as possible. Join our community to ensure every lost pet finds its way back home.

## Installation

### Tools

- [React](https://react.dev/)
- [Google Places API](https://developers.google.com/maps/documentation/javascript/place-autocomplete)
- [FontAwesome](https://fontawesome.com/)
- [Coolors](https://coolors.co/)

### `Obtaining and Adding Your Google API Key`

1. **Obtain Your Google API Key**: If you haven't already, you'll need to obtain a Google API key. You can generate one by following the instructions provided in the [Google API documentation](https://developers.google.com/maps/documentation/javascript/place-autocomplete).

2. **Insert Your API Key**: Once you have your API key, locate the `public/index.html` file in your project directory.

   - Open `public/index.html` in your preferred text editor.
   - Find line 26, which should look similar to this:
     ```html
     <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places"></script>
     ```
   - Replace `YOUR_API_KEY_HERE` with your actual API key.

### Screenshots of Web Application

## Future Development

- **Search Feature**: Implement a robust search functionality to help users find pets quickly and efficiently.
- **Interactive Map**: Integrate an interactive map to visualize the locations of lost and found pets.
- **Found Process Enhancement**:
  - Evaluate the process for marking pets as found to determine if it should be showcased as a success story.
  - Decide whether users can mark any pet as found or only their own.
- **User Account System**: Introduce user accounts to:
  - Ensure only the pet owner can mark their pet as found.
  - Allow direct communication between users through their accounts, eliminating the need for mediation by the Fur-ever Found team.
- **Mobile Responsiveness**: Optimize the website for mobile devices to ensure a seamless user experience across all screen sizes.
- **User Authentication**: Implement login and registration features to streamline communication and reduce the necessity for the Fur-Ever Found team to serve as intermediaries.

## Contributors

- [Abby](https://github.com/abbyunderwood)
- [Amiker](https://github.com/AmikerB)
- [Emma](https://github.com/EmmaHolden)
- [Mariane](https://github.com/mariprato)
- [Laura](https://github.com/Laurita314)

# EcoAlert 🌍📱

EcoAlert is a mobile application built with React Native (Expo) that empowers citizens to report environmental hazards such as waste dumping, pollution, and unsafe ecological practices. The goal is to create a cleaner, safer, and more sustainable environment by enabling real-time reporting and awareness.

---

## ✨ Features

- 📍 Report Hazards: Capture and submit environmental issues with photos, location, and description.  
- 🗺 Interactive Map: View reports submitted by others in your community.  
- 🔔 Notifications: Stay updated on urgent alerts or actions taken by authorities.  
- 👤 User Accounts: Sign up and log in to track your reports.  
- 📂 Report History: Access your past reports anytime.  
- 🌐 Community Impact: Promote collective responsibility for the environment.  

---

## 🛠 Tech Stack

- React Native (Expo) – cross-platform app development.  
- React Navigation – smooth screen transitions and navigation.
- Expo Location & Camera APIs – capture media and geolocation data.  

---

## 🎨 Typography

This project uses **Poppins** font family from Google Fonts for a modern, clean, and consistent UI across all screens.

### Implementation Steps

1. **Install Font Package:**

   ```bash
   npx expo install expo-font @expo-google-fonts/poppins
   ```

2. **Load Fonts in Root Layout:**
   - Imported `useFonts` hook and Poppins font variants in `app/_layout.tsx`
   - Loaded 4 font weights:
     - `Poppins_400Regular` – Regular text
     - `Poppins_500Medium` – Medium emphasis text
     - `Poppins_600SemiBold` – Semi-bold text (buttons, labels)
     - `Poppins_700Bold` – Bold text (headings, titles)

3. **Applied Globally:**
   - Added `fontFamily` property to all text styles across 11+ screen files
   - Font weights automatically mapped to appropriate Poppins variants

### Usage Example

```typescript
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
  },
  body: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
});
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed  
- Expo CLI installed globally:  
  npm install -g expo-cli

### Installation

1. Clone the repository:  
   git clone <https://github.com/FaisalMohammedElorm/EcoAlert.git>
   cd EcoAlert

2. Install dependencies:  
   npm install  
   or  
   yarn install  

3. Run the app:  
   expo start  

4. Scan the QR code with the Expo Go app on your phone to preview.  

---

## 📸 Screenshots

![alt text](photo_1_2026-03-05_18-04-24.jpg) ![alt text](photo_2_2026-03-05_18-04-24.jpg) ![alt text](photo_3_2026-03-05_18-04-24.jpg) ![alt text](photo_4_2026-03-05_18-04-24.jpg) ![alt text](photo_5_2026-03-05_18-04-24.jpg) ![alt text](photo_6_2026-03-05_18-04-24.jpg) ![alt text](photo_7_2026-03-05_18-04-24.jpg) ![alt text](photo_8_2026-03-05_18-04-24.jpg) ![alt text](photo_9_2026-03-05_18-04-24.jpg) ![alt text](photo_10_2026-03-05_18-04-24.jpg)

---

## 🧑‍🤝‍🧑 Contributing

Contributions are welcome!  

- Fork the project  
- Create your feature branch (git checkout -b feature/AmazingFeature)  
- Commit your changes (git commit -m 'Add some AmazingFeature')  
- Push to the branch (git push origin feature/AmazingFeature)  
- Open a Pull Request  

---

## 📜 License

This project is licensed under the MIT License – see the LICENSE file for details.  

---

## 🌱 Acknowledgements

- Built with ❤️ and React Native.  
- Inspired by the need for cleaner and safer communities.  
- Thanks to the Expo and React Native open-source community.  

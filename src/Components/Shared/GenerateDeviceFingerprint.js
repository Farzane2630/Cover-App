// import Fingerprint2 from 'fingerprintjs2';

// export default async function generateDeviceFingerprint() {
//   try {
//     const components = await Fingerprint2.getPromise();

//     console.log({
//       userAgent: components[0].value,
//       deviceMemory: components[4].value,
//       screenResolution: components[6].value[0] *components[6].value[1],
//       platform: components[16].value,
//       touchSupport: components[25].value,
//       audio: components[27].value,
//     });
    
//     const values = components.map((component) => component.value);
//     const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
//     // console.log("Device Fingerprint:", fingerprint);
//     return {
//       userAgent: components[0].value,
//       deviceMemory: components[4].value,
//       screenResolution: components[6].value[0] *components[6].value[1],
//       platform: components[16].value,
//       touchSupport: components[25].value,
//       audio: components[27].value,
//     }
//     // Store or send the fingerprint to your server for validation
//   } catch (error) {
//     console.error("Error generating device fingerprint:", error);
//   }
// }

// fingerprintService.js

import Fingerprint2 from 'fingerprintjs2';

async function generateDeviceFingerprint() {
  try {
    const components = await Fingerprint2.getPromise();
    const fingerprintData = {
      userAgent: components[0].value,
      deviceMemory: components[4].value,
      screenResolution: components[6].value[0] * components[6].value[1],
      platform: components[16].value,
      touchSupport: components[25].value,
      audio: components[27].value,
    };

    const values = components.map((component) => component.value);
    const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);

    console.log(fingerprint);

    return { fingerprintData, fingerprint };
  } catch (error) {
    console.error("Error generating device fingerprint:", error);
    return { error: true };
  }
}

function saveFingerprintToStorage(fingerprint) {
  localStorage.setItem('deviceFingerprint', fingerprint);
}

function getStoredFingerprint() {
  return localStorage.getItem('deviceFingerprint');
}

function checkDeviceChanges() {
  const { fingerprintData, fingerprint } = generateDeviceFingerprint();
  const storedFingerprint = getStoredFingerprint();
  
  if (storedFingerprint && storedFingerprint !== fingerprint) {
    console.log("storedFingerprint", storedFingerprint, "fingerprint", fingerprint);
    // Navigate the user to the "/guidance/step-1" route after clicking OK
    window.location.href = '/guidance/step-1';
    alert('Device has changed. You must start the process from the beginning.');
  } else {
    // Save the current fingerprint to local storage for future comparisons
    saveFingerprintToStorage(fingerprint);
  }

  return fingerprintData;
}

export { generateDeviceFingerprint, saveFingerprintToStorage, getStoredFingerprint, checkDeviceChanges };

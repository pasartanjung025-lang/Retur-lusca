const fs=require('fs');
const p='android/app/src/main/AndroidManifest.xml';
let s=fs.readFileSync(p,'utf8');
if(!s.includes('android.permission.CAMERA')) s=s.replace(/(<manifest[^>]*>)/, '$1\n    <uses-permission android:name="android.permission.CAMERA" />\n    <uses-feature android:name="android.hardware.camera" android:required="false" />');
fs.writeFileSync(p,s);
console.log('Android camera permission configured');

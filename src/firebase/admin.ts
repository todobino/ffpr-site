
import * as admin from 'firebase-admin';

// This is the service account key. It is safe to expose this in the browser
// as long as you have proper security rules. However, in this case, we will
// only use this on the server.
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : undefined;

function initializeAdmin() {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  if (!serviceAccount) {
    // In production (Firebase App Hosting), the GOOGLE_APPLICATION_CREDENTIALS
    // env var should be set automatically.
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        console.warn('Firebase Admin SDK is not configured. Missing FIREBASE_SERVICE_ACCOUNT or GOOGLE_APPLICATION_CREDENTIALS. Using default credentials.');
        admin.initializeApp();
        return admin.app();
    }
     admin.initializeApp();
     return admin.app();
  }


  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // You can also specify the databaseURL if you have a Realtime Database
  });
}

export function getFirestoreAdmin() {
  initializeAdmin();
  return admin.firestore();
}

export function getAuthAdmin() {
  initializeAdmin();
  return admin.auth();
}

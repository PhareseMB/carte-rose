import { auth, db } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  addDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";

export default class FirebaseService {
  constructor() {
    this.auth = auth;
    this.db = db;
  }
  async register(email, password, name, role, entrepriseId) {
    try {
      const { user } = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const userData = {
        email: user.email,
        name,
        role,
        entrepriseId,
        createdAt: new Date(),
      };
      await Promise.all([
        updateProfile(user, { displayName: name }),
        setDoc(doc(this.db, "users", user.uid), userData),
        sendEmailVerification(user),
      ]);

      return { ...userData, uid: user.uid };
    } catch (error) {
      throw error;
    }
  }
  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser() {
    try {
      const user = this.auth.currentUser;
      if (user) {
        await deleteUser(user);
        await deleteDoc(doc(this.db, "users", user.uid));
      }
    } catch (error) {
      throw error;
    }
  }

  async getDocument(collectionName, documentId) {
    try {
      const docRef = doc(this.db, collectionName, documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("No such document!");
      }
    } catch (error) {
      throw error;
    }
  }

  async getAllDocuments(collectionName) {
    try {
      const querySnapshot = await getDocs(collection(this.db, collectionName));
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      return documents;
    } catch (error) {
      throw error;
    }
  }

  async updateDocument(collectionName, documentId, data) {
    try {
      const docRef = doc(this.db, collectionName, documentId);
      await updateDoc(docRef, data);
    } catch (error) {
      throw error;
    }
  }

  async deleteDocument(collectionName, documentId) {
    try {
      const docRef = doc(this.db, collectionName, documentId);
      await deleteDoc(docRef);
    } catch (error) {
      throw error;
    }
  }

  async addDocument(collectionName, data) {
    try {
      const docRef = await addDoc(collection(this.db, collectionName), data);
      return docRef.id;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return this.auth.currentUser;
    } catch (error) {
      throw error;
    }
  }
}

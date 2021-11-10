import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";

//All functions below are for interacting with cloud service firebase

export async function createArticle({ title, rating, body }) {
  const data = { title, rating, body, data: Timestamp.now() };
  const docRef = await addDoc(collection(db, "articles"), {
    Title: title,
    Rating: rating,
    Body: body,
    Author: "Claudia",
  });

  return docRef;
}

export async function fetchArticles() {
  const querySnapshot = await getDocs(collection(db, "articles"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function deleteArticle(id) {
  await deleteDoc(doc(db, "articles", id));
  return id;
}

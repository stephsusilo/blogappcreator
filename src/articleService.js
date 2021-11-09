import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

export async function createArticle({ title, body }) {
  const docRef = await addDoc(collection(db, "articles"), {
    Title: title,
    Body: body,
    Author: "Claudia",
  });

  //const doc = await docRef.get();
  return docRef.getData();
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

// export async function fetchArticles() {
//   return Object.entries(articles).map(([id, data]) => ({ id, ...data }));
// }

// export async function fetchArticleById(id) {
//   return articles[id];
// }

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

  //const doc = await docRef.get();
  return docRef;
}

// export async function fetchArticles() {
//   const snapshot = await getDocs(
//     query(collection(db, "articles"), orderBy("date", "desc"), limit(20))
//   );
//   return snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
// }

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
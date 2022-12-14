import { db } from ".";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";

const save = async (data: any, callback?: any) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...data,
      status: "active",
    });
    if (callback) callback(docRef);
  } catch (error) {
    console.log(error);
  }
};

const get = async (callback?: any) => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "users"), where("status", "==", "active"))
    );

    return await querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.log(error);
  }
};

const deleted = async (id: string, callback?: any) => {
  try {
    const element = doc(db, "users", id);
    await updateDoc(element, {
      status: "deleted",
    });
  } catch (error) {
    console.log(error);
  }
};

export { save, get, deleted };

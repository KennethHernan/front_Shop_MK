import { getDatabase, ref, get, child } from "firebase/database";
import { app } from "../firebase";
const db = getDatabase(app);

//======================= Listar solo una tabla ===========================

export const getProducts00 = async () => {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, "product"));

    if (!snapshot.exists()) return [];

    const data = snapshot.val();
    return Object.entries(data).map(([id, value]) => ({ id, ...value }));
  } catch (error) {
    console.error("Error al leer productos:", error);
    return [];
  }
};
export const getCategorys = async () => {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, "category"));

    if (!snapshot.exists()) return [];

    const data = snapshot.val();
    return Object.entries(data).map(([id, value]) => ({ id, ...value }));
  } catch (error) {
    console.error("Error al leer category:", error);
    return [];
  }
};


//======================= Listar varias tablas relacionadas ===========================
export const getCategories = async () => {
  const snapshot = await get(child(ref(db), "category"));
  if (snapshot.exists()) {
    const data = snapshot.val();
    return Object.entries(data).reduce((acc, [id, value]) => {
      acc[id] = value.category || "null";
      return acc;
    }, {});
  }
  return {};
};
export const getOffers = async () => {
  const snapshot = await get(child(ref(db), "offers"));
  if (snapshot.exists()) {
    const data = snapshot.val();
    return Object.entries(data).reduce((acc, [id, value]) => {
      acc[id] = value.discount || 0; 
      return acc;
    }, {});
  }
  return {};
};


export const getProducts = async () => {
  const [categories, offers] = await Promise.all([
    getCategories(),
    getOffers(),
  ]);

  const snapshot = await get(child(ref(db), "product"));
  if (snapshot.exists()) {
    const data = snapshot.val();
    return Object.entries(data).map(([id, value]) => ({
      id,
      ...value,
      category: categories[value.idCategory],
      discount: offers[value.idOffers],
    }));
  }
  return [];
};
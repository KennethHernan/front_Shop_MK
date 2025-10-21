import { getDatabase, ref, get, push, set, child } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app, auth } from "../firebase";
import { v4 as uuidv4 } from "uuid";
const db = getDatabase(app);

//======================= SINGIN / LOGIN / LOGOUT ===========================

export const crearUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Cuenta creada:", user);
  } catch (error) {
    console.error("Error al crear la cuenta:", error.code, error.message);
  }
};

export const cerrarSesion = async () => {
  await signOut(auth);
  console.log("Sesión cerrada");
};

export const iniciarSesion = async (auth, email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Sesión iniciada");
  } catch (error) {
    console.error("Eror: " + error.message);
  }
};

//======================= CREAR, ACTUALIZAR, ELIMINAR ===========================

export const createNewOrder = async (orderData) => {
  try {
    const orderId = uuidv4();
    await set(ref(db, `orderMK/${orderId}`), {
      idOrder: orderId,
      ...orderData,
      createdAt: new Date().toISOString(),
    });
    return orderId;
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw error;
  }
};

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

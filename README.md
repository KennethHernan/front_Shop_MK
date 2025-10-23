# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## ============== TABLA NEW MK ======================
productMK {
    "idProduct" : "08e6638b-be9a-4a2f-8b14-f2663b065966",
    "idCategoryMK" : "1eb9cff7-449b-4918-9e77-025e903d1688",
    "idOffersMK" : "c9fb6116-ff32-4e0c-b9a4-2ea2883fbb40",
    "description" : "Brazaletes estilo chunkys para mujer, pulsera de brazo geométrica",
    "nameP" : "Brazaletes Chunky - Modelo N°6",
    "price" : "27",
    "stock" : "22",
    "talla" : "[9,2,5]", 
    "urlP" : "https://res.cloudinary.com/dr2c4", //Imagen principal
    "urlP2" : "https://res.cloudinary.com/dr2c4", //Imagen secundario
    "urlP3" : "https://res.cloudinary.com/dr2c4", //Imagen informativa medidas - toda iamgen a formato .webp
}

categoryMK {
    "idCategoryMK" : "1eb9cff7-449b-4918-9e77-025e903d1688",
    "nameC" : "Joyas Chunkys",
    "url" : ""https://res.cloudinary.com/dr2c4aovp/image/upload/",
}

OffersMK {
    "descriptionO" : "¡Aprovecha esta oferta exclusiva! Descuento válido hasta agotar stock.",
    "discount" : "15",
    "idOffersMK" : "9fcdba5a-c9f1-458f-afe5-881e9055f55d"
}

## ============== ITEM CARRITO ======================
{
    "id": "08e6638b-be9a-4a2f-8b14-f2663b065966",
    "description": "Brazaletes estilo chunkys para mujer, pulsera de brazo geométrica",
    "idCategory": "1eb9cff7-449b-4918-9e77-025e903d1688",
    "idOffers": "c9fb6116-ff32-4e0c-b9a4-2ea2883fbb40",
    "idProduct": "08e6638b-be9a-4a2f-8b14-f2663b065966",
    "nameP": "Brazaletes Chunky - Modelo N°6",
    "price": 27,
    "stock": 22,
    "urlP": "https://res.cloudinary.com/dr2c4aovp/image/upload/v1730836269/wsyi3nggwjurisc4yhq5.jpg",
    "category": "Joyas Chunkys",
    "discount": 0,
    "cantidad": 1
}
# ================ USERDATA =========================
   const nuevaOrden = {
      email: data.email,
      nombre: data.nombre,
      apellido: data.apellido,
      dni: data.dni,
      departamento: data.departamento,
      distrito: data.distrito,
      direccion: data.direccion,
      phone: data.phone,
      items: itemCarrito,
      total: totalPrecio,
      status: "pendiente",
      idPayment: "null",
    };

# Prueba: [ 4009 1753 3280 6176 DNI: 123456789]
APP_USR-2503513816067504-102011-e2fc66c3174376788b3a3a4a80a089a7-2057040234

# Producción:
APP_USR-2363578276435460-101814-d7307a38e81c0731d8a0c1594ec85344-1998128732



# =============== PREFERENCIA DE PRODUCCION =========
{
    "preference": {
        "body": {
            "additional_info": "",
            "auto_return": "approved",
            "back_urls": {
                "failure": "https://mayikh.vercel.app/checkout/347b702e-670b-4bf2-85ea-db6651ffef65/failure",
                "pending": "https://mayikh.vercel.app/checkout/347b702e-670b-4bf2-85ea-db6651ffef65/pending",
                "success": "https://mayikh.vercel.app/checkout/347b702e-670b-4bf2-85ea-db6651ffef65/success"
            },
            "binary_mode": false,
            "client_id": "2363578276435460",
            "collector_id": 1998128732,
            "coupon_code": null,
            "coupon_labels": null,
            "date_created": "2025-10-21T10:22:25.292-04:00",
            "date_of_expiration": null,
            "expiration_date_from": null,
            "expiration_date_to": "2025-10-22T14:22:25.084-05:00",
            "expires": true,
            "external_reference": "cbfa83a5-0759-4825-9346-66ff071b57bf",
            "id": "1998128732-550bb863-794a-405e-840c-50f830be31bf",
            "init_point": "https://www.mercadopago.com.pe/checkout/v1/redirect?pref_id=1998128732-550bb863-794a-405e-840c-50f830be31bf",
            "internal_metadata": null,
            "items": [
                {
                    "id": "0cf80dbe-8c58-41cf-8f2e-de4be2e50159",
                    "category_id": "ee847439-b328-46d9-91c5-2ff6ae00ddb6",
                    "currency_id": "PEN",
                    "description": "Pulsera pandora de acero inoxidable, dije de estrella de mar y corazón rosado",
                    "picture_url": "https://http2.mlstatic.com/D_NQ_NP_784042-MPE95371946540_102025-F.jpg",
                    "title": "Pandora Modelo 1 - Modelo N°4",
                    "quantity": 1,
                    "unit_price": 18
                }
            ],
            "marketplace": "MP-MKT-2363578276435460",
            "marketplace_fee": 0,
            "metadata": {},
            "notification_url": "https://checkoutmk.vercel.app/api/webhook",
            "operation_type": "regular_payment",
            "payer": {
                "phone": {
                    "area_code": "51",
                    "number": "952304548"
                },
                "address": {
                    "zip_code": "",
                    "street_name": "Mzd1 lote 40",
                    "street_number": null
                },
                "email": "kenetydelaceuz14@gmail.com",
                "identification": {
                    "number": "72974488",
                    "type": "DNI"
                },
                "name": "Kenneth Hernan",
                "surname": "De La Cruz Romero",
                "date_created": null,
                "last_purchase": null
            },
            "payment_methods": {
                "default_card_id": null,
                "default_payment_method_id": null,
                "excluded_payment_methods": [
                    {
                        "id": ""
                    }
                ],
                "excluded_payment_types": [
                    {
                        "id": ""
                    }
                ],
                "installments": null,
                "default_installments": null
            },
            "processing_modes": null,
            "product_id": null,
            "preference_expired": false,
            "redirect_urls": {
                "failure": "",
                "pending": "",
                "success": ""
            },
            "sandbox_init_point": "https://sandbox.mercadopago.com.pe/checkout/v1/redirect?pref_id=1998128732-550bb863-794a-405e-840c-50f830be31bf",
            "site_id": "MPE",
            "shipments": {
                "default_shipping_method": null,
                "receiver_address": {
                    "zip_code": "",
                    "street_name": "",
                    "street_number": null,
                    "floor": "",
                    "apartment": "",
                    "city_name": null,
                    "state_name": null,
                    "country_name": null,
                    "neighborhood": null
                }
            },
            "statement_descriptor": "MAYIKH STYLE",
            "total_amount": null,
            "last_updated": null,
            "financing_group": ""
        },
        "response": {
            "additional_info": "",
            "auto_return": "approved",
            "back_urls": {
                "failure": "https://mayikh.vercel.app/checkout/347b702e-670b-4bf2-85ea-db6651ffef65/failure",
                "pending": "https://mayikh.vercel.app/checkout/347b702e-670b-4bf2-85ea-db6651ffef65/pending",
                "success": "https://mayikh.vercel.app/checkout/347b702e-670b-4bf2-85ea-db6651ffef65/success"
            },
            "binary_mode": false,
            "client_id": "2363578276435460",
            "collector_id": 1998128732,
            "coupon_code": null,
            "coupon_labels": null,
            "date_created": "2025-10-21T10:22:25.292-04:00",
            "date_of_expiration": null,
            "expiration_date_from": null,
            "expiration_date_to": "2025-10-22T14:22:25.084-05:00",
            "expires": true,
            "external_reference": "cbfa83a5-0759-4825-9346-66ff071b57bf",
            "id": "1998128732-550bb863-794a-405e-840c-50f830be31bf",
            "init_point": "https://www.mercadopago.com.pe/checkout/v1/redirect?pref_id=1998128732-550bb863-794a-405e-840c-50f830be31bf",
            "internal_metadata": null,
            "items": [
                {
                    "id": "0cf80dbe-8c58-41cf-8f2e-de4be2e50159",
                    "category_id": "ee847439-b328-46d9-91c5-2ff6ae00ddb6",
                    "currency_id": "PEN",
                    "description": "Pulsera pandora de acero inoxidable, dije de estrella de mar y corazón rosado",
                    "picture_url": "https://http2.mlstatic.com/D_NQ_NP_784042-MPE95371946540_102025-F.jpg",
                    "title": "Pandora Modelo 1 - Modelo N°4",
                    "quantity": 1,
                    "unit_price": 18
                }
            ],
            "marketplace": "MP-MKT-2363578276435460",
            "marketplace_fee": 0,
            "metadata": {},
            "notification_url": "https://checkoutmk.vercel.app/api/webhook",
            "operation_type": "regular_payment",
            "payer": {
                "phone": {
                    "area_code": "51",
                    "number": "952304548"
                },
                "address": {
                    "zip_code": "",
                    "street_name": "Mzd1 lote 40",
                    "street_number": null
                },
                "email": "kenetydelaceuz14@gmail.com",
                "identification": {
                    "number": "72974488",
                    "type": "DNI"
                },
                "name": "Kenneth Hernan",
                "surname": "De La Cruz Romero",
                "date_created": null,
                "last_purchase": null
            },
            "payment_methods": {
                "default_card_id": null,
                "default_payment_method_id": null,
                "excluded_payment_methods": [
                    {
                        "id": ""
                    }
                ],
                "excluded_payment_types": [
                    {
                        "id": ""
                    }
                ],
                "installments": null,
                "default_installments": null
            },
            "processing_modes": null,
            "product_id": null,
            "preference_expired": false,
            "redirect_urls": {
                "failure": "",
                "pending": "",
                "success": ""
            },
            "sandbox_init_point": "https://sandbox.mercadopago.com.pe/checkout/v1/redirect?pref_id=1998128732-550bb863-794a-405e-840c-50f830be31bf",
            "site_id": "MPE",
            "shipments": {
                "default_shipping_method": null,
                "receiver_address": {
                    "zip_code": "",
                    "street_name": "",
                    "street_number": null,
                    "floor": "",
                    "apartment": "",
                    "city_name": null,
                    "state_name": null,
                    "country_name": null,
                    "neighborhood": null
                }
            },
            "statement_descriptor": "MAYIKH STYLE",
            "total_amount": null,
            "last_updated": null,
            "financing_group": ""
        },
        "status": 201
    },
    "preferenceId": "1998128732-550bb863-794a-405e-840c-50f830be31bf",
    "init_point": "https://www.mercadopago.com.pe/checkout/v1/redirect?pref_id=1998128732-550bb863-794a-405e-840c-50f830be31bf"
}

# ========== URL PAGO EXITOSO=== 
https://mayikh.vercel.app/checkout/347b702e-670b-4bf2-85ea-db6651ffef65/success?collection_id=1341859723&collection_status=approved&payment_id=1341859723&status=approved&external_reference=b994c699-c64a-4504-850a-1515c98aecaf&payment_type=account_money&merchant_order_id=34916389643&preference_id=2057040234-bb7d217d-f950-48bb-88a3-869519381c55&site_id=MPE&processing_mode=aggregator&merchant_account_id=null


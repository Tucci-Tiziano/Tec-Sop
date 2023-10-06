from PIL import Image  
import face_recognition
import pymongo

class Cara:
    img : Image
    encoded : list 

    def encoding():
        Cara.encoded = face_recognition.face_encodings(Cara.img)[0]

    def guardar():
        client = pymongo.MongoClient("mongodb://localhost:27017/")  # Reemplaza localhost y el puerto por la ubicación de tu base de datos MongoDB
        db = client["caras"] 
        
        # Crear una colección (tabla) en la base de datos
        collection = db["mi_coleccion"]  # Reemplaza "mi_coleccion" con el nombre de tu colección

        # Guardar la lista eList en la colección como documentos JSON
        for encoding in Cara.encoded:
            document = {"encoding": encoding.tolist()}  # Convierte la matriz NumPy a una lista para poder almacenarla en MongoDB
            collection.insert_one(document)


        client.close()
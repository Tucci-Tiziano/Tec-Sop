import cv2
import face_recognition
import os


face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

img = cv2.imread("imagenExam.jpeg") 
encode = face_recognition.face_encodings(img)[0]

eList = []



img1 = cv2.imread("obama1.jpeg")
img2 = cv2.imread("obama2.jpeg")
img3 = cv2.imread("obama3.jpeg")
img4 = cv2.imread("trump.jpeg")
img5 = cv2.imread("obama4.jpeg")
fi = face_recognition.face_encodings(img1)[0]
s = face_recognition.face_encodings(img2)[0]
t = face_recognition.face_encodings(img3)[0]
fo = face_recognition.face_encodings(img4)[0]
f = face_recognition.face_encodings(img5)[0]
eList.append(fi)
eList.append(s)
eList.append(t)
eList.append(fo)
eList.append(f)


for x in eList:
  print(face_recognition.compare_faces([encode], x))



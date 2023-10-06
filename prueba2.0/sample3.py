import numpy
import numpy.typing as npt
from typing import cast, Type, Sequence
import typing
import cv2
from PIL import Image  
import PIL  
import os
import CapturarCara

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

cap = cv2.VideoCapture(0)

while cap.isOpened():
    _, img = cap.read()
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)

    for (x, y , w ,h) in faces:
        w=w+20
        x=x-10
        h=h+60
        y=y-30
        cv2.rectangle(img, (x,y), (x+w, y+h), (0, 0 , 255), 3)
        roi_gray = gray[y:y+h, x:x+w]
        roi_color = img[y:y+h, x:x+w]
    cv2.imshow('img', img)
    if cv2.waitKey(1) == ord('q'):
        _, img = cap.read()
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 10)
        w=w+20
        x=x-10
        h=h+60
        y=y-30
        img = img[y:y+h, x:x+w]
        filename=("imagenExam.png")
        cv2.imwrite(filename, img) 
        break

cap.release()
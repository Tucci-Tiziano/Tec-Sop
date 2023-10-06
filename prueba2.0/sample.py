import numpy
import numpy.typing as npt
from typing import cast, Type, Sequence
import typing
import cv2

cap = cv2.VideoCapture(0)
cont = 0
while True:
    ret, frame = cap.read()
    frame = cv2.resize(frame, (1000, 1000))
    #frame = cv2.cvtColor(frame, cv2.COLOR_RGB2YUV)
    cv2.imshow("Frame", frame)
    if cv2.waitKey(1) == ord("q"):
        break
cap.release()

cv2.destroyAllWindows()